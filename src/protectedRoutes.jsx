import { Topbar, Sidebar } from "./routes";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ProtectedRoutes = () => {
  const location = useLocation();
  const user = location.state?.user;

  const [userData, setUserData] = useState(user);

  useEffect(() => {
    setUserData(user);
  }, []);

  return (
    <div className="app">
      <Sidebar user={userData} />
      <main className="content">
        <Topbar />
        <Outlet />
      </main>
    </div>
  );
};

export { ProtectedRoutes };
