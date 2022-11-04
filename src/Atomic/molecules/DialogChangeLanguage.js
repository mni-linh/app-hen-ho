import React from "react";
import AtomBox from "../atoms/AtomBox";
import AtomButton from "../atoms/AtomButton";
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
  "English(UK)",
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
    <AtomDialog onClose={handleClose} open={open} maxWidth="md">
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
        sx={(theme) => ({
          textAlign: "center",
          fontWeight: theme.typography.fontWeightBold,
        })}
      >
        {selectedValue}
      </AtomTypography>
      <AtomDivider variant="middle" />

      {/*  */}
      <AtomList>
        <AtomGrid container sx={{ padding: "0 61px" }}>
          {languages.map((language) => (
            <AtomGrid item key={language} xs={3}>
              <AtomListItem
                button
                onClick={() => handleListItemClick(language)}
              >
                <AtomListItemText primary={language} />
              </AtomListItem>
            </AtomGrid>
          ))}
        </AtomGrid>
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
    // <AtomBox sm={{ flexGrow: 0 }}>
    <AtomBox sm={{ flexGrow: 0 }}>
      <AtomTooltip title="Change language">
        <AtomStack direction="row" spacing={2}>
          <AtomButton
            startIcon={<AtomPublicIcon />}
            sx={(theme) => ({
              marginRight: theme.spacing(3),
              padding: theme.spacing(2),
              fontSize: theme.spacing(2),
              color: theme.typography.color,
              textTransform: theme.typography.textTransform,
            })}
            onClick={handleClickOpen}
          >
            {selectedValue}
          </AtomButton>
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

export default DialogChangeLanguage;
