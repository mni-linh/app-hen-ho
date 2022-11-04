import { darken, styled } from "@mui/material/styles";
import AtomButton from "./AtomButton";

const AtomStyledButton = styled(AtomButton)(({ theme }) => ({
  textTransform: "capitalize",
  backgroundImage:
    "linear-gradient(212deg, rgba(253,38,122,1) 0%, rgba(255,96,54,1) 69%, rgba(255,68,88,1) 100%)",
  "&:hover": {
    background: `linear-gradient(212deg, ${darken(
      "rgba(253, 38, 122, 1)",
      0.2
    )} 0%, ${darken("rgba(255, 96, 54, 1)", 0.2)} 69%, ${darken(
      "rgba(255, 68, 88, 1)",
      0.2
    )} 100%)`,
  },
  width: theme.spacing(33),
  height: theme.spacing(5.5),
  borderRadius: "2.2rem",
  margin: "0 auto",
}));

export default AtomStyledButton;
