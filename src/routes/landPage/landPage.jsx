import { Box, useTheme } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { colorTokens } from "../../theme";

const LandingPage = () => {
  const Navigate = useNavigate();
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box display="flex">
      <Box
        display="flex"
        height="100vh"
        width="70vw"
      >
        <Box>
          Login
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor={colors.primary[400]}
        height="100vh"
        width="30vw"
      >
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            localStorage.setItem("token", credentialResponse.credential);
            Navigate("/app/news");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </Box>
    </Box>
  );
};

export { LandingPage };
