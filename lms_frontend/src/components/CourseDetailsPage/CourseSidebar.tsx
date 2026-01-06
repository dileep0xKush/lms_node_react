export default function CourseSidebar() {
  return (
    <aside className="bg-white rounded-2xl shadow-sm p-8 sticky top-24 h-fit">
      <div className="text-3xl font-extrabold text-slate-900 mb-4">$99</div>

      <button className="w-full py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800 transition">
        Enroll now
      </button>

      <button className="w-full py-3 rounded-lg border border-slate-300 mt-3 text-sm font-medium hover:bg-slate-100 transition">
        Add to wishlist
      </button>

      {/* Features */}
      <ul className="mt-8 space-y-4 text-sm text-slate-600">
        <li>✔ Full lifetime access</li>
        <li>✔ Certificate of completion</li>
        <li>✔ Downloadable resources</li>
        <li>✔ Access on mobile & desktop</li>
      </ul>
    </aside>
  );
}
