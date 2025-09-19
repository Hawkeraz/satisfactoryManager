import { Cards } from "./card";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import Header from "../../components/Header";
import { getPower } from "../../Data/getPower";

const Batteries = () => {
  return (
    <Box m="0px 20px 20px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BATTERIES" subtitle="Check your circuits" />
      </Box>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        borderRadius="8px"
        height="77vh"
        overflow="auto"
        sx={{scrollbarWidth: "none"}}
      >
        {getPower.map((power, id) => (
          <Grid key={id} size={{ xs: 2, sm: 4, md: 3 }}>
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
        ))}
      </Grid>
    </Box>
  );
};

export { Batteries };
