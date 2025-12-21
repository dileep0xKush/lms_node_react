export default function LessonNavigation() {
  return (
    <div className="mt-16 flex justify-between border-t pt-6">
      <button className="text-sm text-slate-600 hover:text-purple-700">
        ← Previous lesson
      </button>

      <button className="text-sm font-medium text-purple-700 hover:underline">
        Next lesson →
      </button>
    </div>
  );
}
