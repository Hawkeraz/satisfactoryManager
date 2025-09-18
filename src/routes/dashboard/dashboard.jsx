import { Box } from "@mui/material";
import Header from "../../components/Header";

import { DashboardLayout } from "./dashboardLayout";
import { useEffect, useState } from "react";

import axiosInstance from "../../services/axiosInstance";

const Dashboard = () => {
  const [sinkGraphData, setSinkData] = useState([]);
  const [energyGraphData, setEnergyData] = useState([]);


  useEffect(() => {
    const interval = setInterval(() => {
      sinkGraphUpdate();
      energyGraphUpdate();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  async function sinkGraphUpdate() {
    await axiosInstance.get("/getResourceSink").then((response) => {
      setSinkData(response.data[0]);
    });
  }

  async function energyGraphUpdate() {
    await axiosInstance.get("/getPower").then((response) => {
      setEnergyData(response.data);
    });
  }

  return (
    <Box ml="1vw" mb="2vh" mr="2vw">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Track your productions here" />
      </Box>
      <DashboardLayout sinkData={sinkGraphData} energyData={energyGraphData}/>
    </Box>
  );
};

export { Dashboard };
