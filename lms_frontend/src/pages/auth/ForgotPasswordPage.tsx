import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  return (
    <section className="min-h-screen bg-slate-50 flex">
      {/* LEFT — IMAGE / BRAND */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Reset password"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-purple-900/70" />

        {/* Content */}
        <div className="relative z-10 p-16 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">Forgot your password?</h1>

            <p className="mt-6 text-white/90 max-w-md">
              Don’t worry. We’ll help you recover access to your account in just a few steps.
            </p>
          </div>

          <ul className="space-y-4 text-sm">
            <li>✔ Secure email verification</li>
            <li>✔ Reset link expires in 10 minutes</li>
            <li>✔ Safe & encrypted process</li>
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

          <h2 className="text-2xl font-extrabold text-slate-900">Reset your password</h2>
          <p className="text-slate-500 text-sm mt-2 mb-8">
            Enter your registered email address and we’ll send you a reset link.
          </p>

          {/* Form */}
          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
            >
              Send reset link
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 flex justify-between text-sm">
            <Link to="/login" className="text-slate-600 hover:text-purple-700">
              ← Back to login
            </Link>

            <Link to="/register" className="text-purple-700 font-medium hover:underline">
              Create account
            </Link>
          </div>

          {/* Info */}
          <div className="mt-8 rounded-lg bg-slate-100 p-4 text-xs text-slate-600">
            📧 Didn’t receive the email? Check your spam folder or try again in a few minutes.
          </div>
        </div>
      </div>
    </section>
  );
}
