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
      <Box
        height="75vh"

      >
        {getPower.map((power) => (
          <Cards
            capacity={power.PowerCapacity}
            maxUsing={power.PowerMaxConsumed}
            using={power.PowerConsumed}
          />
        ))}
      </Box>
    </Box>
  );
};

export { Batteries };
