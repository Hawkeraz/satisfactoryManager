import { Routes, Route } from "react-router-dom";
import { Home, Dashboard, Error404, Warehouse } from "./routes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dash" element={<Dashboard />} />
      <Route path="/warehouse" element={<Warehouse />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export { Router };
