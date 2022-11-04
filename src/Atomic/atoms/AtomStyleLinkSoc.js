import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import AtomLink from "./AtomLink";

const AtomStyleLinkSoc = styled(AtomLink)(({ theme }) => ({
  color: grey[800],
  "&:hover": {
    color: theme.palette.secondary.main,
  },
  
}));

export default AtomStyleLinkSoc;
