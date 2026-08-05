import { motion } from "motion/react";
import { Outlet, useLocation } from "react-router-dom";

const AnimatedOutlet = () => {

  const location = useLocation();
  
  return (
    <motion.div
      key={location.key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Outlet />
    </motion.div>
  );
};

export { AnimatedOutlet };
