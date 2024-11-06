import { Routes, Route } from "react-router-dom";
import { Home, Dashboard, Error404 } from "./routes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dash" element={<Dashboard />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export { Router };
