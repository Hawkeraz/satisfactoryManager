import * as MaterialIcons from "@mui/icons-material";
import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SidebarHeader } from "react-pro-sidebar";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { colorTokens } from "../../theme";
import { DataTracking, LogisticTracking } from "./sidebarMenu";
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
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setCollapser(!collapser)}
            icon={collapser ? <MaterialIcons.MenuOutlined /> : undefined}
            style={{
              color: colors.grey[100],
            }}
          >
            {!collapser && (
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    variant="h3"
                    color={colors.green[400]}
                    bgcolor={colors.primary[700]}
                    borderRadius={3}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    padding="0.25rem"
                  >
                    <MaterialIcons.BoltOutlined fontSize="large" />
                  </Typography>
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
      </ProSidebar>
    </Box>
  );
};

export { Sidebar };
