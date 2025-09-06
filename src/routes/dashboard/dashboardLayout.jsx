import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { colorTokens } from "../../theme";
import Grid from "@mui/material/Grid2";

const mainGrid = {
  spacing: 2,
  direction: "row",
  sx: { justifyContent: "flex-start", alignItems: "flex-start" },
};

const rowTracker = {
  size: "auto",
  alignItems: "center",
  padding: "1rem",
  borderRadius: "8px",
};

const DashboardLayout = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Grid container {...mainGrid}>
      <Grid container {...rowTracker} backgroundColor={colors.primary[400]}>
        <Typography variant="h1">Tracker 1</Typography>
      </Grid>
    </Grid>
  );
};

export { DashboardLayout };
