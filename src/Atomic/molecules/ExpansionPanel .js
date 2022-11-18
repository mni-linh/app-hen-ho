import React, { useState } from "react";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

import AtomBox from "../atoms/Box/AtomBox";
import AtomAccordion from "../atoms/Accordion/AtomAccordion";
import AtomList from "../atoms/List/AtomList";
import AtomListItem from "../atoms/ListItem/AtomListItem";
import AtomListItemText from "../atoms/ListItemText/AtomListItemText";
import AtomListItemButton from "../atoms/ListItemButton/AtomListItemButton";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ExpandMore } from "@mui/icons-material";

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
  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
  };
  return (
    <>
      <AtomBox sx={(theme) => ({ padding: theme.spacing(1) })}>
        {/* #1 */}
        <AccordionStyle
          expanded={expandedPanel === "panel1"}
          onChange={handleAccordionChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <LinkList href="https://tinder.com/vi/about">Tìm hiểu</LinkList>
          </AccordionSummary>

          <AccordionDetails>
            <AtomList>
              <AtomListItem>
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
            </AtomList>
          </AccordionDetails>
        </AccordionStyle>
        {/* #2 */}
        <AccordionStyle expanded onChange={handleAccordionChange("panel2")}>
          <AccordionSummary>
            <LinkList href="https://tinder.com/vi/about">Sản phẩm</LinkList>
          </AccordionSummary>
        </AccordionStyle>
        {/* #3 */}
        <AccordionStyle
          expanded={expandedPanel === "panel3"}
          onChange={handleAccordionChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMore />}>
            <LinkList href="https://policies.tinder.com/safety?lang=vi">
              An toàn
            </LinkList>
          </AccordionSummary>

          <AccordionDetails>
            <AtomList>
              <AtomListItem>
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
            </AtomList>
          </AccordionDetails>
        </AccordionStyle>
        {/* #4 */}
        <AccordionStyle expanded onChange={handleAccordionChange("panel4")}>
          <AccordionSummary>
            <LinkList href="https://www.help.tinder.com/hc?utm_source=web">
              Hỗ trợ
            </LinkList>
          </AccordionSummary>
        </AccordionStyle>
        {/* #5 */}
        <AccordionStyle expanded onChange={handleAccordionChange("panel5")}>
          <AccordionSummary>
            <LinkList href="https://tinder.com/vi/download">Tải về</LinkList>
          </AccordionSummary>
        </AccordionStyle>
      </AtomBox>
    </>
  );
};

export default ExpansionPanel;
