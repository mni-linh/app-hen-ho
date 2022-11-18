import { styled } from "@mui/material/styles";
import AtomIconButton from "./AtomIconButton";

const AtomStyleIconHover = styled(AtomIconButton)(({ theme }) => ({
  cursor: "pointer",
  transition: "all 0.2s ease-in-out",
  position: "absolute",
  right: theme.spacing(3),
  top: theme.spacing(0),
  "&:hover": {
    backgroundColor: "transparent",
    color: "#616161",
    transform: "rotate(90deg)",
  },
}));
export default AtomStyleIconHover;
