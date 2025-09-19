import { Box, useTheme } from "@mui/material";
import { colorTokens } from "../../theme";
import { FactoryCard } from "./factoryCard";
import { useEffect, useState } from "react";
import axiosInstance from "../../services/axiosInstance";
import Header from "../../components/Header";
import Grid from "@mui/material/Grid2";

const FactoryOverview = () => {
  const [worldItems, setWorldItems] = useState([]);
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  useEffect(() => {
    axiosInstance
      .get("/getProdStats")
      .then((response) => setWorldItems(response.data))
      .catch(() => setApiResponse(false));
  }, []);

  return (
    <Box m="0px 20px 20px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Factory Overview"
          subtitle="Detailed Information about item production"
        />
      </Box>
      <Grid
        container
        spacing={{ xs: 1, md: 1 }}
        columns={{ xs: 4, sm: 8, md: 24 }}
        borderRadius="8px"
        height="77vh"
        overflow="auto"
        sx={{ scrollbarWidth: "none" }}
      >
        {worldItems.map((item, id) => (
          <Grid key={id} size={{ xs: 2, sm: 4, md: 3 }}>
            <FactoryCard
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

export { FactoryOverview };
