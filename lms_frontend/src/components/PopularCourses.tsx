const courses = [
  {
    id: 1,
    title: 'HTML, CSS & JavaScript',
    category: 'Web Development',
    price: '$40',
    rating: 4.6,
    students: 12450,
    instructor: 'John Carter',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  },
  {
    id: 2,
    title: 'Node.js & Express',
    category: 'Backend',
    price: '$21',
    rating: 4.5,
    students: 8420,
    instructor: 'Sarah Smith',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
  },
  {
    id: 3,
    title: 'MongoDB Mastery',
    category: 'Database',
    price: '$21',
    rating: 4.4,
    students: 6780,
    instructor: 'Michael Lee',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
  },
  {
    id: 4,
    title: 'React + Redux Toolkit',
    category: 'Frontend',
    price: '$99',
    rating: 4.8,
    students: 15300,
    instructor: 'Emily Johnson',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
  },
];

export default function PopularCourses() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900">Popular Courses</h2>
            <p className="text-slate-500 mt-2">Learn from top instructors and industry experts</p>
          </div>

          <button className="self-start sm:self-auto px-5 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-100 transition">
            Explore all courses
          </button>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                />

                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-slate-700">
                  {course.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 leading-snug line-clamp-2">
                  {course.title}
                </h3>

                {/* Instructor */}
                <p className="mt-2 text-sm text-slate-500">by {course.instructor}</p>

                {/* Meta */}
                <div className="mt-4 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <span>★</span>
                    <span className="font-medium text-slate-700">{course.rating}</span>
                    <span className="text-slate-400">({course.students.toLocaleString()})</span>
                  </div>

                  <span className="font-bold text-primary">{course.price}</span>
                </div>

                {/* Students */}
                <div className="mt-4 text-xs text-slate-500">
                  {course.students.toLocaleString()} students enrolled
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
