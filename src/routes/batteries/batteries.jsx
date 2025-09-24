import { Cards } from "./card";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import Grid from "@mui/material/Grid2";

import Header from "../../components/Header";

const Batteries = () => {
  const [switches, setSwitches] = useState([]);
  const [powerLines, setPowerLines] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axiosInstance
        .get("/getSwitches")
        .then((response) => setSwitches(response.data))
        .catch(() => console.log("error"));

      axiosInstance
        .get("/getPower")
        .then((response) => setPowerLines(response.data))
        .catch(() => console.log("error"));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box m="0px 20px 20px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="SWITCHES" subtitle="Check your circuits" />
      </Box>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        borderRadius="8px"
        height="77vh"
        overflow="auto"
        sx={{ scrollbarWidth: "none" }}
      >
        {switches.map((power, id) => (
          <Grid key={id} size={{ xs: 2, sm: 4, md: 3 }}>
            <Cards
              name={power.Name || null}
              fuse={power.IsOn}
              switchID={power.ID}
              circuitID={
                powerLines.find(
                  (circuit) => circuit.AssociatedCircuits.includes(power.Secondary)
                ) || null
              }
              data={power}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { Batteries };
