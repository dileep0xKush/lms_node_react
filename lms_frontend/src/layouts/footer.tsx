import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-14 md:grid-cols-5">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center font-bold text-white">
              LMS
            </div>
            <span className="text-xl font-semibold text-white">Skillify</span>
          </div>

          <p className="text-sm leading-relaxed text-slate-400 max-w-md">
            Skillify is a modern learning management system to create, manage, and sell online
            courses with mentorship, analytics, and certifications.
          </p>

          {/* Social */}
          <div className="flex gap-4 mt-6">
            {['🌐', '🐦', '📸', '▶️'].map((icon, i) => (
              <span
                key={i}
                className="h-9 w-9 flex items-center justify-center rounded-md bg-slate-900 hover:bg-slate-800 cursor-pointer transition"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-5">Platform</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/courses" className="hover:text-white">
                Browse Courses
              </Link>
            </li>
            <li>
              <Link to="/learning-paths" className="hover:text-white">
                Learning Paths
              </Link>
            </li>
            <li>
              <Link to="/mentors" className="hover:text-white">
                Mentors
              </Link>
            </li>
            <li>
              <Link to="/certificates" className="hover:text-white">
                Certificates
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-5">Company</h4>
          <ul className="space-y-3 text-sm">
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-5">Stay updated</h4>

          <p className="text-sm text-slate-400 mb-4">
            Product updates, learning tips, and special offers.
          </p>

          <div className="flex rounded-md overflow-hidden bg-slate-900 border border-slate-800">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent px-4 py-3 text-sm outline-none text-white placeholder-slate-500"
            />
            <button className="px-5 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <span>© {new Date().getFullYear()} Skillify LMS. All rights reserved.</span>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
