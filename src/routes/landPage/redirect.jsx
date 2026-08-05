import { useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Typography, Box, CircularProgress } from "@mui/material";
import { Loading } from "../../components";
import { useAuth } from "../../contexts";
import { supabase } from "../../services/supabase";

const Redirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        navigate("/app/dash", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    });
  }, [navigate]);

  return <Loading />;
};

export { Redirect };
