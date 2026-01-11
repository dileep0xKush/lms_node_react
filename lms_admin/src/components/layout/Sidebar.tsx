import { NavLink } from 'react-router-dom';
import { FiHome, FiUsers } from 'react-icons/fi';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: FiHome },
  { to: '/users', label: 'Users', icon: FiUsers },
];

export default function Sidebar() {
  const baseLink =
    'group flex items-center gap-3 px-4 py-2.5 rounded-xl font-medium transition-all';

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 flex flex-col border-r border-gray-800">
      {/* Brand */}
      <div className="px-6 pt-6 pb-5 border-b border-gray-800">
        <h1 className="text-xl font-extrabold tracking-wide">
          <span className="text-white">LMS</span>
          <span className="text-blue-400"> Admin</span>
        </h1>
        <p className="text-xs text-gray-400 mt-1">Management Console</p>
      </div>

      {/* Navigation */}
      <nav className="mt-4 px-3 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `
                ${baseLink}
                ${
                  isActive
                    ? 'bg-gray-800/80 text-white shadow-inner'
                    : 'hover:bg-gray-800/50 hover:text-white'
                }
              `
            }
          >
            {({ isActive }) => (
              <>
                {/* Active indicator */}
                <span
                  className={`
                    h-5 w-1.5 rounded-full transition
                    ${isActive ? 'bg-blue-500' : 'bg-transparent'}
                  `}
                />

                {/* Icon */}
                <Icon
                  className={`
                    text-lg transition
                    ${isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'}
                  `}
                />

                {/* Label */}
                <span className="tracking-wide">{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto px-6 py-4 border-t border-gray-800 text-xs text-gray-500">
        <p>© 2026 LMS Admin</p>
        <p className="mt-1 text-gray-400">Version 1.0</p>
      </div>
    </aside>
  );
}
