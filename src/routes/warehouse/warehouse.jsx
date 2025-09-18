import { Box, useTheme } from "@mui/material";
import { colorTokens } from "../../theme";
import Header from "../../components/Header";
import { mockData } from "../../Data/mockData";
import { WarehouseCard } from "./warehouseCard";
import Grid from "@mui/material/Grid2";

const Warehouse = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box m="0px 20px 20px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Warehouse"
          subtitle="Detailed Information about item storage"
        />
      </Box>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 20 }}
        borderRadius="8px"
        height="77vh"
        overflow="auto"
        sx={{ scrollbarWidth: "none" }}
      >
        {mockData.map((item, id) => (
          <Grid key={id} size={{ xs: 2, sm: 4, md: 3 }}>
            <WarehouseCard
              name={item.Name}
              imageCode={item.ClassName}
              pRate={item.MaxProd}
              cRate={item.MaxConsumed}
              efficiency={item.ProdPercent}
              type={item.Type}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export { Warehouse };
