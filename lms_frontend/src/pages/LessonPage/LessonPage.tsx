import LessonSidebar from "../../components/LessonPage/LessonSidebar";
import LessonContent from "../../components/LessonPage/LessonContent";
import LessonNavigation from "../../components/LessonPage/LessonNavigation";

export default function LessonPage() {
  return (
    <section className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[260px_1fr] gap-10">
        {/* Sidebar */}
        <LessonSidebar />

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-sm p-10">
          <LessonContent />
          <LessonNavigation />
        </div>
      </div>
    </section>
  );
}
