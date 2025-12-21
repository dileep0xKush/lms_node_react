import { Link, NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2 flex-1">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-19 rounded-lg bg-purple-700 text-white flex items-center justify-center font-bold">
              LMS
            </div>
            <span className="text-lg font-semibold text-slate-900">
              Skillify
            </span>
          </Link>
        </div>

        {/* CENTER: Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive ? "text-purple-700" : "hover:text-purple-700"
            }
          >
            Courses
          </NavLink>

          <NavLink
            to="/paths"
            className={({ isActive }) =>
              isActive ? "text-purple-700" : "hover:text-purple-700"
            }
          >
            Learning Paths
          </NavLink>

          <NavLink
            to="/mentors"
            className={({ isActive }) =>
              isActive ? "text-purple-700" : "hover:text-purple-700"
            }
          >
            Mentors
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "text-purple-700" : "hover:text-purple-700"
            }
          >
            Pricing
          </NavLink>

          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive ? "text-purple-700" : "hover:text-purple-700"
            }
          >
            Community
          </NavLink>
        </nav>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-4 flex-1 justify-end">

          <Link
            to="/login"
            className="px-6 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-100 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-6 py-2 rounded-lg bg-purple-700 text-white text-sm font-semibold hover:bg-purple-800 transition"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
