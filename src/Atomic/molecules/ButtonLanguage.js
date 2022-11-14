import React from "react";

import { alpha, styled } from "@mui/material/styles";

import PropTypes from "prop-types";

import AtomBox from "../atoms/AtomBox";
import AtomButton from "../atoms/AtomButton";
import AtomPublicIcon from "../atoms/AtomPublicIcon";
import SimpleDialog from "./SimpleDialog";
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

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const ButtonLanguage = () => {
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
      {/* <AtomTooltip title="Change language"> */}
      {/* <AtomStack direction="row" spacing={2}> */}
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
      {/* </AtomStack> */}
      {/* </AtomTooltip> */}
    </AtomBox>
  );
};

export default ButtonLanguage;
