import { Topbar, Sidebar } from "./routes";
import { Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoutes = () => {
  const userCredentials = jwtDecode(localStorage.getItem("token"));

  return (
    <div className="app">
      <Sidebar user={userCredentials} />
      <main className="content">
        <Topbar user={userCredentials} />
        <Outlet />
      </main>
    </div>
  );
};

export { ProtectedRoutes };
