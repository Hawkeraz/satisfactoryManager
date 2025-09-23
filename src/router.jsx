import { Routes, Route } from "react-router-dom";
import {
  Home,
  Dashboard,
  Error404,
  Warehouse,
  Batteries,
  FactoryOverview,
  LandingPage,
} from "./routes";
import { ProtectedRoutes } from "./protectedRoutes";

const Router = () => {
  return (
    <Routes>
      <Route index path="/" element={<LandingPage />} />
      <Route path="app" element={<ProtectedRoutes />}>
        <Route path="news" index element={<Home />} />
        <Route path="dash" element={<Dashboard />} />
        <Route path="warehouse" element={<Warehouse />} />
        <Route path="batteries" element={<Batteries />} />
        <Route path="factories" element={<FactoryOverview />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export { Router };
