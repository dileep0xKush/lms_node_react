import CourseSidebar from '../../components/CourseDetailsPage/CourseSidebar';
import CourseCurriculum from '../../components/CourseDetailsPage/CourseCurriculum';
import CourseInstructor from '../../components/CourseDetailsPage/CourseInstructor';

export default function CourseDetailsPage() {
  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-12">
          {/* Left */}
          <div>
            <span className="text-sm text-purple-700 font-medium">Frontend · Intermediate</span>

            <h1 className="text-4xl font-extrabold text-slate-900 mt-3">
              React + Redux Toolkit – Build Scalable Apps
            </h1>

            <p className="mt-4 text-slate-600 max-w-2xl">
              Master modern React development with Redux Toolkit, real-world projects, best
              practices, and performance optimization.
            </p>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
              <span>⭐ 4.8 (15,300 students)</span>
              <span>⏱ 12 hours</span>
              <span>📜 Certificate included</span>
            </div>

            {/* Preview */}
            <div className="mt-10 rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
                alt="Course preview"
                className="w-full h-[320px] object-cover"
              />
            </div>

            {/* Tabs */}
            <div className="mt-14 space-y-14">
              <CourseCurriculum />
              <CourseInstructor />
            </div>
          </div>

          {/* Right Sidebar */}
          <CourseSidebar />
        </div>
      </div>
    </section>
  );
}
