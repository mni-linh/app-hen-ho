import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import AtomTypography from "../atoms/AtomTypography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { style, styled } from "@mui/system";
import AtomBox from "../atoms/AtomBox";
import { grey } from "@mui/material/colors";
const arrExtend = [
  {
    id: 1,
    extend: ["Tính năng cao cấp", "Các Cấp Gói Đăng Ký", "Swipe Night"],
  },
  {
    id: 2,
    extend: ["Tính năng", "Các Cấp "],
  },
];

const listExtend = [
  {
    id: 1,
    text: "Sản phẩm",
    extend: ["Tính năng cao cấp", "Các Cấp Gói Đăng Ký", "Swipe Night"],
  },
  {
    id: 2,
    text: "Tìm hiểu",
    extend: ["Tính năng", "Các Cấp "],
  },
  {
    id: 3,
    text: "An toàn",
  },
  {
    id: 4,
    text: "Hỗ trợ",
  },
  {
    id: 5,
    text: "Tải về",
  },
];
const LinkList = styled("a")(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  fontWeight: theme.typography.fontWeightBold,
  "&:hover": {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
  },
}));
const AccordionStyle = styled(Accordion)(({ theme }) => ({
  backgroundColor: grey[200],
}));
const ExpansionPanel = () => {
  return (
    <AtomBox sx={(theme) => ({ padding: theme.spacing(1) })}>
      {" "}
      {/* {listExtend.map((list, index) => ( */}
      <AccordionStyle variant="outline">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LinkList href="https://tinder.com/vi/feature/swipe">
            Sản phẩm
          </LinkList>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              {/* {arrExtend.map((lst) => () => ( */}
              <ListItemButton href="https://tinder.com/vi/feature/stand-out">
                <ListItemText primary="Tính năng cao cấp" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="https://tinder.com/vi/feature/subscription-tiers">
                <ListItemText primary="Các Cấp Gói Đăng Ký" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="https://tinder.com/vi/swipe-night/season-2">
                <ListItemText primary="Swipe Night" />
              </ListItemButton>
            </ListItem>
            {/* ))} */}
          </List>
        </AccordionDetails>
      </AccordionStyle>
      {/* #2 */}
      <AccordionStyle variant="outline" expanded>
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <LinkList href="https://tinder.com/vi/about">Tìm hiểu</LinkList>
        </AccordionSummary>
      </AccordionStyle>
      {/* 3 */}
      <AccordionStyle variant="outline">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LinkList href="https://policies.tinder.com/safety?lang=vi">
            An toàn
          </LinkList>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              {/* {arrExtend.map((lst) => () => ( */}
              <ListItemButton href="https://policies.tinder.com/community-guidelines?lang=vi">
                <ListItemText primary="Quy tắc Cộng đồng" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="https://policies.tinder.com/safety?lang=vi">
                <ListItemText primary="Bí quyết An toàn" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="https://policies.tinder.com/safety-and-policy?lang=vi">
                <ListItemText primary="An toàn & Chính sách" />
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton href="https://policies.tinder.com/security?lang=vi">
                <ListItemText primary="Bảo Mật" />
              </ListItemButton>
            </ListItem>
            {/* ))} */}
          </List>
        </AccordionDetails>
      </AccordionStyle>
      {/* 4 */}
      <AccordionStyle expanded variant="outline">
        <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
          <LinkList href="https://www.help.tinder.com/hc?utm_source=web">
            Hỗ trợ
          </LinkList>
        </AccordionSummary>
      </AccordionStyle>
      {/* 5 */}
      <AccordionStyle expanded variant="outline">
        <AccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LinkList href="https://tinder.com/vi/download">Tải về</LinkList>
        </AccordionSummary>
      </AccordionStyle>
      {/* ))} */}
    </AtomBox>
  );
};

export default ExpansionPanel;
