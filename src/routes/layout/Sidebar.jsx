import * as MaterialIcons from "@mui/icons-material";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SidebarFooter } from "react-pro-sidebar";
import { Box, Divider, Typography, useTheme, IconButton } from "@mui/material";
import { Navigate, useNavigate, Link } from "react-router-dom";
import { colorTokens } from "../../theme";
import { DataTracking, LogisticTracking } from "./sidebarMenu";
import { ProfilePicture } from "../../components/avatar";
import { useAuth } from "../../contexts";
import { supabase } from "../../services/supabase";

import stLogo from "../../assets/logoSampleAI.png";

import { Auth } from "@supabase/auth-ui-react";
import { createClient } from "@supabase/supabase-js";

import "react-pro-sidebar/dist/css/styles.css";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const typoStyle = {
  m: "15px 0 5px 1.5rem",
};

const Sidebar = (props) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const Navigate = useNavigate();
  const { user } = useAuth();

  const [collapser, setCollapser] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  async function handleLogout() {
    await supabase.auth.signOut();
    Navigate("/");
  }

  return (
    <Box
      sx={{
        "& .pro-menu": {
          paddingTop: "5px",
        },

        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },

        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },

        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },

        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },

        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={collapser} sx={{ p: "0" }}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"100vh"}
        >
          <Menu iconShape="square" display="flex">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setCollapser(!collapser)}
              icon={<img src={stLogo} alt="logo" height="35vh" width="35vw" />}
              style={{
                color: colors.grey[100],
              }}
            >
              {!collapser && (
                <Box>
                  <Box display="flex" alignItems="center" pt=".5vh">
                    {selected}
                  </Box>
                </Box>
              )}
            </MenuItem>

            <Divider style={{ marginTop: ".5rem", marginBottom: ".5rem" }} />

            {/* Menu Items */}

            <Box paddingLeft={collapser ? undefined : "0%"}>
              <Item
                title="News"
                to="/app/news"
                icon={<MaterialIcons.NewReleases />}
                selected={selected}
                setSelected={setSelected}
                key={0}
              />

              <Divider style={{ marginTop: ".5rem", marginBottom: ".5rem" }} />

              {!collapser ? (
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.grey[100]}
                  sx={typoStyle}
                >
                  Factory Info
                </Typography>
              ) : null}

              {DataTracking.map((opts) => (
                <Item
                  title={opts.title}
                  to={opts.to}
                  icon={<opts.icon />}
                  selected={selected}
                  setSelected={setSelected}
                  key={opts.id}
                />
              ))}

              <Divider style={{ marginTop: ".5rem", marginBottom: ".5rem" }} />

              {!collapser ? (
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  color={colors.grey[100]}
                  sx={typoStyle}
                >
                  Vehicles Tracking
                </Typography>
              ) : null}

              {LogisticTracking.map((opts) => (
                <Item
                  title={opts.title}
                  to={opts.to}
                  icon={<opts.icon />}
                  selected={selected}
                  setSelected={setSelected}
                  key={opts.id}
                />
              ))}
            </Box>
          </Menu>
          <SidebarFooter style={{ textAlign: collapser ? "center" : "left" }}>
            <Box
              display="flex"
              justifyContent={collapser ? "center" : "space-between"}
              alignItems="center"
            >
              <Box
                display="flex"
                alignItems={collapser ? "center" : "flex-start"}
                justifyContent={collapser ? "center" : "flex-start"}
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                <ProfilePicture
                  src={user?.user_metadata.avatar_url}
                  alt="user"
                />
                {collapser ? null : (
                  <Box p={1}>
                    <Typography variant="h5" color={colors.grey[100]}>
                      {user?.user_metadata.name}
                    </Typography>
                    <Typography variant="h6" color={colors.green[500]}>
                      {user?.app_metadata.provider}
                    </Typography>
                  </Box>
                )}
              </Box>

              {collapser ? null : (
                <Box mr=".5rem">
                  <IconButton
                    sx={{ color: colors.red[500] }}
                    onClick={() => handleLogout()}
                  >
                    <MaterialIcons.Logout />
                  </IconButton>
                </Box>
              )}
            </Box>
          </SidebarFooter>
        </Box>
      </ProSidebar>
    </Box>
  );
};

export { Sidebar };
