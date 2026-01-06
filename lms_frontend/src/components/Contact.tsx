export default function Contact() {
  return (
    <section id="get-in-touch" className="bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: Info + Map */}
          <div className="space-y-10">
            {/* Text */}
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900">Get in touch</h2>
              <p className="mt-4 text-slate-600 max-w-md">
                Have questions about courses, mentorship, or partnerships? Our team is always ready
                to help.
              </p>

              <div className="mt-8 space-y-3 text-sm text-slate-600">
                <p>
                  📧 <span className="font-medium">support@skillify.com</span>
                </p>
                <p>
                  📍 <span className="font-medium">San Francisco, USA</span>
                </p>
                <p>
                  ⏰ <span className="font-medium">Mon – Fri, 9AM – 6PM</span>
                </p>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border-slate-200 shadow-sm">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=San%20Francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT: Form */}
          <form className="bg-white rounded-2xl p-10 shadow-sm space-y-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">Full name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">Email address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-slate-700">Message</label>
              <textarea
                rows={4}
                placeholder="Tell us how we can help you..."
                className="w-full rounded-xl border border-slate-200 px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
            >
              Send message
            </button>

            <p className="text-xs text-slate-400 text-center">
              We usually respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
