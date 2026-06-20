import { Box, Typography, useTheme } from "@mui/material";
import { VideoPlayback } from "./videoPlayback";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { colorTokens } from "../../theme";

import Stack from "@mui/material/Stack";
import logo from "../../assets/sfLogo.png";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_CLIENTID,
);

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  supabase.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_IN") {
      navigate("/redirect");
    } else {
      navigate("/");
    }
  });

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
        backgroundColor={colors.primary[400]}
      >
        <Box m="2rem">
          <img src={logo} alt="Logo" width="100%" height="100%" />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="5vh"
        >
          <Auth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            theme="dark"
            providers={["google", "discord"]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export { LandingPage };
