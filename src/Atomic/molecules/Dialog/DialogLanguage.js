import React from "react";
import { useTheme, styled } from "@mui/material/styles";

import { useMediaQuery } from "@mui/material";
import AtomToolbar from "../../atoms/Toolbar/AtomToolbar";
import AtomGrid from "../../atoms/Grid/AtomGrid";
import AtomWhatshotIcon from "../../atoms/WhatshotIcon/AtomWhatshotIcon";
import AtomHighlightOffIcon from "../../atoms/HighlightOffIcon/AtomHighlightOffIcon";
import AtomStyleIconHover from "../../atoms/StyleIconHover/AtomStyleIconHover";
import AtomStyleDialogTitle from "../../atoms/StyleDialogTitle/AtomStyleDialogTitle";
import AtomTypography from "../../atoms/Typography/AtomTypography";
import AtomDialog from "../../atoms/Dialog/AtomDialog";
import AtomBox from "../../atoms/Box/AtomBox";
import AtomSearchIcon from "../../atoms/SearchIcon/AtomSearchIcon";
import AtomAutocomplete from "../../atoms/Autocomplete/AtomAutocomplete";
import AtomTextField from "../../atoms/TextField/AtomTextField";
import AtomList from "../../atoms/List/AtomList";
import AtomDivider from "../../atoms/Divider/AtomDivider";
import AtomListItem from "../../atoms/ListItem/AtomListItem";
import AtomListItemText from "../../atoms/ListItemText/AtomListItemText";
import languageAndSub from "../../../CDN/languages";
import PropTypes from "prop-types";

const DialogLanguage = (props) => {
  const { onClose, selectedValue, open } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClose = () => {
    onClose(selectedValue);
  };
  const handleListItemClick = (value) => {
    onClose(value);
  };
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  return (
    <>
      <AtomDialog
        fullScreen={isMobile}
        onClose={handleClose}
        open={open}
        sx={{
          width: "100%",
        }}
      >
        <AtomToolbar>
          <AtomGrid container justifyContent="center">
            <AtomGrid item>
              <AtomWhatshotIcon
                fontSize="large"
                sx={(theme) => ({ color: theme.palette.common.logo })}
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
            <SearchIconWrapper
              sx={(theme) => ({
                paddingTop: theme.spacing(2.5),
              })}
            >
              <AtomSearchIcon />
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
          </AtomToolbar>
          {/* </Search> */}
        </AtomBox>
        <AtomDivider variant="middle" />
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
                    "&:hover": {
                      backgroundColor: theme.palette.background.itemLang,
                    },
                  })}
                >
                  <AtomListItemText
                    sx={(theme) => ({
                      fontWeight: theme.typography.fontWeightBold,
                    })}
                  >
                    {" "}
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
                </AtomListItem>
              </AtomGrid>
            ))}
          </AtomGrid>
        </AtomList>
      </AtomDialog>
    </>
  );
};

DialogLanguage.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};
export default DialogLanguage;
