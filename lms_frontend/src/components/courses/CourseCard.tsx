type Course = {
  title: string;
  category: string;
  level: string;
  price: number;
  rating: number;
  students: number;
  image: string;
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">
      <div className="h-44 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="p-5">
        <span className="text-xs text-purple-700 font-medium">
          {course.category} · {course.level}
        </span>

        <h3 className="mt-2 font-semibold text-slate-900 line-clamp-2">
          {course.title}
        </h3>

        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-yellow-500">
            ★ {course.rating}
            <span className="text-slate-400 ml-1">
              ({course.students.toLocaleString()})
            </span>
          </span>

          <span className="font-bold text-primary">
            ${course.price}
          </span>
        </div>
      </div>
    </div>
  );
}
