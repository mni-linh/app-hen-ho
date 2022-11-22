import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import AtomLink from "../Link/AtomLink";

const AtomStyleLinkSoc = styled(AtomLink)(({ theme }) => ({
  color: theme.palette.common.icon,
  "&:hover": {
    color: theme.palette.action.hover,
  },
}));

export default AtomStyleLinkSoc;
