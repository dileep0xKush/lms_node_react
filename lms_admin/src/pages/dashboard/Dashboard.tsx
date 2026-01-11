import { useEffect } from 'react';
import { FiUsers, FiBookOpen, FiDollarSign, FiTrendingUp, FiActivity } from 'react-icons/fi';

import Card from '../../components/Card';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Dashboard — LMS Admin';
  }, []);

  const stats = [
    {
      label: 'Total Students',
      value: '1,248',
      trend: '+8% this month',
      icon: FiUsers,
      color: 'blue',
    },
    {
      label: 'Active Courses',
      value: '32',
      trend: '+3 this week',
      icon: FiBookOpen,
      color: 'purple',
    },
    {
      label: 'Monthly Revenue',
      value: '$12,940',
      trend: '+12% growth',
      icon: FiDollarSign,
      color: 'green',
    },
    {
      label: 'New Enrollments',
      value: '187',
      trend: '+5% this week',
      icon: FiTrendingUp,
      color: 'orange',
    },
  ];

  return (
    <div className="space-y-6">
      {/* ===================== Stats ===================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, trend, icon: Icon, color }) => (
          <Card
            key={label}
            className={`bg-gradient-to-br from-${color}-50 to-white border-${color}-100`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
                <h2 className="text-3xl font-bold mt-1 text-gray-900">{value}</h2>

                <span className="mt-1 inline-flex items-center gap-1 text-xs text-green-600">
                  <FiTrendingUp className="text-sm" />
                  {trend}
                </span>
              </div>

              <div
                className={`
                  p-3 rounded-2xl shadow-sm
                  bg-${color}-100 text-${color}-700
                `}
              >
                <Icon size={26} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* ===================== Middle ===================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Revenue Chart */}
        <Card>
          <h3 className="font-semibold text-gray-900 mb-3">Revenue Overview</h3>

          <div className="h-52 rounded-xl border border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 bg-gray-50 text-gray-400 text-sm">
            <FiActivity className="text-2xl" />
            Chart will appear here
          </div>
        </Card>

        {/* Top Courses */}
        <Card>
          <h3 className="font-semibold text-gray-900 mb-3">Top Performing Courses</h3>

          <ul className="space-y-3 text-sm">
            {[
              { name: 'React Basics', value: '+92%' },
              { name: 'Node API Mastery', value: '+78%' },
              { name: 'UI / UX Foundations', value: '+65%' },
            ].map((course) => (
              <li
                key={course.name}
                className="flex items-center justify-between border-b last:border-b-0 pb-2"
              >
                <span className="text-gray-700">{course.name}</span>
                <span className="px-2 py-1 rounded-md text-xs font-semibold bg-green-50 text-green-700">
                  {course.value}
                </span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Recent Activity */}
        <Card>
          <h3 className="font-semibold text-gray-900 mb-3">Recent Activity</h3>

          <div className="space-y-3 text-sm">
            <div className="flex gap-2 items-start bg-gray-50 rounded-lg p-3">
              <FiUsers className="text-blue-600 mt-0.5" />
              <span>
                John enrolled in <b>React Basics</b>
              </span>
            </div>

            <div className="flex gap-2 items-start bg-gray-50 rounded-lg p-3">
              <FiDollarSign className="text-green-600 mt-0.5" />
              <span>
                Payment received from <b>Sarah</b>
              </span>
            </div>

            <div className="flex gap-2 items-start bg-gray-50 rounded-lg p-3">
              <FiBookOpen className="text-purple-600 mt-0.5" />
              <span>
                New course added: <b>TypeScript Pro</b>
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
