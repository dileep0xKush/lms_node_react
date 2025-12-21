const lessons = [
  "Introduction",
  "What is HTML?",
  "HTML Elements",
  "HTML Attributes",
  "HTML Headings",
  "HTML Paragraphs",
];

export default function LessonSidebar() {
  return (
    <aside className="sticky top-20 h-fit bg-white rounded-2xl shadow-sm p-6">
      <h3 className="font-semibold text-slate-900 mb-4">
        HTML Tutorial
      </h3>

      <ul className="space-y-2 text-sm">
        {lessons.map((lesson, i) => (
          <li
            key={lesson}
            className={`cursor-pointer px-3 py-2 rounded-md ${
              i === 1
                ? "bg-purple-100 text-purple-700 font-medium"
                : "hover:bg-slate-100"
            }`}
          >
            {lesson}
          </li>
        ))}
      </ul>
    </aside>
  );
}
