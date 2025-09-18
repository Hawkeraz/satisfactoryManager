import * as MaterialIcons from "@mui/icons-material";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography, useTheme } from "@mui/material";

import { colorTokens } from "../theme";

const LineGraph = (props) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);
  const { title, data } = props;

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
            <MaterialIcons.BarChart fontSize="large" />
          </Typography>
          <Typography variant="h3" pb={"0.5rem"}>
            {title}
          </Typography>
        </Box>
        <Box pt={"1rem"}>
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9] }]}
            series={[
              {
                data: data || [0, 0, 0, 0, 0, 0, 0, 0, 0],
                baseline: "min",
                showMark: false,
                color: colors.green[400],
              },
            ]}
            height={530}
            width={1100}
            grid={{ horizontal: true }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export { LineGraph };
