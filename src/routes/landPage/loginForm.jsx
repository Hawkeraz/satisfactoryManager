import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import { colorTokens } from "../../theme";

import Stack from "@mui/material/Stack";
import logo from "../../assets/sfLogo.png";

const LoginForm = () => {
  const Navigate = useNavigate();
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  const outerBox = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    m: "2.2rem",
  };

  return (
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
      <Box sx={outerBox}>
        <Typography
          variant="h1"
          color={colors.green[400]}
          fontFamily={"Roboto"}
          fontSize="3rem"
          mb="2vh"
        >
          Log in to your account
        </Typography>
        <Typography
          variant="h5"
          color={colors.grey[100]}
          fontWeight="700"
          fontFamily={"Roboto"}
        >
          Don't have an account? Sign In with google
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt="5vh">
        <GoogleLogin
          text="signing_with"
          shape="pill"
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

export { LoginForm };
