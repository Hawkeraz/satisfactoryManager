import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, colorTokens } from "../../theme";
import { ProfilePicture } from "../../components/avatar";
import * as MaterialIcons from "@mui/icons-material";

const Topbar = (props) => {
  const { user } = props;
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="right" p={2}>
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
      </Box>
    </Box>
  );
};

export { Topbar };
