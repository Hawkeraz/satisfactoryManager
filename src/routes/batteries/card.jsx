import * as MUIicons from "@mui/icons-material";
import { Typography, Box, useTheme, Divider } from "@mui/material";
import { colorTokens } from "../../theme";
import batteryIMG from "../../assets/power.png";
const Cards = (props) => {
  const { maxUsing, using, capacity, percent, fuse, name } = props;

  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  function powerCheck(percent) {
    switch (true) {
      case percent == 100:
        return <MUIicons.BatteryChargingFull sx={{ fontSize: "3rem", color: colors.green[400] }} />;
      case percent >= 10 && percent <= 99:
        return <MUIicons.BatteryCharging50 sx={{ fontSize: "3rem", color: "yellow" }} />;
      case percent <= 10:
        return <MUIicons.Battery0Bar sx={{ fontSize: "3rem", color: colors.red[400] }} />;
      default:
        return <MUIicons.BatteryUnknown sx={{ fontSize: "3rem" }} />;
    }
  }

  return (
    <Box>
      <Box
        padding="20px"
        width="300px"
        textAlign="left"
        margin="1rem"
        border="1px solid #ffffff22"
        borderRadius=".7rem"
        backgroundColor={colors.primary[900]}
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        sx={{
          backdropFilter: "blur(7px)",
          WebkitBackdropFilter: "blur(7px)",
          transition: "0.5s all",
        }}
        overflow="hidden"
      >
        <Box display="flex" flexDirection="column" marginBottom="1rem">
          <img
            src={batteryIMG}
            alt="Battery"
            max-width="100%"
            height="250px"
            style={{ objectFit: "cover", borderRadius: ".5rem" }}
          />
          <Typography variant="h2" marginTop="1rem">
            Zone 1
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            color="ee83e5"
            fontWeight="700"
          >
            <Typography> Using </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            color="ee83e5"
            fontWeight="700"
          >
            <Typography>
              {(Math.round(using + Number.EPSILON) * 100) / 100} W /{" "}
              {(Math.round(capacity + Number.EPSILON) * 100) / 100} W
            </Typography>
          </Box>
        </Box>

        <Divider orientation="horizontal" variant="fullWidth" />

        <Box display="flex" alignItems="center" marginTop="1rem">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding=".3rem"
            backgroundColor={colors.primary[400]}
            borderRadius="1rem"
            marginRight="1rem"
          >
            {powerCheck(percent)}
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            padding=".3rem"
            backgroundColor={fuse ? colors.red[300] : colors.green[600]}
            borderRadius="1rem"
          >
            {fuse ? (
              <MUIicons.FlashOff sx={{ fontSize: "3rem", color: "white" }} />
            ) : (
              <MUIicons.FlashOn sx={{ fontSize: "3rem", color: "white" }} />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { Cards };
