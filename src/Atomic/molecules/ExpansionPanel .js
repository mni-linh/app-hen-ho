import React from "react";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

import AtomBox from "../atoms/AtomBox";
import AtomExpandMoreIcon from "../atoms/AtomExpandMoreIcon";
import AtomAccordion from "../atoms/AtomAccordion";
import AtomAccordionSummary from "../atoms/AtomAccordionSummary";
import AtomAccordionDetails from "../atoms/AtomAccordionDetails";
import AtomList from "../atoms/AtomList";
import AtomListItem from "../atoms/AtomListItem";
import AtomListItemText from "../atoms/AtomListItemText";
import AtomListItemButton from "../atoms/AtomListItemButton";

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
// Style cho LinkList thay thế vai trò <a>
const LinkList = styled("a")(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: "none",
  fontWeight: theme.typography.fontWeightBold,
  "&:hover": {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
  },
}));
// style Accordion
const AccordionStyle = styled(AtomAccordion)(({ theme }) => ({
  backgroundColor: grey[200],
}));

const ExpansionPanel = () => {
  return (
    <AtomBox sx={(theme) => ({ padding: theme.spacing(1) })}>
      {" "}
      {/* {listExtend.map((list, index) => ( */}
      <AccordionStyle variant="outline">
        <AtomAccordionSummary
          expandIcon={<AtomExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LinkList href="https://tinder.com/vi/feature/swipe">
            Sản phẩm
          </LinkList>
        </AtomAccordionSummary>
        <AtomAccordionDetails>
          <AtomList>
            <AtomListItem>
              {/* {arrExtend.map((lst) => () => ( */}
              <AtomListItemButton href="https://tinder.com/vi/feature/stand-out">
                <AtomListItemText primary="Tính năng cao cấp" />
              </AtomListItemButton>
            </AtomListItem>
            <AtomListItem>
              <AtomListItemButton href="https://tinder.com/vi/feature/subscription-tiers">
                <AtomListItemText primary="Các Cấp Gói Đăng Ký" />
              </AtomListItemButton>
            </AtomListItem>
            <AtomListItem>
              <AtomListItemButton href="https://tinder.com/vi/swipe-night/season-2">
                <AtomListItemText primary="Swipe Night" />
              </AtomListItemButton>
            </AtomListItem>
            {/* ))} */}
          </AtomList>
        </AtomAccordionDetails>
      </AccordionStyle>
      {/* #2 */}
      <AccordionStyle variant="outline" expanded>
        <AtomAccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LinkList href="https://tinder.com/vi/about">Tìm hiểu</LinkList>
        </AtomAccordionSummary>
      </AccordionStyle>
      {/* 3 */}
      <AccordionStyle variant="outline">
        <AtomAccordionSummary
          expandIcon={<AtomExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LinkList href="https://policies.tinder.com/safety?lang=vi">
            An toàn
          </LinkList>
        </AtomAccordionSummary>
        <AtomAccordionDetails>
          <AtomList>
            <AtomListItem>
              {/* {arrExtend.map((lst) => () => ( */}
              <AtomListItemButton href="https://policies.tinder.com/community-guidelines?lang=vi">
                <AtomListItemText primary="Quy tắc Cộng đồng" />
              </AtomListItemButton>
            </AtomListItem>
            <AtomListItem>
              <AtomListItemButton href="https://policies.tinder.com/safety?lang=vi">
                <AtomListItemText primary="Bí quyết An toàn" />
              </AtomListItemButton>
            </AtomListItem>
            <AtomListItem>
              <AtomListItemButton href="https://policies.tinder.com/safety-and-policy?lang=vi">
                <AtomListItemText primary="An toàn & Chính sách" />
              </AtomListItemButton>
            </AtomListItem>
            <AtomListItem>
              <AtomListItemButton href="https://policies.tinder.com/security?lang=vi">
                <AtomListItemText primary="Bảo Mật" />
              </AtomListItemButton>
            </AtomListItem>
            {/* ))} */}
          </AtomList>
        </AtomAccordionDetails>
      </AccordionStyle>
      {/* 4 */}
      <AccordionStyle expanded variant="outline">
        <AtomAccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LinkList href="https://www.help.tinder.com/hc?utm_source=web">
            Hỗ trợ
          </LinkList>
        </AtomAccordionSummary>
      </AccordionStyle>
      {/* 5 */}
      <AccordionStyle expanded variant="outline">
        <AtomAccordionSummary
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <LinkList href="https://tinder.com/vi/download">Tải về</LinkList>
        </AtomAccordionSummary>
      </AccordionStyle>
      {/* ))} */}
    </AtomBox>
  );
};

export default ExpansionPanel;
