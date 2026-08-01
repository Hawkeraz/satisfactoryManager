import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_CLIENTID,
);

// const authToken = JSON.parse(localStorage.getItem(`sb-${import.meta.env.VITE_SUPABASE_URL.split("/")[2].split(".")[0]}-auth-token`))

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {

    async function getUserData() {
      await supabase.auth.getUser().then((response) => {
        if (Object.keys(response.data.user).length !== 0) {
          navigate("/app/dash", { state: { user: response.data?.user } });
        } else {
          const { error } = supabase.auth.signOut();
          navigate("/");
        }
      });
    }
    getUserData();
  }, []);

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
        <Typography>Processing</Typography>
      </Box>
    </Box>
  );
};

export { Redirect };
