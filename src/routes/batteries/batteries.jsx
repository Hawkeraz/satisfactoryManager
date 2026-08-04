import { Cards } from "./card";
import { Box, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { Header } from "../../components";
import axiosInstance from "../../services/axiosInstance";

import { useEffect, useState } from "react";

const Batteries = () => {
  const [power, setPower] = useState();

  useEffect(() => {
    async function getPower() {
      axiosInstance
        .get("/getPower")
        .then((response) => {
          setPower(response.data);
        })
        .catch((err) => console.log(err));
    }

    getPower();
  }, []);

  return (
    <Box m="0px 20px 20px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CIRCUITS" subtitle="Check your circuits" />
      </Box>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        height="77vh"
        overflow="auto"
        sx={{ scrollbarWidth: "none" }}
      >
        {power ? power.map((power, id) => (
          <Grid key={id} size={{ xs: 2, sm: 4, md: 2 }}>
            <Cards
              name={power.Name}
              circuit={power.CircuitGroupID}
              capacity={power.PowerCapacity}
              using={power.PowerConsumed}
              percent={power.BatteryPercent}
              fuse={power.FuseTriggered}
              key={id}
            />
          </Grid>
        )): <Skeleton variant="rectangular" width={200} height={200} /> }
      </Grid>
    </Box>
  );
};

export { Batteries };
