import { Box } from "@mui/system";
import { Typography, useTheme } from "@mui/material";
import { colorTokens } from "../theme";

const Tracker = (props) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const { title, amount, icon } = props;

  const upperBox = {
    backgroundColor: colors.green[700],
    borderRadius: "6px 6px 0 0",
    padding: "0.2rem",
  };

  const lowerBox = {
    backgroundColor: colors.primary[400],
    borderRadius: "0 0 6px 6px",
    display: "flex",
    flexDirection: "column",
  };

  const innerBox = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  };

  return (
    <Box>
      <Box {...upperBox} />
      <Box {...lowerBox}>
        <Box {...innerBox}>
          <Typography variant="h4" padding="0.5rem">
            {icon}
          </Typography>
          <Typography variant="h4" padding="0.5rem">
            {title}
          </Typography>
        </Box>
        <Box {...innerBox}>
          <Typography variant="h4" padding="0.5rem"/>
          <Typography variant="h1" padding="0.5rem">
            {amount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { Tracker };
