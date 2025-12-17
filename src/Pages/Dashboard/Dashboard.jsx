import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { getBaseUrl } from "../../utils/useGetUrl";

const Dashboard = () => {
  const { loading, user } = useContext(AuthContext);
  const [role, setRole] = useState(null);
  console.log(role)

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${getBaseUrl()}api/auth/users/${user.email}`)
        .then((res) => {
          const data = res.data.data;
          const role = data.role;
          setRole(role);
        })
        .catch((err) => {
          console.error("Error fetching role:", err);
        });
    }
  }, [user?.email]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }

  if (role === "admin") {
    return <div>admin</div>;
  } else if (role === "user") {
    return <div>usrer</div>;
  } else {
    return <p>Unathorized</p>;
  }
};

export default Dashboard;
