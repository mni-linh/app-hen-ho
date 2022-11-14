import React from "react";

import { useTheme, styled, alpha } from "@mui/material/styles";

import AtomUseMediaQuery from "../atoms/AtomUseMediaQuery";
import AtomDialog from "../atoms/AtomDialog";
import AtomToolbar from "../atoms/AtomToolbar";
import AtomGrid from "../atoms/AtomGrid";
import AtomWhatshotIcon from "../atoms/AtomWhatshotIcon";
import AtomStyleIconHover from "../atoms/AtomStyleIconHover";
import AtomHighlightOffIcon from "../atoms/AtomHighlightOffIcon";
import AtomStyleDialogTitle from "../atoms/AtomStyleDialogTitle";
import AtomTypography from "../atoms/AtomTypography";
import AtomBox from "../atoms/AtomBox";
import AtomSearchIcon from "../atoms/AtomSearchIcon";
import AtomAutocomplete from "../atoms/AtomAutocomplete";
import AtomTextField from "../atoms/AtomTextField";
import AtomDivider from "../atoms/AtomDivider";
import AtomList from "../atoms/AtomList";
import AtomListItem from "../atoms/AtomListItem";
import AtomListItemText from "../atoms/AtomListItemText";

const languageAndSub = [
  {
    language: "English",
    sub: "Tiếng Anh",
  },
  {
    language: "Afrikaans",
    sub: "Tiếng Afrikaans",
  },
  {
    language: "العربية",
    sub: "Tiếng Ả Rập",
  },
  {
    language: "Azeri",
    sub: "Tiếng Azerbaijan",
  },
  {
    language: "Български",
    sub: "Tiếng Bulgaria",
  },
  {
    language: "বাংলা",
    sub: "Tiếng Bangla",
  },
  {
    language: "Bosanski",
    sub: "Tiếng Bosnia",
  },
  {
    language: "Català",
    sub: "Tiếng Catalan",
  },
  {
    language: "Čeština",
    sub: "Tiếng Séc",
  },
  {
    language: "Dansk",
    sub: "Tiếng Đan Mạch",
  },
  {
    language: "Deutsch",
    sub: "Tiếng Đức",
  },
  {
    language: "Ελληνικά",
    sub: "Tiếng Hy Lạp",
  },
  {
    language: "English (Australia)",
    sub: "Tiếng Anh (Úc)",
  },
  {
    language: "English (UK)",
    sub: "Tiếng Anh (Anh)",
  },
  {
    language: "Español",
    sub: "Tiếng Tây Ban Nha",
  },
  {
    language: "Español (Argentina)",
    sub: "Tiếng Tây Ban Nha (Argentina)",
  },
  {
    language: "Español (España)",
    sub: "Tiếng Tây Ban Nha (Tây Ban Nha)",
  },
  {
    language: "Eesti keel",
    sub: "Tiếng Estonia",
  },
  {
    language: "Euskera",
    sub: "Tiếng Basque",
  },
  {
    language: "Suomi",
    sub: "Tiếng Phần Lan",
  },
  {
    language: "Français",
    sub: "Tiếng Pháp",
  },
  {
    language: "Français (Canada)",
    sub: "Tiếng Pháp (Canada)",
  },
  {
    language: "Galego",
    sub: "Tiếng Galician",
  },
  {
    language: "עברית",
    sub: "Tiếng Do Thái",
  },
  {
    language: "हिन्दी",
    sub: "Tiếng Hindi",
  },
  {
    language: "Hrvatski",
    sub: "Tiếng Croatia",
  },
  {
    language: "Magyar",
    sub: "Tiếng Hungary",
  },
  {
    language: "Bahasa Indonesia",
    sub: "Tiếng Indonesia",
  },
  {
    language: "Italiano",
    sub: "Tiếng Ý",
  },
  {
    language: "日本語",
    sub: "Tiếng Nhật",
  },
  {
    language: "ქართული ენა",
    sub: "Tiếng Georgia",
  },
  {
    language: "қазақ тілі",
    sub: "Tiếng Kazakh",
  },
  {
    language: "ខ្មែរ",
    sub: "Tiếng Khmer",
  },
  {
    language: "한국어",
    sub: "Tiếng Hàn",
  },
  {
    language: "Lietuvių",
    sub: "Litva",
  },
  {
    language: "Latviešu",
    sub: "Tiếng Latvia",
  },
  {
    language: "Македонски",
    sub: "Tiếng Macedonia",
  },
  {
    language: "Bahasa Melayu",
    sub: "Tiếng Mã Lai",
  },
  {
    language: "Norsk (bokmål)",
    sub: "Tiếng Na Uy (bokmål)",
  },
  {
    language: "Nederlands",
    sub: "Tiếng Hà Lan",
  },
  {
    language: "Polski",
    sub: "Tiếng Ba Lan",
  },
  {
    language: "Português (Brasil)",
    sub: "Tiếng Bồ Đào Nha (Brasil)",
  },
  {
    language: "Português (Portugal)",
    sub: "Tiếng Bồ Đào Nha (Bồ Đào Nha)",
  },
  {
    language: "Română",
    sub: "Tiếng Rumani",
  },
  {
    language: "Русский",
    sub: "Tiếng Nga",
  },
  {
    language: "Slovenčina",
    sub: "Tiếng Slovak",
  },
  {
    language: "Slovenščina",
    sub: "Tiếng Slovenia",
  },
  {
    language: "Srpski",
    sub: "Tiếng Serbia",
  },
  {
    language: "Svenska",
    sub: "Tiếng Thụy Điển",
  },
  {
    language: "தமிழ்",
    sub: "Tiếng Tamil",
  },
  {
    language: "తెలుగు",
    sub: "Tiếng Telugu",
  },
  {
    language: "ภาษาไทย",
    sub: "Tiếng Thái",
  },
  {
    language: "Filipino",
    sub: "Tiếng Philipin",
  },
  {
    language: "Türkçe",
    sub: "Tieng Thổ Nhĩ Kỳ",
  },
  {
    language: "Українська",
    sub: "Tiếng Ukraina",
  },
  {
    language: "Tiếng Việt",
    sub: "Tiếng Việt",
  },
  {
    language: "中文(简体)",
    sub: "Tiếng Trung (Giản thể)",
  },
  {
    language: "中文 (台灣)",
    sub: "Tiếng Trung (Phồn thể)",
  },
];
const SimpleDialog = (props) => {
  const { onClose, selectedValue, open } = props;
  const theme = useTheme();
  const fullScreen = AtomUseMediaQuery(theme.breakpoints.down("sm"));

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
    // marginRight: theme.spacing(2),
    // marginLeft: 0,
    width: "100%",

    [theme.breakpoints.up("sm")]: {
      // marginLeft: theme.spacing(3),
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
        maxWidth="sm"
        // scroll="paper"
        sx={{
          // overflow: "hidden",
          // overflowY: "scroll",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
            width: " 0 !important",
          },
          // msOverflowStyle: "none",
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

      {/* dialog màn hninhf nhỏ */}
      <AtomDialog
        fullScreen={fullScreen}
        onClose={handleClose}
        open={open}
        maxWidth="sm"
        // scroll="paper"
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
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

export default SimpleDialog;
