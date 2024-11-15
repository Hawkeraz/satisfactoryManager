import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import * as MaterialIcons from "@mui/icons-material";

const Cards = ({ maxUsing, capacity, using, percent, fuse }) => {

  return (
    <Box m="10px">
      <Card sx={{ maxWidth: 325 }}>
        <CardActionArea>
          <Box
            m="10px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <MaterialIcons.FlashOn sx={{ fontSize: "6rem" }} />
          </Box>
          <CardContent>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="left"
              alignContent="center"
            >
              <Box
                display="flex"
                flexDirection="row"
                alignContent="center"
                justifyContent="space-evenly"
              >
                <Typography>Total Capacity</Typography>
                <Typography>{(Math.round(capacity + Number.EPSILON) * 100) / 100}</Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="row"
                alignContent="center"
                justifyContent="space-evenly"
              >
                <Typography>Consuming</Typography>
                <Typography>{(Math.round(using + Number.EPSILON) * 100) / 100}</Typography>
              </Box>

              <Box
                display="flex"
                flexDirection="row"
                alignContent="center"
                justifyContent="space-evenly"
              >
                <Typography>Total Consume</Typography>
                <Typography>{(Math.round(maxUsing + Number.EPSILON) * 100) / 100}</Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export { Cards };
