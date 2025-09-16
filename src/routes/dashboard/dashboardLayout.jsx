import { Tracker } from "../../components/tracker";
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

// ----- Sample Data -------- //
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
    amount: "100mw",
    icon: <MUIicons.BoltOutlined />,
  },
  {
    title: "Sample",
    amount: "10",
    icon: <MUIicons.BlockOutlined />,
  },
  {
    title: "Tickets",
    amount: "10",
    icon: <MUIicons.LocalActivity />,
  },
];

const DashboardLayout = () => {
  return (
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
  );
};

export { DashboardLayout };
