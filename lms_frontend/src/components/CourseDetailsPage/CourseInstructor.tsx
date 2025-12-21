export default function CourseInstructor() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Instructor
      </h2>

      <div className="bg-white rounded-2xl p-8 shadow-sm flex gap-6 items-start">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Instructor"
          className="w-24 h-24 rounded-full object-cover"
        />

        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Emily Johnson
          </h3>
          <p className="text-sm text-slate-500 mb-3">
            Senior Frontend Engineer
          </p>

          <p className="text-sm text-slate-600 max-w-xl">
            Emily has over 10 years of experience building scalable web
            applications and mentoring developers worldwide.
          </p>

          <div className="mt-4 text-sm text-slate-500">
            ⭐ 4.9 instructor rating · 25,000+ students
          </div>
        </div>
      </div>
    </div>
  );
}
