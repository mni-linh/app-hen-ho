import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  Tooltip,
  Dialog,
  DialogTitle,
  List,
  ListItemText,
  ListItem,
  Divider,
} from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

import WhatshotIcon from "@mui/icons-material/Whatshot";
import PublicIcon from "@mui/icons-material/Public";
import dataDating from "../routes/dataDating";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";

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
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Chọn một ngôn ngữ</DialogTitle>
      <Typography
        sx={{
          paddingLeft: 3,
        }}
      >
        {selectedValue}
      </Typography>
      <Divider variant="middle" />

      <List>
        {languages.map((language) => (
          <ListItem
            button
            onClick={() => handleListItemClick(language)}
            key={language}
          >
            <Button>
              <ListItemText primary={language} />
            </Button>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(languages[1]);

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WhatshotIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              marginRight: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              // textTransform: "lowercase",
            }}
          >
            tinder
          </Typography>
          {/* <WhatshotIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {dataDating.map((page, index) => (
              <Button
                key={index}
                onClick={() => {
                  navigate(`${page.path}`);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open language">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  startIcon={<PublicIcon />}
                  sx={{
                    display: {
                      xs: "none",
                      md: "flex",
                    },
                    mr: 1,
                    fontSize: 15,
                    color: "white",
                    textTransform: "capitalize",
                  }}
                  onClick={handleClickOpen}
                >
                  {selectedValue}
                </Button>
                <SimpleDialog
                  selectedValue={selectedValue}
                  open={open}
                  onClose={handleClose}
                />
              </Stack>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Home;
