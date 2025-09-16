import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { News } from "./news";

import { colorTokens } from "../../theme";
import { getNews } from "../../Data/getNews";

const Home = () => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  return (
    <Box m="0px 20px 20px 20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="NEWS"
          subtitle="Every news and changes recently added to this tool"
        />
      </Box>
      
      <Box height="75vh" overflow="hidden" overflow-y="scroll" borderRadius="8px">
        {getNews.map((news, id) => (
              <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="8px" padding="20px" marginBottom="20px" key={id}>
                <News date={news.date} title={news.title} description={news.description}/>
              </Box>
            )
          )
        }
      </Box>
    </Box>
  );
};

export { Home };
