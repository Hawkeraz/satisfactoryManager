import * as MUIicons from "@mui/icons-material";
import { Typography, Box, useTheme } from "@mui/material";
import { colorTokens } from "../../theme";
const Cards = (props) => {
  const { maxUsing, using, capacity, percent, fuse, name } = props;

  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  function powerCheck(percent) {
    switch (true) {
      case percent == 100:
        return <MUIicons.BatteryChargingFull sx={{ fontSize: "3rem" }} />;
        break;
      case percent >= 10 && percent <= 99:
        return <MUIicons.BatteryCharging50 sx={{ fontSize: "3rem" }} />;
        break;
      case percent <= 10:
        return <MUIicons.Battery0Bar sx={{ fontSize: "3rem" }} />;
        break;
      default:
        return <MUIicons.BatteryUnknown sx={{ fontSize: "3rem" }} />;
        break;
    }
  }

  return (
    <Box>
      <Box
        borderRadius="20px"
        padding="16px"
        width="250px"
        textAlign="left"
        margin="10px"
        boxShadow="0 4px 6px 0px rgba(0, 0, 0, 0.3)"
        backgroundColor={colors.primary[400]}
      >
        <Box
          display="flex"
          flexDirection="line"
          justifyContent="flex-start"
          color={colors.green[400]}
        >
          <Box
            display="flex"
            marginBottom="16px"
            padding="7px"
            borderRadius="20px"
            boxShadow="4"
          >
            {powerCheck(percent)}
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            margin="0 0 16px 0"
            justifyContent="initial"
          >
            <Box>
              <Box margin="0px 10px 0 0" paddingLeft="10px">
                <Typography sx={{ fontSize: "1.5rem" }}>Zone 1 </Typography>
              </Box>
            </Box>

            <Box>
              <Box paddingLeft="10px">
                <Typography>Subtitle</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box marginLeft="10px">
          <Typography>
            Max Using: {(Math.round(maxUsing + Number.EPSILON) * 100) / 100}
          </Typography>

          <Typography>
            Using: {(Math.round(using + Number.EPSILON) * 100) / 100}
          </Typography>

          <Typography>
            Capacity: {(Math.round(capacity + Number.EPSILON) * 100) / 100}
          </Typography>

          <Typography> Percent: {percent}</Typography>

          <Typography> Fuse: {fuse.toString()}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { Cards };
