import React from "react";
import AtomBox from "../atoms/AtomBox";
import AtomButton from "../atoms/AtomButton";
import AtomDialog from "../atoms/AtomDialog";
import AtomDialogTitle from "../atoms/AtomDialogTitle";
import AtomDivider from "../atoms/AtomDivider";
import AtomHighlightOffIcon from "../atoms/AtomHighlightOffIcon";
import AtomIconButton from "../atoms/AtomIconButton";
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
const languages = [
  "English (US)",
  "Tiếng Việt",
  "Afrikaans",
  "العربية",
  "Azeri",
  "Български",
  "বাংলা",
  "Boanski",
  "Català",
  "Čeština",
  "Dansk",
  "Deutsch",
  "Ελληνικά",
  "English(Australia)",
  "English(United Kingdom)",
  "Español",
  "Español(Argentina)",
  "Español(España)",
  "Eesti keel",
  "Euskera",
  "Suomi",
  "Français (France)",
  "Français (Canada)",
  "Galego",
  "עברית",
  "हिन्दी",
  "Hrvatski",
  "Magyar",
  "Bahasa Indonesia",
  "Italiano",
  "日本語",
  "ქართული ენა",
  "қазақ тілі",
  "ខ្មែរ",
  "한국어",
  "Lietuvių kalba",
  "Latviešu valoda",
  "Македонски јазик",
  "Bahasa Melayu",
  "Norsk",
  "Nederlands",
  "Polski",
  "Português (Brasil)",
  "Português (Portugal)",
  "Română",
  "Русский",
  "Slovenčina",
  "Slovenščina",
  "Srpski",
  "Svenska",
  "தமிழ்",
  "తెలుగు",
  "ภาษาไทย",
  "Türkçe",
  "Українська",
  "Filipino",
  "中文 (简体)",
  "中文 (台灣)",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <AtomDialog onClose={handleClose} open={open}>
      {/* <> */}
      <AtomToolbar>
        <AtomWhatshotIcon
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            marginRight: 1,
            paddingLeft: 10,
            paddingRight: 10,
            color: "red",
            textAlign: "center",
          }}
        />
        <AtomIconButton edge="end" onClick={handleClose}>
          <AtomHighlightOffIcon />
        </AtomIconButton>
      </AtomToolbar>

      <AtomDialogTitle>Chọn một ngôn ngữ</AtomDialogTitle>
      <AtomTypography
        sx={{
          paddingLeft: 3,
        }}
      >
        {selectedValue}
      </AtomTypography>
      <AtomDivider variant="middle" />
      {/*  */}
      <AtomList>
        {languages.map((language) => (
          <AtomListItem
            button
            onClick={() => handleListItemClick(language)}
            key={language}
          >
            <AtomStack direction="row" spacing={2}>
              <AtomButton
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#424242",
                  textTransform: "capitalize",
                }}
              >
                <AtomListItemText primary={language} />
              </AtomButton>
            </AtomStack>
          </AtomListItem>
        ))}
      </AtomList>
    </AtomDialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const DialogChangeLanguage = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(languages[1]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <AtomBox sm={{ flexGrow: 0 }}>
      <AtomTooltip title="Change language">
        <AtomStack direction="row" spacing={2}>
          <AtomButton
            variant="outlined"
            startIcon={<AtomPublicIcon />}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              marginRight: 1,
              fontSize: 15,
              color: "white",
              textTransform: "capitalize",
            }}
            onClick={handleClickOpen}
          >
            {selectedValue}
          </AtomButton>
          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
            sx={{
              textTransform: "capitalize",
            }}
          ></SimpleDialog>
        </AtomStack>
      </AtomTooltip>
    </AtomBox>
  );
};

export default DialogChangeLanguage;
