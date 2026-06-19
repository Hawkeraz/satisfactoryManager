import * as MUIicons from "@mui/icons-material";
import { Typography, Box, useTheme, Divider, Button, Card, CardMedia, Skeleton } from "@mui/material";
import { colorTokens } from "../../theme";
import batteryIMG from "../../assets/power.png";
const Cards = (props) => {
  const { using, capacity, percent, fuse, name } = props;

  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  function powerCheck(percent) {
    switch (true) {
      case percent == 100:
        return (
          <MUIicons.BatteryChargingFull
            sx={{ fontSize: "2rem", color: colors.green[400] }}
          />
        );
      case percent >= 10 && percent <= 99:
        return (
          <MUIicons.BatteryCharging50
            sx={{ fontSize: "2rem", color: "yellow" }}
          />
        );
      case percent <= 10:
        return (
          <MUIicons.Battery0Bar
            sx={{ fontSize: "2rem", color: colors.red[400] }}
          />
        );
      default:
        return <MUIicons.BatteryUnknown sx={{ fontSize: "2rem" }} />;
    }
  }

  return (
    percent === null ? <Skeleton variant="rectangular" width="100%" height="100%" /> :
    <Card sx={{ backgroundColor: colors.primary[400] }}>
      <Box borderRadius="8px">
        <CardMedia component="img" image={batteryIMG} alt="warehouse image" />
      </Box>

        <Box display="flex" flexDirection="column" padding="1rem">
          <Typography variant="h3" marginBottom="1rem" fontWeight="700">
            {name}
          </Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              alignItems="center"
              color="ee83e5"
              fontWeight="700"
            >
              <Typography marginBottom="0.25rem" color={colors.grey[300]}>
                Using
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              color="ee83e5"
              fontWeight="700"
            >
              <Typography color={colors.grey[300]}>
                {(Math.round(using + Number.EPSILON) * 100) / 100} W / 
                {(Math.round(capacity + Number.EPSILON) * 100) / 100} W
              </Typography>
            </Box>
          </Box>

          <Divider orientation="horizontal" variant="fullWidth" />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box marginTop="1rem">
              <Button variant="outlined" color={colors.primary[400]}> Edit </Button>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              marginTop="1rem"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="0.5rem"
                marginRight="0.25rem"
              >
                {powerCheck(percent)}
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                borderRadius="0.5rem"
              >
                {fuse ? (
                  <MUIicons.FlashOff
                    sx={{ fontSize: "2rem", color: colors.red[400] }}
                  />
                ) : (
                  <MUIicons.FlashOn
                    sx={{ fontSize: "2rem", color: colors.green[400] }}
                  />
                )}
              </Box>
            </Box>
          </Box>
        </Box>
    </Card>
  );
};

export { Cards };
