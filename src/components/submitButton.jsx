import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { colorTokens } from "../theme";

const SubmitButton = (props) => {
  const theme = useTheme();
  const colors = colorTokens(theme.palette.mode);

  const { buttonText, handleEdit } = props;

  return (
    <Button
      variant="outlined"
      color={colors.primary[400]}
      onClick={() => {
        handleEdit();
      }}
    >
      {buttonText}
    </Button>
  );
};

export { SubmitButton };
