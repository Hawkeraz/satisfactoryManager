import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { colorTokens } from "../../theme";
import * as MaterialIcons from "@mui/icons-material";
import userIconDefault from "../../assets/user.png"

const Sidebar = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const [collapser, setCollapser] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

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
      <ProSidebar collapsed={collapser}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setCollapser(!collapser)}
            icon={collapser ? <MaterialIcons.MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!collapser && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  Satisfactory
                </Typography>
                <IconButton onClick={() => setCollapser(!collapser)}>
                  <MaterialIcons.MenuOutlined />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!collapser && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                 alt="profile-user"
                 width="100px"
                 height="100px"
                 src={userIconDefault}
                 style={{ cursor: "pointer", borderRadius: "50%"}}
                 />
              </Box>

              <Box textAlign="center">
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{m: "10px 0 0 0"}}> USERNAME </Typography>
                <Typography variant="h5" color={colors.green[500]}> USER LEVEL </Typography>
              </Box>
            </Box>
          )}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export { Sidebar };
