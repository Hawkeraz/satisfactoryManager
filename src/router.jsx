import { Routes, Route } from "react-router-dom";
import { Home, Dashboard, Error404, Warehouse, Batteries, FactoryOverview } from "./routes";

const Router = () => {
  return (
    <Routes>
      <Route path="/news" element={<Home />} />
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/warehouse" element={<Warehouse />} />
      <Route path="/batteries" element={<Batteries />} />
      <Route path="/factories" element={<FactoryOverview />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export { Router };
