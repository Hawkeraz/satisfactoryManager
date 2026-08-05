import { Box, useTheme, Skeleton } from "@mui/material";
import { colorTokens } from "../../theme";
import { WarehouseCard } from "./warehouseCard";
import { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import { DialogBox, Header } from "../../components";
import Grid from "@mui/material/Grid2";

const Warehouse = () => {
  const [itemStorage, setItemStorage] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  useEffect(() => {
    axiosInstance
      .get("/getWorldInv")
      .then((response) => setItemStorage(response.data))
      .catch(() => setItemStorage([]));
  }, []);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);

    console.log(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
    setOpen(false);
  }

  return (
    <>
    <Box ml="1vw" mr="1vw">
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
                onOpen={handleOpen}
              />
            </Grid>
          ))
        ) : (
          <Skeleton variant="rounded" width="100%" height="100%" />
        )}
      </Grid>
    </Box>
    <DialogBox open={Boolean(selectedItem)} onClose={handleClose} title={selectedItem}>
      <p>Content</p>
    </DialogBox>
    </>
  );
};

export { Warehouse };
