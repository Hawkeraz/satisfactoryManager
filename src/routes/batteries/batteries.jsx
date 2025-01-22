import { Box } from "@mui/material";
import { Cards } from "./card";

import Header from "../../components/Header";
import { getPower } from "../../Data/getPower";

const Batteries = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BATTERIES" subtitle="Check your circuits" />
      </Box>
      <Box height="75vh" display="flex" justifyContent="left" alignItems="left">
        {getPower.map((power, id) => (
          <Cards
            capacity={power.PowerCapacity}
            maxUsing={power.PowerMaxConsumed}
            using={power.PowerConsumed}
            percent={power.BatteryPercent}
            fuse={power.FuseTriggered}
            key={id}
          />
        ))}
      </Box>
    </Box>
  );
};

export { Batteries };
