const curriculum = [
  {
    title: "Getting Started",
    lessons: ["Introduction", "Setup & Tools", "Project Overview"],
  },
  {
    title: "Core Concepts",
    lessons: ["Redux Toolkit Basics", "Slices & Store", "Async Thunks"],
  },
  {
    title: "Advanced Patterns",
    lessons: ["Performance Optimization", "Best Practices"],
  },
];

export default function CourseCurriculum() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Course curriculum
      </h2>

      <div className="space-y-4">
        {curriculum.map((section, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <h3 className="font-semibold text-slate-800 mb-3">
              {section.title}
            </h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {section.lessons.map((lesson) => (
                <li key={lesson}>• {lesson}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
