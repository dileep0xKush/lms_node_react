import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header
          onMenuClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />

        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
