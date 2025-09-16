import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { colorTokens } from "../../theme";
import Header from "../../components/Header";
import { mockData } from "../../Data/mockData";

import * as MaterialIcons from "@mui/icons-material";

const Warehouse = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  function preColumns() {
    mockData.forEach((item, i) => {
      item.id = i + 1;
    });

    return mockData;
  }

  const columns = [
    {
      field: "Name",
      headerName: "Resource",
      flex: 3,
      cellClassName: "name-column--cell",
    },
    {
      field: "ProdPercent",
      headerName: "Production Rate",
      flex: 0.5,
      type: "number",
      renderCell: ({ row: { ProdPercent } }) => {
        return (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100%"
          >
            <Typography>
              {(Math.round(ProdPercent + Number.EPSILON) * 100) / 100}%
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "MaxProd",
      headerName: "Maximum Production",
      flex: 0.5,
      type: "number",
    },
    {
      field: "MaxConsumed",
      headerName: "Consuming",
      flex: 0.5,
      type: "number",
    },
  ];

  return (
    <Box m="0px 20px 20px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Warehouse"
          subtitle="Detailed Information about item storage"
        />
      </Box>
      <Box
        m="10px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { borderBottom: "none" },
          "& .name-column--cell": { color: colors.green[300] },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blue[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-scrollbarFiller": {
            backgroundColor: colors.blue[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            background: colors.blue[700],
          },
        }}
      >
        <DataGrid rows={preColumns()} columns={columns} />
      </Box>
    </Box>
  );
};

export { Warehouse };
