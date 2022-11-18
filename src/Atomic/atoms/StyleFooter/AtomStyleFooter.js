import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import AtomLink from "../Link/AtomLink";
const AtomStyleFooter = styled(AtomLink)(({ theme }) => ({
  color: grey[800],
  "&:hover": {
    color: theme.palette.secondary.main,
  },
  textDecoration: "none",
  cursor: "pointer",
}));

export default AtomStyleFooter;
