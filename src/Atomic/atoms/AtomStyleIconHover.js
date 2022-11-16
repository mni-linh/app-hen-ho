import { styled } from "@mui/material/styles";
import AtomIconHover from "./AtomIconHover";

const AtomStyleIconHover = styled(AtomIconHover)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(3),
  top: theme.spacing(0),
}));

export default AtomStyleIconHover;
