export default function SettingsPage() {
  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">
            Account settings
          </h1>
          <p className="text-slate-600 mt-1">
            Manage your profile and security
          </p>
        </div>

        {/* Profile */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Profile information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Full name"
              className="px-4 py-3 rounded-lg border border-slate-300"
            />
            <input
              placeholder="Email address"
              className="px-4 py-3 rounded-lg border border-slate-300"
            />
          </div>

          <button className="mt-6 px-6 py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800">
            Save changes
          </button>
        </div>

        {/* Password */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Change password
          </h2>

          <div className="space-y-4 max-w-md">
            <input
              type="password"
              placeholder="Current password"
              className="w-full px-4 py-3 rounded-lg border border-slate-300"
            />
            <input
              type="password"
              placeholder="New password"
              className="w-full px-4 py-3 rounded-lg border border-slate-300"
            />
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full px-4 py-3 rounded-lg border border-slate-300"
            />
          </div>

          <button className="mt-6 px-6 py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800">
            Update password
          </button>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">
            Preferences
          </h2>

          <div className="space-y-4 text-sm">
            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Receive course updates & newsletters
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" />
              Email me when I earn a certificate
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
