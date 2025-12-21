import { Link } from "react-router-dom";

const lessons = [
  { id: 1, title: "Introduction", duration: "5:12", active: true },
  { id: 2, title: "Project Setup", duration: "12:30" },
  { id: 3, title: "Redux Toolkit Basics", duration: "18:45" },
  { id: 4, title: "Async Thunks", duration: "22:10" },
];

export default function CoursePlayerPage() {
  return (
    <section className="bg-slate-900 min-h-screen text-white">
      <div className="grid lg:grid-cols-[1fr_380px]">
        {/* VIDEO AREA */}
        <div className="p-6">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-4">
            <Link to="/dashboard" className="text-sm text-slate-300 hover:underline">
              ← Back to dashboard
            </Link>

            <span className="text-sm text-slate-400">
              React + Redux Toolkit
            </span>
          </div>

          {/* Video */}
          <div className="bg-black rounded-xl overflow-hidden aspect-video">
            <video
              controls
              className="w-full h-full"
              poster="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
            >
              <source src="" type="video/mp4" />
            </video>
          </div>

          {/* Lesson Info */}
          <div className="mt-6">
            <h1 className="text-2xl font-bold">
              Redux Toolkit Basics
            </h1>
            <p className="text-slate-400 mt-2 max-w-2xl">
              Learn how Redux Toolkit simplifies state management and helps
              build scalable React applications.
            </p>
          </div>

          {/* Progress */}
          <div className="mt-6">
            <div className="h-2 bg-slate-700 rounded-full">
              <div className="h-2 bg-purple-600 rounded-full w-[45%]" />
            </div>
            <p className="text-xs text-slate-400 mt-2">
              45% completed
            </p>
          </div>
        </div>

        {/* SIDEBAR – LESSONS */}
        <aside className="bg-slate-800 border-l border-slate-700 p-6 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">
            Course content
          </h3>

          <ul className="space-y-2">
            {lessons.map((lesson) => (
              <li
                key={lesson.id}
                className={`p-3 rounded-lg cursor-pointer flex justify-between items-center ${
                  lesson.active
                    ? "bg-purple-600"
                    : "hover:bg-slate-700"
                }`}
              >
                <span className="text-sm">{lesson.title}</span>
                <span className="text-xs text-slate-300">
                  {lesson.duration}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
