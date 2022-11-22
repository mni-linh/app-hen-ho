import React from "react";

import AtomButton from "../../atoms/Button/AtomButton";
import AtomPublicIcon from "../../atoms/PublicIcon/AtomPublicIcon";
import AtomUseMediaQuery from "../../atoms/UseMediaQuery/AtomUseMediaQuery";

import DialogLanguage from "../Dialog/DialogLanguage";
import { useTheme } from "@mui/system";
import { grey } from "@mui/material/colors";
import languageAndSub from "../../../CDN/languages";
import { styled } from "@mui/material";

const ButtonDialogLanguage = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(
    languageAndSub[55].language
  );
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const AtomStyleBtnChooseLang = styled(AtomButton)(({ theme }) => ({
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: grey[500],
    },
    width: "55%",
    height: theme.spacing(5.5),
    borderRadius: "2.2rem",
    margin: "0 auto",
    fontSize: theme.spacing(2),
    // color: grey[600],
    textTransform: theme.typography.textTransform,
    marginTop: theme.spacing(2),
    display: isMobile ? "flex" : "none",
  }));
  const theme = useTheme();
  const isComputer = AtomUseMediaQuery(theme.breakpoints.up("sm"));
  const isMobile = AtomUseMediaQuery(theme.breakpoints.down("sm"));
  return (
    // <AtomBox sm={{ flexGrow: 0 }}>
    <>
      {/* <AtomTooltip title="Change language"> */}
      {/* <AtomStack direction="row" spacing={2}> */}
      {/* Màn hình máy tính */}
      <AtomButton
        startIcon={<AtomPublicIcon />}
        sx={(theme) => ({
          marginRight: theme.spacing(3),
          padding: theme.spacing(2),
          fontSize: theme.spacing(2),
          color: theme.palette.common.white,
          [theme.breakpoints.down("md")]: {
            backgroundColor: grey[400],
            borderRadius: theme.spacing(20),
            width: theme.spacing(33),
            margin: "0 auto",
            height: theme.spacing(6),
            "&:hover": {
              backgroundColor: grey[500],
            },
          },
          textTransform: theme.typography.button.textTransform,
          display: isComputer ? "flex" : "none",
        })}
        onClick={handleClickOpen}
      >
        {selectedValue}
      </AtomButton>
      {/* Màn hình mobile */}
      <AtomStyleBtnChooseLang
        startIcon={<AtomPublicIcon />}
        sx={(theme) => ({
          backgroundColor: "white",
          "&:hover": {
            backgroundColor: grey[200],
          },
          width: "55%",
          height: theme.spacing(5.5),
          borderRadius: "2.2rem",
          margin: "0 auto",
          fontSize: theme.spacing(2),
          color: theme.palette.common.white,
          textTransform: theme.typography.textTransform,
          marginTop: theme.spacing(2),
          display: isMobile ? "flex" : "none",
        })}
        onClick={handleClickOpen}
      >
        {selectedValue}
      </AtomStyleBtnChooseLang>
      <DialogLanguage
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};

export default ButtonDialogLanguage;
