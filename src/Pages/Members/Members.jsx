import React, { useEffect, useState } from "react";
import axios from "axios";
import { getBaseUrl } from "../../utils/useGetUrl";


const Members = () => {
  const [users, setUsers] = useState([]);
  console.log(users)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${getBaseUrl()}api/auth/users`);
        setUsers(res.data.data || []);
       
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">Loading members...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-bold text-[#FF0019] mb-6 text-center">
        Members
      </h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#FF0019] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                #
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold uppercase">
                Role
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                  No members found.
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={user._id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm">{index + 1}</td>
                  <td className="px-6 py-4 text-sm">{user.name}</td>
                  <td className="px-6 py-4 text-sm">{user.email}</td>
                  <td className="px-6 py-4 text-sm">{user.phone || "-"}</td>
                  <td className="px-6 py-4 text-sm">{user.role || "User"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Members;
