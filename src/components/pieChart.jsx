import * as MaterialIcons from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

import { colorTokens } from "../theme";

const SemiCircleChart = (props) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const { title, consuming, generating } = props;

  const data = [
    { label: "Generating", value: generating || "0", color: colors.green[400] },
    { label: "Consuming", value: consuming || "0", color: colors.red[400] },
  ];

  const settings = {
    margin: { right: 5 },
    width:300,
    height: 500,
  };

  const graphDetail = {
    backgroundColor: colors.green[700],
    borderRadius: "6px 6px 0 0",
    padding: "0.2rem",
  };

  const graphBox = {
    backgroundColor: colors.primary[400],
    borderRadius: "0 0 6px 6px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Box>
      <Box {...graphDetail} />
      <Box {...graphBox}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          pb={"0.5rem"}
        >
          <Typography variant="h3" padding="0.5rem" pl="1rem">
            <MaterialIcons.PieChart fontSize="large" />
          </Typography>
          <Typography variant="h3" pb={"0.5rem"}>
            {title}
          </Typography>
        </Box>
        <Box mb="1rem">
          <PieChart
            series={[
              {
                data,
                arcLabel: "value",
                innerRadius: 50,
                outerRadius: 100,
                // startAngle: -90,
                // endAngle: 90,
                cornerRadius: 6,
                highlightScope: { fade: "global", highlight: "item" },
              },
            ]}
            slotProps={{
              legend: {
                direction: "horizontal",
                position: {
                  vertical: "bottom",
                  horizontal: "center",
                },
              },
            }}
            {...settings}
          />
        </Box>
      </Box>
    </Box>
  );
};

export { SemiCircleChart };
