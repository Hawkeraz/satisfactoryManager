import * as MaterialIcons from "@mui/icons-material";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SidebarFooter } from "react-pro-sidebar";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { colorTokens } from "../../theme";
import { DataTracking, LogisticTracking } from "./sidebarMenu";
import { ProfilePicture } from "../../components/avatar";
import user from "../../assets/user.png"; // import user image (mocked)
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

const Sidebar = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [collapser, setCollapser] = useState(false);
  const [selected, setSelected] = useState("news");

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
              icon={
                collapser ? (
                  <MaterialIcons.MenuOutlined />
                ) : (
                  <MaterialIcons.ArrowBackOutlined />
                )
              }
              style={{
                color: colors.grey[100],
              }}
            >
              {!collapser && (
                <Box>
                  <Box display="flex" alignItems="center">
                    Satisfactory Manager
                  </Box>
                </Box>
              )}
            </MenuItem>
            <Divider />

            {/* Menu Items */}

            <Box paddingLeft={collapser ? undefined : "0%"} mt={"2rem"}>
              <Item
                title="News"
                to="/news"
                icon={<MaterialIcons.NewReleases />}
                selected={selected}
                setSelected={setSelected}
                key={0}
              />

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
              alignItems={collapser ? "center" : "flex-start"}
              justifyContent={collapser ? "center" : "flex-start"}
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              <ProfilePicture src={user} alt="user" />
              {collapser ? null : (
                <Box p={1}>
                  <Typography variant="h5" color={colors.grey[100]}>
                    John Doe
                  </Typography>
                  <Typography variant="h6" color={colors.green[500]}>
                    VP Fancy Admin
                  </Typography>
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
