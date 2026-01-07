import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';

export default function AuthLayout() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header onMenuClick={() => {}} />

        <main className="p-6">
          <Outlet key={location.key} />
        </main>
      </div>
    </div>
  );
}
