import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Topbar, Sidebar } from "./routes";
import { useAuth } from "./contexts";
import { Loading } from "./components";
const ProtectedRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return user ? (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};

export { ProtectedRoutes };
