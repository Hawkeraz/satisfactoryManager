import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, colorTokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import * as MaterialIcons from "@mui/icons-material";

const Topbar = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* Search Bar */}

      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <MaterialIcons.SearchOutlined />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <MaterialIcons.DarkModeOutlined />
          ) : (
            <MaterialIcons.LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <MaterialIcons.SettingsOutlined />
        </IconButton>
        <IconButton>
          <MaterialIcons.NotificationsOutlined />
        </IconButton>
        <IconButton>
          <MaterialIcons.PersonOutlineOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export { Topbar };
