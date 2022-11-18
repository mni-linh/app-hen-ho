import React from "react";
import { useTheme, styled, alpha } from "@mui/material/styles";

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
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    // padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  return (
    <>
      {/* <AtomBox
        sx={{
          overflow: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          display: {
            xs: "flex",
            sm: "none",
          },
        }}
      > */}
      {/* // dialog màn hình lớn */}
      <AtomDialog
        onClose={handleClose}
        open={open}
        // fullWidth
        // maxWidth="sm"
        // scroll="paper"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          // width: "100%",
        }}
      >
        {/* <ToolbarDialog /> */}
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
              <SearchIconWrapper>
                <AtomSearchIcon
                  sx={{ color: "#939ba7", position: "absolute" }}
                />
              </SearchIconWrapper>
              <AtomAutocomplete
                id="search-language"
                freeSolo
                options={languageAndSub.map((option) => option.language)}
                renderInput={(params) => (
                  <AtomTextField
                    {...params}
                    placeholder="Tìm kiếm ngôn ngữ..."
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
              <AtomGrid item key={language} xs={3}>
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
                      // variant="body2"
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
      {/* dialog màn hình nhỏ */}
      <AtomDialog
        fullScreen={isMobile}
        onClose={handleClose}
        open={open}
        // fullWidth
        // maxWidth="sm"
        // scroll="paper"
        sx={{
          display: {
            xs: "block",
            md: "none",
          },
          width: "100%",
        }}
      >
        {/* <> */}
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
        <AtomBox>
          {/* <Search> */}
          <AtomToolbar sx={(theme) => ({ marginX: theme.spacing(25) })}>
            <SearchIconWrapper
              sx={(theme) => ({
                paddingTop: theme.spacing(2.5),
                color: theme.palette.text.secondary,
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
                  {/* <AtomListItemText secondary={languages.sub}/> */}
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
