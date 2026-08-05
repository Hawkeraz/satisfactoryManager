import { Outlet, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { Topbar, Sidebar } from "./routes";
import { useAuth } from "./contexts";
import { Loading, AnimatedOutlet } from "./components";
const ProtectedRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  return user ? (
    <div className="app">
      <Sidebar />
      <main className="header">
        <Topbar />
        <div className="content">
          <AnimatedOutlet />
        </div>
      </main>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};

export { ProtectedRoutes };
