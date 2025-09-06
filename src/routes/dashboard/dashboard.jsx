import { Box } from "@mui/material";
import Header from "../../components/Header";

import { DashboardLayout } from "./dashboardLayout";

const Dashboard = () => {
  return (
    <Box ml="1vw" mb="2vh" mr="2vw">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Track your productions here" />
      </Box>
      <DashboardLayout />
    </Box>
  );
};

export { Dashboard };
