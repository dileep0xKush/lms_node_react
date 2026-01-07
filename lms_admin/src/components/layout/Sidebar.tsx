import { NavLink } from 'react-router-dom';
import { FiHome, FiUsers } from 'react-icons/fi';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: FiHome },
  { to: '/users', label: 'Users', icon: FiUsers },
];

export default function Sidebar() {
  const linkBase =
    'flex items-center gap-3 px-4 py-2 rounded-xl font-medium transition-all duration-300';

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 flex flex-col shadow-xl border-r border-gray-800">
      {/* Brand */}
      <div className="px-5 pt-6 pb-4 border-b border-gray-800">
        <h1 className="text-xl font-extrabold tracking-wide">
          <span className="text-white">LMS</span>
          <span className="text-blue-400"> Admin</span>
        </h1>
        <p className="text-xs text-gray-400 mt-1">Management Console</p>
      </div>

      {/* Nav */}
      <nav className="mt-4 px-3 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${linkBase} group hover:bg-gray-800/60 hover:text-white
               ${isActive ? 'bg-gray-800 text-white shadow-inner' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`w-1.5 h-6 rounded-full ${
                    isActive ? 'bg-blue-500' : 'bg-transparent'
                  }`}
                />
                <Icon className="text-lg" />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-gray-800 text-xs text-gray-500">
        <p className="opacity-80">© 2026 LMS Admin</p>
        <p className="mt-1 text-gray-400">Version 1.0</p>
      </div>
    </aside>
  );
}
