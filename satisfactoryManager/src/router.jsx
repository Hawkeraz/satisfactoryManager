import { Routes, Route } from "react-router-dom";
import { Home } from "./routes"

const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="*" element={<Error404 />} /> */}
    </Routes>
  );
};

export { Router };