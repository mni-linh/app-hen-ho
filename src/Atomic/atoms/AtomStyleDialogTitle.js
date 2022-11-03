import { styled } from "@mui/material/styles";
import AtomDialogTitle from "./AtomDialogTitle";

const AtomStyleDialogTitle = styled(AtomDialogTitle)(({ theme }) => ({
  textAlign: "center",
  textTransform: "upperCase",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.spacing(3),
}));

export default AtomStyleDialogTitle;
