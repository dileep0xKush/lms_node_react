export default function Newsletter() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-800 overflow-hidden">
      {/* Decorative background image */}
      <img
        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-900/60" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Floating Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-12 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            🚀 Weekly learning insights
          </span>

          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Stay ahead in your learning journey
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto mb-10">
            Join thousands of learners receiving curated resources, mentor
            tips, new course launches, and exclusive offers.
          </p>

          {/* Input */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="px-8 py-4 rounded-xl bg-purple-700 text-white font-semibold hover:bg-purple-800 transition">
              Join newsletter
            </button>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            No spam · Cancel anytime · Free forever
          </p>

          {/* Social proof */}
          <div className="mt-8 flex items-center justify-center gap-3 text-sm text-slate-500">
            <div className="flex -space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-7 h-7 rounded-full border border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-7 h-7 rounded-full border border-white"
              />
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                className="w-7 h-7 rounded-full border border-white"
              />
            </div>
            <span>Trusted by 25,000+ learners</span>
          </div>
        </div>
      </div>
    </section>
  );
}
