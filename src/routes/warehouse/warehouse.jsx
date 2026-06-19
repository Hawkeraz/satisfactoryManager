import { Box, useTheme } from "@mui/material";
import { colorTokens } from "../../theme";
import { WarehouseCard } from "./warehouseCard";
import { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import Header from "../../components/Header";
import Grid from "@mui/material/Grid2";

const Warehouse = () => {
  const [itemStorage, setItemStorage] = useState([]);
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  useEffect(() => {
    axiosInstance
      .get("/getWorldInv")
      .then((response) => setItemStorage(response.data))
      .catch(() => setItemStorage([]));
  }, []);

  return (
    <Box m="0px 20px 20px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Warehouse"
          subtitle="Detailed Information about item in storages"
        />
      </Box>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 24 }}
        height="77vh"
        overflow="auto"
        sx={{ scrollbarWidth: "none" }}
      >
        {itemStorage.length > 0 ? (
          itemStorage.map((item, id) => (
            <Grid key={id} size={{ xs: 2, sm: 4, md: 3 }}>
              <WarehouseCard
                name={item.Name}
                imageCode={item.ClassName}
                amount={item.Amount}
                slotSize={item.MaxAmount}
              />
            </Grid>
          ))
        ) : (
          <h3>No items found</h3>
        )}
      </Grid>
    </Box>
  );
};

export { Warehouse };
