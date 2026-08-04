import { Box, Divider, IconButton, useTheme } from "@mui/material";
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
    <Box display="flex" justifyContent="right" p={1.35} borderBottom={1} mb={1} borderColor={colors.grey[600]}>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <MaterialIcons.LightModeOutlined />
          ) : (
            <MaterialIcons.DarkModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <MaterialIcons.SettingsOutlined />
        </IconButton>
        <Divider orientation="vertical" sx={{ mx: 1.5 }} flexItem />
        <IconButton>
          <MaterialIcons.NotificationsOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export { Topbar };
