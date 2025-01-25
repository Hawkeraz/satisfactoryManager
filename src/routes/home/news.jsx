import { Box } from "@mui/material";
import { Divider, Typography } from "@mui/material";

const News = (props) => {
  const { date, title, description } = props;
  function formatDate(dateString) {
    const date = new Date(dateString);
    const localeOptions = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("pt-BR", localeOptions);
  }

  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="flex-end"
        paddingBottom="5px"
      >
        <Typography variant="h3"> {title} </Typography>
        <Typography variant="h6"> {formatDate(date)} </Typography>
      </Box>
      <Divider orientation="horizontal" variant="fullWidth" />
      <Box paddingTop="5px">
        <Typography whiteSpace="pre-line"> {description} </Typography>
      </Box>
    </Box>
  );
};

export { News };
