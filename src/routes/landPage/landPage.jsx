import { Box } from "@mui/material";
import { VideoPlayback } from "./videoPlayback";
import { LoginForm } from "./loginForm";

const LandingPage = () => {

  return (
    <Box display="flex">
      <Box display="flex" height="100vh" width="70vw">
        <Box overflow="hidden">
          <VideoPlayback />
        </Box>
      </Box>
        <LoginForm />
    </Box>
  );
};

export { LandingPage };