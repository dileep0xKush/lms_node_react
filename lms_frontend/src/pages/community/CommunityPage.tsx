import { Link } from "react-router-dom";

const categories = [
  "All",
  "Questions",
  "Announcements",
  "Projects",
  "Career",
  "Feedback",
];

const discussions = [
  {
    id: 1,
    title: "How to prepare for React interviews?",
    author: "John Doe",
    role: "Frontend Developer",
    replies: 12,
    likes: 34,
    tag: "Career",
  },
  {
    id: 2,
    title: "Best way to structure Redux Toolkit store?",
    author: "Emily Carter",
    role: "React Mentor",
    replies: 8,
    likes: 21,
    tag: "Questions",
  },
  {
    id: 3,
    title: "Sharing my LMS dashboard project 🚀",
    author: "Rahul Sharma",
    role: "Student",
    replies: 15,
    likes: 52,
    tag: "Projects",
  },
];

export default function CommunityPage() {
  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900">
              Community
            </h1>
            <p className="mt-2 text-slate-600 max-w-xl">
              Ask questions, share knowledge, and connect with learners and
              mentors.
            </p>
          </div>

          <Link
            to="/community/new"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
          >
            + Start Discussion
          </Link>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          {/* LEFT — Feed */}
          <div className="space-y-8">
            {/* Categories */}
            <div className="flex gap-3 flex-wrap">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    i === 0
                      ? "bg-purple-700 text-white"
                      : "bg-white border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Discussions */}
            <div className="space-y-4">
              {discussions.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                      {post.author.charAt(0)}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-3 py-1 rounded-full bg-slate-100 text-xs font-medium">
                          {post.tag}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900 hover:text-purple-700 cursor-pointer">
                        {post.title}
                      </h3>

                      <p className="text-sm text-slate-500 mt-1">
                        By {post.author} · {post.role}
                      </p>

                      <div className="flex gap-6 text-sm text-slate-500 mt-4">
                        <span>💬 {post.replies} replies</span>
                        <span>❤️ {post.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Sidebar */}
          <aside className="space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-4">
                Community stats
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>👥 12,450 members</li>
                <li>💬 8,230 discussions</li>
                <li>📚 320 mentors</li>
              </ul>
            </div>

            {/* Rules */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900 mb-4">
                Community rules
              </h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✔ Be respectful</li>
                <li>✔ Stay on topic</li>
                <li>✔ No spam or promotions</li>
                <li>✔ Help others grow</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-purple-700 text-white p-6">
              <h4 className="font-semibold mb-2">
                New here?
              </h4>
              <p className="text-sm opacity-90 mb-4">
                Introduce yourself and start learning together.
              </p>
              <Link
                to="/community/new"
                className="inline-block text-sm font-medium underline"
              >
                Create your first post →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
