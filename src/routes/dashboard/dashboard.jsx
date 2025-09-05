import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Grid from "@mui/material/Grid2";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Track your productions here" />
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
      </Grid>
    </Box>
  );
};

export { Dashboard };
