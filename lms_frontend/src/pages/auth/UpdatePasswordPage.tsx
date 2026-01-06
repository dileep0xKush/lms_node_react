import { Link } from 'react-router-dom';

export default function UpdatePasswordPage() {
  return (
    <section className="min-h-screen bg-slate-50 flex">
      {/* LEFT — IMAGE / BRAND */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1556155092-8707de31f9c4"
          alt="Update password"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-purple-900/70" />

        {/* Content */}
        <div className="relative z-10 p-16 text-white flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight">
              Create a new <br /> secure password
            </h1>

            <p className="mt-6 text-white/90 max-w-md">
              Your new password should be strong and unique to keep your account protected.
            </p>
          </div>

          <ul className="space-y-4 text-sm">
            <li>✔ At least 8 characters</li>
            <li>✔ One uppercase letter</li>
            <li>✔ One number or symbol</li>
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

          <h2 className="text-2xl font-extrabold text-slate-900">Update password</h2>
          <p className="text-slate-500 text-sm mt-2 mb-8">
            Enter and confirm your new password below.
          </p>

          {/* Form */}
          <form className="space-y-5">
            <input
              type="password"
              placeholder="New password"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none"
            />

            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none"
            />

            {/* Password hint */}
            <p className="text-xs text-slate-500">Must be at least 8 characters long.</p>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
            >
              Update password
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 text-sm text-center">
            <Link to="/login" className="text-purple-700 font-medium hover:underline">
              Back to login
            </Link>
          </div>

          {/* Success info (optional state) */}
          <div className="mt-8 rounded-lg bg-green-50 border border-green-200 p-4 text-xs text-green-800">
            🔐 After updating, you’ll be redirected to login securely.
          </div>
        </div>
      </div>
    </section>
  );
}
