import { styled } from "@mui/material/styles";
import AtomIconHover from "../IconHover/AtomIconHover";

const AtomStyleIconHover = styled(AtomIconHover)(({ theme }) => ({
  position: "absolute",
  right: theme.spacing(3),
  top: theme.spacing(1),
}));

export default AtomStyleIconHover;
