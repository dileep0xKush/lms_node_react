import {
  FiUsers,
  FiBookOpen,
  FiDollarSign,
  FiTrendingUp,
} from "react-icons/fi";
import { useEffect } from "react";

import Card from "../../components/Card";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard — LMS Admin";
  }, []);

  return (
    <div className="space-y-6">
      {/* --- Top Stats --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Students */}
        <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Total Students
              </p>
              <h2 className="text-3xl font-bold mt-1">1,248</h2>
              <span className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <FiTrendingUp /> +8% this month
              </span>
            </div>
            <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl shadow-sm">
              <FiUsers size={26} />
            </div>
          </div>
        </Card>

        {/* Courses */}
        <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Active Courses
              </p>
              <h2 className="text-3xl font-bold mt-1">32</h2>
              <span className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <FiTrendingUp /> +3 new this week
              </span>
            </div>
            <div className="p-3 bg-purple-100 text-purple-700 rounded-2xl shadow-sm">
              <FiBookOpen size={26} />
            </div>
          </div>
        </Card>

        {/* Revenue */}
        <Card className="bg-gradient-to-br from-green-50 to-white border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Monthly Revenue
              </p>
              <h2 className="text-3xl font-bold mt-1">$12,940</h2>
              <span className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <FiTrendingUp /> +12% growth
              </span>
            </div>
            <div className="p-3 bg-green-100 text-green-700 rounded-2xl shadow-sm">
              <FiDollarSign size={26} />
            </div>
          </div>
        </Card>

        {/* Enrollments */}
        <Card className="bg-gradient-to-br from-orange-50 to-white border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                New Enrollments
              </p>
              <h2 className="text-3xl font-bold mt-1">187</h2>
              <span className="text-xs text-green-600 flex items-center gap-1 mt-1">
                <FiTrendingUp /> +5% since last week
              </span>
            </div>
            <div className="p-3 bg-orange-100 text-orange-700 rounded-2xl shadow-sm">
              <FiTrendingUp size={26} />
            </div>
          </div>
        </Card>
      </div>

      {/* --- Middle Section --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Chart Placeholder */}
        <Card>
          <h3 className="font-semibold mb-3">Revenue Overview</h3>
          <div className="h-52 rounded-xl border border-dashed flex items-center justify-center text-gray-400 text-sm bg-gray-50">
            (Chart will go here)
          </div>
        </Card>

        {/* Top Courses */}
        <Card>
          <h3 className="font-semibold mb-3">Top Performing Courses</h3>

          <ul className="space-y-3 text-sm">
            <li className="flex justify-between items-center border-b pb-2">
              <span>React Basics</span>
              <span className="font-semibold bg-green-50 px-2 py-1 rounded-md text-green-700">
                +92%
              </span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span>Node API Mastery</span>
              <span className="font-semibold bg-green-50 px-2 py-1 rounded-md text-green-700">
                +78%
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span>UI / UX Foundations</span>
              <span className="font-semibold bg-green-50 px-2 py-1 rounded-md text-green-700">
                +65%
              </span>
            </li>
          </ul>
        </Card>

        {/* Recent Activity */}
        <Card>
          <h3 className="font-semibold mb-3">Recent Activity</h3>

          <div className="space-y-3 text-sm">
            <div className="p-2 bg-gray-50 rounded-lg">
              👤 John enrolled in <b>React Basics</b>
            </div>
            <div className="p-2 bg-gray-50 rounded-lg">
              💳 Payment received from <b>Sarah</b>
            </div>
            <div className="p-2 bg-gray-50 rounded-lg">
              📚 New course added: <b>TypeScript Pro</b>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
