import { Tracker } from "../../components/tracker";
import { LineGraph } from "../../components/lineChart";
import { SemiCircleChart } from "../../components/pieChart";
import { Box } from "@mui/material";
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
    },
    {
      title: "Total Energy Generated",
      amount: `${getCapacityValue(energyData)} mW` || "-",
      icon: <MUIicons.BoltOutlined />,
    },
    {
      title: "Total Energy Consumed",
      amount: `${getTotalConsumed(energyData)} mW` || "-",
      icon: <MUIicons.BoltOutlined />,
    },
    {
      title: "Tickets",
      amount: sinkData.NumCoupon || "-",
      icon: <MUIicons.LocalActivity />,
    },
  ];

  function getOutputValue(value) {
    const powerConsumption = value.reduce(
      (acc, currentItem) => acc + currentItem.PowerConsumed,
      0
    );
    return Math.round((powerConsumption + Number.EPSILON) * 100) / 100;
  }

  function getInputValue(value) {
    const powerProduction = value.reduce(
      (acc, currentItem) => acc + currentItem.PowerProduction,
      0
    );
    return Math.round((powerProduction + Number.EPSILON) * 100) / 100;
  }

  function getCapacityValue(value) {
    const powerCapacity = value.reduce(
      (acc, currentItem) => acc + currentItem.PowerCapacity,
      0
    );
    return Math.round((powerCapacity + Number.EPSILON) * 100) / 100;
  }

  function getTotalConsumed(value) {
    const powerMaxConsume = value.reduce(
      (acc, currentItem) => acc + currentItem.PowerMaxConsumed,
      0
    );
    return Math.round((powerMaxConsume + Number.EPSILON) * 100) / 100;
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
            />
          </Grid>
        ))}
      </Grid>
      <Grid container {...mainGrid} mt={2}>
        <Grid {...rowTracker} size={9}>
          <LineGraph title="Tickets Overtime" data={sinkData.GraphPoints} />
        </Grid>
        <Grid {...rowTracker}>
          <SemiCircleChart
            title="Power Management"
            consuming={getOutputValue(energyData)}
            generating={getInputValue(energyData)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export { DashboardLayout };
