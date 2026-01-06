import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <section className="min-h-screen bg-slate-50 flex">
      {/* LEFT — IMAGE / BRAND */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Learning platform"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-purple-900/70" />

        {/* Content */}
        <div className="relative z-10 p-16 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">
              Learn. Build. <br />
              Grow your career.
            </h1>

            <p className="mt-6 text-white/90 max-w-md">
              Join thousands of learners mastering real-world skills with expert-led courses and
              hands-on projects.
            </p>
          </div>

          {/* Benefits */}
          <ul className="space-y-4 text-sm">
            <li>✔ Industry-ready courses</li>
            <li>✔ Certificates & career paths</li>
            <li>✔ Mentor support & community</li>
          </ul>
        </div>
      </div>

      {/* RIGHT — FORM */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-10">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="h-10 w-10 rounded-lg bg-purple-700 text-white flex items-center justify-center font-bold">
              LMS
            </div>
            <span className="text-lg font-semibold text-slate-900">Skillify</span>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900">Create your account</h2>
          <p className="text-slate-500 text-sm mt-2 mb-8">Start learning today — it’s free</p>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button className="w-full py-3 border rounded-lg text-sm font-medium hover:bg-slate-100">
              Continue with Google
            </button>
            <button className="w-full py-3 border rounded-lg text-sm font-medium hover:bg-slate-100">
              Continue with GitHub
            </button>
          </div>

          <div className="relative my-6 text-center text-xs text-slate-400">
            <span className="bg-white px-3">OR</span>
            <div className="absolute inset-x-0 top-1/2 h-px bg-slate-200" />
          </div>

          {/* Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
            >
              Create account
            </button>
          </form>

          <p className="text-xs text-slate-500 mt-6 text-center">
            By signing up, you agree to our <span className="underline cursor-pointer">Terms</span>{' '}
            and <span className="underline cursor-pointer">Privacy Policy</span>.
          </p>

          <p className="text-sm text-slate-600 mt-6 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-purple-700 font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
