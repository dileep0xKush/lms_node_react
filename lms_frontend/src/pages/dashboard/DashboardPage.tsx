import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <section className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Welcome back, John 👋</h1>
            <p className="text-slate-600 mt-1">Continue learning and track your progress</p>
          </div>

          <Link
            to="/courses"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
          >
            Browse courses
          </Link>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Enrolled courses', value: '6' },
            { label: 'Completed', value: '3' },
            { label: 'Certificates', value: '2' },
            { label: 'Hours learned', value: '42h' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <p className="text-3xl font-extrabold text-slate-900 mt-2">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-10">
          {/* LEFT — Courses */}
          <div className="space-y-8">
            {/* Continue Learning */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Continue learning</h2>

              <div className="bg-white rounded-2xl p-6 shadow-sm flex gap-6 items-center">
                <img
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
                  alt="Course"
                  className="w-32 h-24 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">React + Redux Toolkit</h3>
                  <p className="text-sm text-slate-500 mt-1">Lesson 7 · Async Thunks</p>

                  {/* Progress */}
                  <div className="mt-3">
                    <div className="h-2 bg-slate-200 rounded-full">
                      <div className="h-2 bg-purple-700 rounded-full w-[65%]" />
                    </div>
                    <p className="text-xs text-slate-500 mt-1">65% completed</p>
                  </div>
                </div>

                <Link
                  to="/learn/react-redux"
                  className="px-5 py-2 rounded-lg bg-purple-700 text-white text-sm font-medium hover:bg-purple-800"
                >
                  Resume
                </Link>
              </div>
            </div>

            {/* Enrolled Courses */}
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-4">Your courses</h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                      alt="Course"
                      className="h-36 w-full object-cover"
                    />

                    <div className="p-5">
                      <h3 className="font-semibold text-slate-900">Full Stack Web Development</h3>

                      <p className="text-xs text-slate-500 mt-1">Progress: 40%</p>

                      <div className="mt-4 flex justify-between items-center">
                        <Link
                          to="/learn/fullstack"
                          className="text-sm text-purple-700 font-medium hover:underline"
                        >
                          Continue
                        </Link>

                        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Activity */}
          <aside className="space-y-6">
            {/* Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Recent activity</h3>

              <ul className="space-y-4 text-sm text-slate-600">
                <li>✔ Completed “Redux Toolkit Basics”</li>
                <li>🏆 Earned React Certificate</li>
                <li>💬 Replied in Community</li>
                <li>📚 Enrolled in Node.js Course</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-purple-700 text-white p-6">
              <h4 className="font-semibold mb-2">Explore new skills</h4>
              <p className="text-sm opacity-90 mb-4">Discover trending courses curated for you.</p>
              <Link to="/courses" className="text-sm font-medium underline">
                View courses →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
