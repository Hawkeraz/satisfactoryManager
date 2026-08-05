import { Tracker } from "../../components/tracker";
import { LineGraph } from "../../components/lineChart";
import { SemiCircleChart } from "../../components/pieChart";
import { Box, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import * as MUIicons from "@mui/icons-material";

const mainGrid = {
  spacing: 2,
  direction: "row",
  width: "100%",
  sx: { justifyContent: "flex-start", alignItems: "space-between" },
};

const rowTracker = {
  alignItems: "center",
  size: "grow",
};

const DashboardLayout = (props) => {
  const { sinkData, energyData } = props;

  const Trackers = [
    {
      title: "Date",
      amount: new Date()
        .toLocaleString("pt-BR", { timeZone: "UTC" })
        .split(",")[0],
      icon: <MUIicons.CalendarMonthOutlined />,
      progress: false,
      percent: sinkData.Percent || 0,
    },
    {
      title: "Total Energy Generated",
      amount: `${conversionValue(energyData, "PowerCapacity")} mW` || "-",
      icon: <MUIicons.BoltOutlined />,
      progress: false,
      percent: sinkData.Percent || 0,
    },
    {
      title: "Total Energy Consumed",
      amount: `${conversionValue(energyData, "PowerMaxConsumed")} mW` || "-",
      icon: <MUIicons.BoltOutlined />,
      progress: false,
      percent: sinkData.Percent || 0,
    },
    {
      title: "Tickets",
      amount: sinkData.NumCoupon || "-",
      icon: <MUIicons.LocalActivity />,
      progress: true,
      percent: sinkData.Percent || 0,
    },
  ];

  function conversionValue(value, attr) {
    if (value) {
      const toConvert = value.reduce(
        (acc, currentItem) => acc + currentItem[attr],
        0,
      );
      return Math.round((toConvert + Number.EPSILON) * 100) / 100;
    } else return "-";
  }

  return (
    <Box>
      <Grid container {...mainGrid}>
        {Trackers.map((tracker, id) => (
          <Grid {...rowTracker} key={id}>
            <Tracker
              key={id}
              title={tracker.title}
              amount={tracker.amount}
              icon={tracker.icon}
              progress={tracker.progress}
              percent={tracker.percent}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container {...mainGrid} mt={2}>
        <Grid {...rowTracker} size={9}>
          {sinkData.GraphPoints ? (
            <LineGraph title="Tickets Overtime" data={sinkData.GraphPoints} />
          ) : (
            <Skeleton
              variant="rounded"
              width="100%"
              height="99.5%"
              animation="wave"
            />
          )}
        </Grid>
        <Grid {...rowTracker}>
          <SemiCircleChart
            title="Power Management"
            consuming={conversionValue(energyData, "PowerConsumed")}
            generating={conversionValue(energyData, "PowerCapacity")}
          />
        </Grid>
      </Grid>
      {/* <Grid container {...mainGrid} mt={2}>
        <Grid {...rowTracker} size={9}>
          {energyData.PowerConsumed ? (
            <LineGraph title="Power Consuming" data={energyData.PowerConsumed} />
          ) : (
            <Skeleton
              variant="rounded"
              width="100%"
              height="99.5%"
              animation="wave"
            />
          )}
        </Grid>
      </Grid> */}
    </Box>
  );
};

export { DashboardLayout };
