import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUsers,
  FaHeartbeat,
  FaHandHoldingHeart,
  FaEnvelope,
} from "react-icons/fa";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { getBaseUrl } from "../../../utils/useGetUrl";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalDonors: 0,
    totalRequests: 0,
    totalMessages: 0,
  });

  const [donorsByBloodGroup, setDonorsByBloodGroup] = useState({});
  const [requestsByStatus, setRequestsByStatus] = useState({});

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [usersRes, donorsRes, requestsRes] = await Promise.all([
        axios.get(`${getBaseUrl()}api/auth/users`),
        axios.get(`${getBaseUrl()}api/donor`),
        axios.get(`${getBaseUrl()}api/blood-request/all`),
        //   axios.get(`${getBaseUrl()}api/messages`),
      ]);

      // Set stats
      setStats({
        totalUsers: usersRes.data.data.length,
        totalDonors: donorsRes.data.data.length,
        totalRequests: requestsRes.data.data.requests.length,
      });

      // latest 5 requests

      // Prepare donors by blood group
      const bloodGroups = {};
      donorsRes.data.data.forEach((d) => {
        bloodGroups[d.bloodGroup] = (bloodGroups[d.bloodGroup] || 0) + 1;
      });
      setDonorsByBloodGroup(bloodGroups);

      // Prepare requests by status
      const statusCount = {};
      requestsRes.data.data.requests.forEach((r) => {
        statusCount[r.status] = (statusCount[r.status] || 0) + 1;
      });
      setRequestsByStatus(statusCount);
    } catch (error) {
      console.error(error);
    }
  };

  const statsCards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: <FaUsers className="text-white text-3xl" />,
      bg: "bg-[#FF0019]",
    },
    {
      title: "Total Donors",
      value: stats.totalDonors,
      icon: <FaHandHoldingHeart className="text-white text-3xl" />,
      bg: "bg-[#F97316]",
    },
    {
      title: "Blood Requests",
      value: stats.totalRequests,
      icon: <FaHeartbeat className="text-white text-3xl" />,
      bg: "bg-[#3B82F6]",
    },
    {
      title: "Messages",
      value: 0,
      icon: <FaEnvelope className="text-white text-3xl" />,
      bg: "bg-[#10B981]",
    },
  ];

  // Charts data
  const donorsChartData = {
    labels: Object.keys(donorsByBloodGroup),
    datasets: [
      {
        label: "Donors by Blood Group",
        data: Object.values(donorsByBloodGroup),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#F87171",
          "#34D399",
        ],
      },
    ],
  };

  const requestsChartData = {
    labels: Object.keys(requestsByStatus),
    datasets: [
      {
        label: "Blood Requests Status",
        data: Object.values(requestsByStatus),
        backgroundColor: ["#FBBF24", "#10B981", "#EF4444"],
      },
    ],
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statsCards.map((card, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl flex justify-between items-center ${card.bg} text-white shadow-md hover:shadow-lg transition`}
          >
            <div>
              <h3 className="font-semibold text-lg">{card.title}</h3>
              <p className="text-2xl font-bold mt-2">{card.value}</p>
            </div>
            <div>{card.icon}</div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-[#FF0019]">
            Donors by Blood Group
          </h3>
          <Doughnut data={donorsChartData} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold mb-4 text-[#FF0019]">
            Blood Requests Status
          </h3>
          <Bar
            data={requestsChartData}
            options={{
              responsive: true,
              plugins: { legend: { position: "bottom" } },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
