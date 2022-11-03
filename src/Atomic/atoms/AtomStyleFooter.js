import { styled } from "@mui/material/styles";
import AtomLink from "./AtomLink";
const AtomStyleFooter = styled(AtomLink)({
  color: "#21262e",
  "&:hover": {
    color: "#d6002f",
  },
  textDecoration: "none",
  cursor: "pointer",
});

export default AtomStyleFooter;
