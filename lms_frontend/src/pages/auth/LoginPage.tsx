import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-slate-50 flex">
      {/* LEFT — IMAGE / BRAND */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="Online learning"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-purple-900/70" />

        {/* Content */}
        <div className="relative z-10 p-16 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">
              Welcome back <br />
              to Skillify
            </h1>

            <p className="mt-6 text-white/90 max-w-md">
              Continue your learning journey, track progress, and grow your
              skills with expert-led courses.
            </p>
          </div>

          {/* Trust */}
          <ul className="space-y-4 text-sm">
            <li>✔ 25,000+ learners</li>
            <li>✔ Industry mentors</li>
            <li>✔ Career-focused learning</li>
          </ul>
        </div>
      </div>

      {/* RIGHT — LOGIN FORM */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm p-10">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <div className="h-10 w-10 rounded-lg bg-purple-700 text-white flex items-center justify-center font-bold">
              LMS
            </div>
            <span className="text-lg font-semibold text-slate-900">
              Skillify
            </span>
          </div>

          <h2 className="text-2xl font-extrabold text-slate-900">
            Sign in to your account
          </h2>
          <p className="text-slate-500 text-sm mt-2 mb-8">
            Welcome back! Please enter your details.
          </p>

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

          {/* Login Form */}
          <form className="space-y-5">
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

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded border-slate-300" />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-purple-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
            >
              Sign in
            </button>
          </form>

          <p className="text-sm text-slate-600 mt-6 text-center">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-purple-700 font-medium hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
