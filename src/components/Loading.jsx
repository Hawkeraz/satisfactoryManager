import { Box, Typography, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Loading = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        display="flex"
        alignContent="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box marginBottom="1rem">
          <CircularProgress
            color="secondary"
            size="3rem"
            aria-label="Loading…"
          />
        </Box>
        <Typography>Loading...</Typography>
      </Box>
    </Box>
  );
};

export { Loading };
