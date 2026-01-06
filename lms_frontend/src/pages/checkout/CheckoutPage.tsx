export default function CheckoutPage() {
  return (
    <section className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900">Checkout</h1>
          <p className="mt-2 text-slate-600">Complete your purchase securely</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT — Course Summary */}
          <div className="space-y-8">
            {/* Course Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex gap-6">
                <img
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee"
                  alt="Course"
                  className="w-32 h-24 rounded-lg object-cover"
                />

                <div>
                  <span className="text-sm text-purple-700 font-medium">
                    Frontend · Intermediate
                  </span>

                  <h2 className="text-xl font-bold text-slate-900 mt-1">
                    React + Redux Toolkit – Build Scalable Apps
                  </h2>

                  <p className="text-sm text-slate-500 mt-2">By Emily Johnson</p>
                </div>
              </div>
            </div>

            {/* What you get */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">What you’ll get</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>✔ Full lifetime access</li>
                <li>✔ 12+ hours on-demand content</li>
                <li>✔ Certificate of completion</li>
                <li>✔ Access on mobile & desktop</li>
                <li>✔ Downloadable resources</li>
              </ul>
            </div>

            {/* Guarantee */}
            <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-sm text-green-800">
              ✅ 30-day money-back guarantee. No questions asked.
            </div>
          </div>

          {/* RIGHT — Payment */}
          <div className="bg-white rounded-2xl p-10 shadow-sm">
            {/* Price */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-lg font-medium text-slate-700">Total amount</span>
              <span className="text-3xl font-extrabold text-slate-900">$99</span>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Payment method</h3>

              <div className="flex gap-4">
                <div className="flex-1 border rounded-lg px-4 py-3 text-sm bg-slate-50">
                  💳 Credit / Debit Card
                </div>
              </div>
            </div>

            {/* Card Form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Card number</label>
                <input
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Expiry date</label>
                  <input
                    placeholder="MM / YY"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">CVC</label>
                  <input
                    placeholder="123"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Cardholder name</label>
                <input
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-600 outline-none"
                />
              </div>

              {/* Pay Button */}
              <button
                type="submit"
                className="w-full mt-4 py-4 rounded-xl bg-purple-700 text-white font-semibold hover:bg-purple-800 transition"
              >
                Pay $99 & Enroll
              </button>

              {/* Trust */}
              <p className="text-xs text-slate-400 text-center">
                🔒 Secure checkout · SSL encrypted · Powered by Stripe
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
