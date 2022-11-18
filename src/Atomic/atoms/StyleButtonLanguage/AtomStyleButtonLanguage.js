import { darken, styled } from "@mui/material/styles";
import AtomButton from "./AtomButton";
import { grey } from "@mui/material/colors";
const AtomStyleButtonLanguage = styled(AtomButton)(({ theme }) => ({
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: grey[200],
  },
  width: "100%",
  height: theme.spacing(5.5),
  borderRadius: "2.2rem",
  // margin: "0 auto",
  fontSize: theme.spacing(2),
  color: grey[600],
  textTransform: theme.typography.textTransform,
  marginTop: theme.spacing(2),
}));

export default AtomStyleButtonLanguage;
