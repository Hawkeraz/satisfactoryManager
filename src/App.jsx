import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Topbar, Sidebar } from "./routes";
import { Router } from "./router";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar />
          <main className="content">
            <Topbar />
            <Router />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export { App };
