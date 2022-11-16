import { grey } from "@mui/material/colors";
import { darken, styled } from "@mui/material/styles";
import AtomButton from "./AtomButton";

const AtomStyleButtonSignIn = styled(AtomButton)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  marginRight: theme.spacing(2),

  backgroundColor: grey[50],
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  color: theme.palette.primary.grey,
  textTransform: theme.typography.textTransform,
  borderRadius: theme.spacing(3),
  width: theme.spacing(19),
  height: theme.spacing(5),
  fontWeight: theme.typography.fontWeightBold,
}));

export default AtomStyleButtonSignIn;
