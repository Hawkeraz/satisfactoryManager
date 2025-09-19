import {
  Box,
  Card,
  CardMedia,
  Typography,
  useTheme,
  Divider,
  Skeleton
} from "@mui/material";
import { useEffect, useState } from "react";
import { colorTokens } from "../../theme";
import { MouseHoverPopover } from "../../components/popOver";
import * as MUIicons from "@mui/icons-material";

const FactoryCard = (props) => {
  const { imageCode, pRate, cRate, name, efficiency, type } = props;
  const [image, setImage] = useState();

  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  useEffect(() => {
    const imageUrl = `${import.meta.env.VITE_SATISFACTORY_API}/Icons/${imageCode}.png`;
    setImage(imageUrl);
  }, []);

  function status(Tag, value, siUnit) {
    return (
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center" color="ee83e5" fontWeight="700">
          <Typography marginBottom="0.2rem" color={colors.grey[300]}>
            {Tag}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" color="ee83e5" fontWeight="700">
          <Typography color={colors.grey[300]}>
            {(Math.round(value + Number.EPSILON) * 100) / 100} {siUnit}
          </Typography>
        </Box>
      </Box>
    );
  }

  function getIconForType(type) {
    const iconMap = {
      Solid: <MUIicons.Hexagon sx={{ fontSize: "1rem" }} />,
      default: <MUIicons.WaterDrop sx={{ fontSize: "1rem" }} />,
    };

    return iconMap[type] || iconMap.default;
  }

  return (
    !imageCode ? <Skeleton variant="rectangular" width="100%" height="100%" /> :
    <Card sx={{ backgroundColor: colors.primary[400] }}>
      <Box margin="3rem" borderRadius="8px">
        <CardMedia component="img" image={image} alt="warehouse image" />
      </Box>

      <Divider orientation="horizontal" variant="fullWidth" />

      <Box display="flex" flexDirection="column" padding="1rem">
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
        <Typography variant="h4" marginBottom="1rem" overflow= "hidden" textOverflow= "ellipsis" whiteSpace= "nowrap" >
            <MouseHoverPopover mainText={name} description={name} variant="h4" sx={{ fontWeight: "700", overflow:"hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} />
          </Typography>
          <Typography variant="h4" marginBottom="1rem" fontWeight="700" mt=".3rem">
            <MouseHoverPopover mainText={getIconForType(type)} description={type} />
          </Typography>
        </Box>
        {status("Prod. Rate", pRate, "/min")}
        {status("Cons. Rate", cRate, "/min")}
        {status("Efficiency", efficiency, "%")}
      </Box>
    </Card>
  );
};

export { FactoryCard };