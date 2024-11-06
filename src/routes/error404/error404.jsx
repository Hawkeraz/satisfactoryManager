import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import * as MaterialIcons from "@mui/icons-material";

const Error404 = () => {
  return (
    <Box m="20px" display="flex" justifyContent="center" alignItems="center" height="70%">
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <h1>ERROR 404</h1>
        <MaterialIcons.Warning sx={{ color: "yellow", fontSize: "10rem" }} />
        <h2> Seems like you went out of the right way its better you go back to <Link to="/">News</Link><br/>
        so you can find your way back</h2>
      </Box>
    </Box>
  );
};

export { Error404 };
