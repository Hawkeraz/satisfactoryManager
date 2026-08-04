import { Box, Typography, useTheme } from "@mui/material";
import { VideoPlayback } from "./videoPlayback";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { colorTokens } from "../../theme";
import { supabase } from "../../services/supabase";

import Stack from "@mui/material/Stack";
import logo from "../../assets/sfLogo.png";

const LandingPage = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box display="flex">
      <Box display="flex" height="100vh" width="70vw">
        <Box overflow="hidden">
          <VideoPlayback />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        height="100vh"
        width="30vw"
        alignItems="center"
        backgroundColor={colors.primary[400]}
      >
        <Box m="2rem">
          <img src={logo} alt="Logo" width="100%" height="100%" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          mt="5vh"
          width="70%"
          backgroundColor={colors.primary[700]}
          borderRadius="16px"
        >
          <Box>
            <Typography variant="h2" m="1rem">
              LOGIN
            </Typography>
          </Box>
          <Box mb="1rem">
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
              providers={["google", "discord"]}
              redirectTo={`${window.location.origin}/redirect`}
              // onlyThirdPartyProviders
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { LandingPage };
