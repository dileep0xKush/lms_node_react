import { Link } from "react-router-dom";

export default function InvoicePage() {
  return (
    <section className="bg-slate-100 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Actions */}
        <div className="flex justify-between items-center mb-6">
          <Link
            to="/dashboard"
            className="text-sm text-purple-700 hover:underline"
          >
            ← Back to dashboard
          </Link>

          <button
            onClick={() => window.print()}
            className="px-4 py-2 text-sm rounded-lg bg-purple-700 text-white hover:bg-purple-800"
          >
            Print Invoice
          </button>
        </div>

        {/* Invoice Card */}
        <div className="bg-white rounded-2xl shadow-md p-10">
          {/* Header */}
          <div className="flex justify-between items-start border-b pb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-10 w-10 rounded-lg bg-purple-700 text-white flex items-center justify-center font-bold">
                  LMS
                </div>
                <span className="text-lg font-semibold text-slate-900">
                  Skillify LMS
                </span>
              </div>

              <p className="text-sm text-slate-500">
                support@skillify.com <br />
                www.skillify.com
              </p>
            </div>

            <div className="text-right">
              <h1 className="text-3xl font-extrabold text-slate-900">
                Invoice
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Invoice #INV-2025-001
              </p>
              <p className="text-sm text-slate-500">Date: 21 Dec 2025</p>
            </div>
          </div>

          {/* Billing Info */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-2">
                Billed To
              </h4>
              <p className="text-sm text-slate-600">
                John Doe <br />
                john.doe@email.com <br />
                India
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-700 mb-2">
                Payment Details
              </h4>
              <p className="text-sm text-slate-600">
                Payment Method: Credit Card <br />
                Transaction ID: TXN123456789 <br />
                Status: <span className="text-green-600 font-medium">Paid</span>
              </p>
            </div>
          </div>

          {/* Items */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-600">
                  <th className="text-left p-3">Course</th>
                  <th className="text-center p-3">Qty</th>
                  <th className="text-right p-3">Price</th>
                  <th className="text-right p-3">Total</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="p-3">
                    React + Redux Toolkit – Build Scalable Apps
                  </td>
                  <td className="p-3 text-center">1</td>
                  <td className="p-3 text-right">$99.00</td>
                  <td className="p-3 text-right">$99.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Summary */}
          <div className="flex justify-end mt-8">
            <div className="w-full max-w-sm space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Subtotal</span>
                <span className="text-slate-900">$99.00</span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-600">Tax (GST 18%)</span>
                <span className="text-slate-900">$17.82</span>
              </div>

              <div className="flex justify-between font-semibold text-lg border-t pt-3">
                <span>Total</span>
                <span>$116.82</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 border-t pt-6 text-xs text-slate-500 text-center">
            This is a system-generated invoice. No signature required. <br />
            Thank you for learning with Skillify 🚀
          </div>
        </div>
      </div>
    </section>
  );
}
