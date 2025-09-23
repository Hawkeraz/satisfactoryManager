import { Box } from "@mui/material";
import SatisfactoryPlayback from "../../assets/Playback.mp4";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  objectFit: "cover",
  height: "100%",
  width: "100%",
  overflow: "hidden",
};

const VideoPlayback = () => {
  return (
    <Box sx={{...styles}}>
      <video muted loop controls={false} autoPlay>
        <source src={SatisfactoryPlayback} type="video/mp4" />
      </video>
    </Box>
  );
};

export { VideoPlayback };
