export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Content */}
          <div className="text-white">
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-white/20 text-sm font-medium">
              🚀 Learn from industry mentors
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Build skills that <br />
              <span className="text-purple-200">power your career</span>
            </h1>

            <p className="mt-6 text-lg text-white/90 max-w-xl">
              Learn with job-ready courses, real-world projects, live mentorship, and certifications
              designed for modern professionals.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-xl bg-white text-purple-700 font-semibold shadow-lg hover:scale-105 transition">
                Explore Courses
              </button>

              <button className="px-8 py-4 rounded-xl border border-white/40 text-white hover:bg-white/10 transition">
                Become a Mentor
              </button>
            </div>

            {/* Social proof */}
            <div className="mt-10 flex items-center gap-4 text-sm text-white/80">
              <div className="flex -space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  className="w-8 h-8 rounded-full border border-white/40"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  className="w-8 h-8 rounded-full border border-white/40"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  className="w-8 h-8 rounded-full border border-white/40"
                />
              </div>
              <span>
                Trusted by <strong className="text-white">25k+</strong> learners
              </span>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="relative hidden lg:block">
            {/* Glow */}
            <div className="absolute -inset-6 bg-purple-500/30 rounded-3xl blur-3xl" />

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Learning online"
              className="relative rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
