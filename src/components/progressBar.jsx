import { Box, LinearProgress, Typography } from "@mui/material";

const ProgressBar = (props) => {
  const { value } = props;

  function toPercent(value) {
    return Math.round(value * 100);
  }

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: "-50% "}}>
        <LinearProgress
          variant="determinate"
          value={toPercent(value)}
          color="secondary"
          sx={{ height: "1rem" }}
        />
      </Box>
      <Typography sx={{zIndex: 0}}>{toPercent(value)}%</Typography>
    </Box>
  );
};

export { ProgressBar };
