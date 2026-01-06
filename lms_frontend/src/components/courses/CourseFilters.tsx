export default function CourseFilters() {
  return (
    <aside className="bg-white rounded-2xl p-6 shadow-sm h-fit sticky top-24">
      <h3 className="font-semibold text-slate-900 mb-6">Filter Courses</h3>

      {/* Category */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3">Category</h4>
        {['Frontend', 'Backend', 'Database', 'DevOps'].map((cat) => (
          <label key={cat} className="flex items-center gap-2 text-sm mb-2">
            <input type="checkbox" />
            {cat}
          </label>
        ))}
      </div>

      {/* Level */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-3">Level</h4>
        {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
          <label key={level} className="flex items-center gap-2 text-sm mb-2">
            <input type="checkbox" />
            {level}
          </label>
        ))}
      </div>

      {/* Price */}
      <div>
        <h4 className="text-sm font-medium mb-3">Price</h4>
        {['Free', 'Paid'].map((price) => (
          <label key={price} className="flex items-center gap-2 text-sm mb-2">
            <input type="checkbox" />
            {price}
          </label>
        ))}
      </div>
    </aside>
  );
}
