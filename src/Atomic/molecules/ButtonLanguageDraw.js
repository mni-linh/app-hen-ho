import React from "react";
import AtomBox from "../atoms/AtomBox";
import AtomDialog from "../atoms/AtomDialog";
import AtomDivider from "../atoms/AtomDivider";
import AtomHighlightOffIcon from "../atoms/AtomHighlightOffIcon";
import AtomList from "../atoms/AtomList";
import AtomListItem from "../atoms/AtomListItem";
import AtomListItemText from "../atoms/AtomListItemText";
import AtomPublicIcon from "../atoms/AtomPublicIcon";
import AtomStack from "../atoms/AtomStack";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomTooltip from "../atoms/AtomTooltip";
import AtomTypography from "../atoms/AtomTypography";
import AtomWhatshotIcon from "../atoms/AtomWhatshotIcon";
import PropTypes from "prop-types";
import AtomGrid from "../atoms/AtomGrid";
import AtomStyleIconHover from "../atoms/AtomStyleIconHover";
import AtomStyleDialogTitle from "../atoms/AtomStyleDialogTitle";
import AtomAutocomplete from "../atoms/AtomAutocomplete";
import AtomTextField from "../atoms/AtomTextField";
import AtomSearchIcon from "../atoms/AtomSearchIcon";
import AtomStyleButtonLanguage from "../atoms/AtomStyleButtonLanguage";
import { useTheme } from "@mui/material/styles";
import { alpha, styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import languageAndSub from "../../CDN/languages";

const SearchIconWrapper = styled("div")(({ theme }) => ({
  // padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));
function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    // <AtomBox
    //   sx={{
    //     overflow: "auto",
    //     scrollbarWidth: "none",
    //     msOverflowStyle: "none",
    //     display: {
    //         xs: "flex",
    //         sm: "none",
    //       },
    //   }}
    // >
    <AtomDialog
      fullScreen={isMobile}
      onClose={handleClose}
      open={open}
      // maxWidth="md"
      scroll="paper"
      sx={{
        display: {
          xs: "block",
          md: "none",
        },
      }}
    >
      <AtomToolbar>
        <AtomGrid container justifyContent="center">
          <AtomGrid item>
            <AtomWhatshotIcon
              fontSize="large"
              sx={(theme) => ({ color: theme.palette.primary.main })}
            />
          </AtomGrid>
        </AtomGrid>

        <AtomStyleIconHover size="large" edge="end" onClick={handleClose}>
          <AtomHighlightOffIcon fontSize="large" />
        </AtomStyleIconHover>
      </AtomToolbar>

      <AtomStyleDialogTitle
        sx={(theme) => ({
          fontSize: theme.spacing(2),
        })}
      >
        Chọn một ngôn ngữ
      </AtomStyleDialogTitle>
      <AtomTypography
        align="center"
        sx={(theme) => ({
          fontWeight: theme.typography.fontWeightBold,
        })}
      >
        {selectedValue}
      </AtomTypography>
      <AtomBox
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {/* <Search> */}
        <AtomToolbar sx={(theme) => ({ marginX: theme.spacing(25) })}>
          <Search>
            <SearchIconWrapper
              sx={(theme) => ({
                paddingTop: theme.spacing(2.5),
                color: theme.palette.text.secondary,
              })}
            >
              <AtomSearchIcon sx={{ color: "#939ba7", position: "absolute" }} />
            </SearchIconWrapper>

            <AtomAutocomplete
              id="search-language"
              freeSolo
              options={languageAndSub.map((option) => option.language)}
              renderInput={(params) => (
                <AtomTextField
                  {...params}
                  label="Tìm kiếm..."
                  variant="standard"
                />
              )}
              sx={(theme) => ({
                paddingLeft: theme.spacing(4),
                width: theme.spacing(50),
                alignItems: "center",
              })}
            />
          </Search>
          <AtomBox sx={{ flexGrow: 1 }} />
        </AtomToolbar>
        {/* </Search> */}
      </AtomBox>
      <AtomDivider variant="middle" />

      {/*  */}
      <AtomList>
        <AtomGrid
          container
          sx={(theme) => ({
            paddingY: theme.spacing(0),
            paddingX: theme.spacing(2),
          })}
        >
          {languageAndSub.map((languages, language) => (
            <AtomGrid item key={language} xs={6} sm={3}>
              <AtomListItem
                button
                onClick={() => handleListItemClick(languages.language)}
                sx={(theme) => ({
                  marginY: theme.spacing(1),
                  borderRadius: theme.spacing(2),
                })}
              >
                <AtomListItemText
                  // primary={languages.language}
                  // secondary={languages.sub}
                  sx={(theme) => ({
                    fontWeight: theme.typography.fontWeightBold,
                  })}
                >
                  <AtomTypography
                    sx={(theme) => ({
                      color: theme.palette.text.primary,
                      fontSize: theme.spacing(2),
                    })}
                  >
                    {languages.language}
                  </AtomTypography>
                  <AtomTypography
                    variant="body2"
                    sx={(theme) => ({
                      fontSize: theme.spacing(1.5),
                      color: theme.palette.text.secondary,
                    })}
                  >
                    {languages.sub}
                  </AtomTypography>
                </AtomListItemText>
                {/* <AtomListItemText secondary={languages.sub}/> */}
              </AtomListItem>
            </AtomGrid>
          ))}
        </AtomGrid>
      </AtomList>
    </AtomDialog>
    // </AtomBox>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const ButtonLanguageDraw = () => {
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

  return (
    // <AtomBox sm={{ flexGrow: 0 }}>
    <AtomBox
      sx={{
        flexGrow: 0,
        alignSelf: "center",
      }}
    >
      <AtomTooltip title="Change language">
        <AtomStack direction="row">
          <AtomStyleButtonLanguage
            startIcon={<AtomPublicIcon />}
            onClick={handleClickOpen}
          >
            {selectedValue}
          </AtomStyleButtonLanguage>
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
        </AtomStack>
      </AtomTooltip>
    </AtomBox>
  );
};

export default ButtonLanguageDraw;
