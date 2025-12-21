import CourseFilters from "../../components/courses/CourseFilters";
import CourseCard from "../../components/courses/CourseCard";

const courses = [
  {
    id: 1,
    title: "React + Redux Toolkit",
    category: "Frontend",
    level: "Intermediate",
    price: 99,
    rating: 4.8,
    students: 15300,
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 2,
    title: "Node.js & Express",
    category: "Backend",
    level: "Beginner",
    price: 21,
    rating: 4.5,
    students: 8420,
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    id: 3,
    title: "MongoDB Mastery",
    category: "Database",
    level: "Advanced",
    price: 21,
    rating: 4.4,
    students: 6780,
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
  },
];

export default function CoursesPage() {
  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900">
            All Courses
          </h1>
          <p className="mt-2 text-slate-500">
            Browse and filter courses to start learning today
          </p>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10">
          {/* Filters */}
          <CourseFilters />

          {/* Courses */}
          <div>
            {/* Top bar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <input
                placeholder="Search courses..."
                className="w-full sm:w-72 px-4 py-2 rounded-lg border border-slate-300"
              />

              <select className="px-4 py-2 rounded-lg border border-slate-300 text-sm">
                <option>Sort by popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
              </select>
            </div>

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
