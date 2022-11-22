import React, { useState } from "react";
import { styled } from "@mui/system";
import { grey } from "@mui/material/colors";

import AtomBox from "../atoms/Box/AtomBox";
import AtomAccordion from "../atoms/Accordion/AtomAccordion";
import AtomList from "../atoms/List/AtomList";
import AtomListItem from "../atoms/ListItem/AtomListItem";
import AtomListItemText from "../atoms/ListItemText/AtomListItemText";
import AtomListItemButton from "../atoms/ListItemButton/AtomListItemButton";

import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { ExpandMore } from "@mui/icons-material";
import menu from "../../CDN/menu";
import itemMenu from "../../CDN/itemMenu";
import AtomTypography from "../atoms/Typography/AtomTypography";

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
  backgroundColor: theme.palette.background.paper,
}));
const StyleTypographyContent = styled(AtomTypography)(({ theme }) => ({
  color: theme.palette.common.titleDraw,
  fontWeight: theme.typography.fontWeightBold,
  "&:hover": {
    color: theme.palette.action.hover,
  },
}));
const StyleAtomListItemButton = styled(AtomListItemButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.action.hover,
  },
}));
const StyleAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.background.row,
  "&:hover": {
    color: theme.palette.action.hover,
  },
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
          elevation={0}
          expanded={expandedPanel === "panel1"}
          onChange={handleAccordionChange("panel1")}
        >
          <StyleAccordionSummary expandIcon={<ExpandMore />}>
            <LinkList href="https://tinder.com/vi/about">
              <StyleTypographyContent>Tìm hiểu</StyleTypographyContent>
            </LinkList>
          </StyleAccordionSummary>

          <AccordionDetails>
            <AtomList>
              <AtomListItem>
                <StyleAtomListItemButton href="https://tinder.com/vi/feature/stand-out">
                  <AtomListItemText primary="Tính năng cao cấp" />
                </StyleAtomListItemButton>
              </AtomListItem>
              <AtomListItem>
                <StyleAtomListItemButton href="https://tinder.com/vi/feature/subscription-tiers">
                  <AtomListItemText primary="Các Cấp Gói Đăng Ký" />
                </StyleAtomListItemButton>
              </AtomListItem>
              <AtomListItem>
                <StyleAtomListItemButton href="https://tinder.com/vi/swipe-night/season-2">
                  <AtomListItemText primary="Swipe Night" />
                </StyleAtomListItemButton>
              </AtomListItem>
            </AtomList>
          </AccordionDetails>
        </AccordionStyle>
        {/* #2 */}
        <AccordionStyle
          elevation={0}
          expanded
          onChange={handleAccordionChange("panel2")}
        >
          <StyleAccordionSummary>
            <LinkList href="https://tinder.com/vi/about">
              <StyleTypographyContent>Sản phẩm</StyleTypographyContent>
            </LinkList>
          </StyleAccordionSummary>
        </AccordionStyle>
        {/* #3 */}
        <AccordionStyle
          elevation={0}
          expanded={expandedPanel === "panel3"}
          onChange={handleAccordionChange("panel3")}
        >
          <StyleAccordionSummary expandIcon={<ExpandMore />}>
            <LinkList href="https://policies.tinder.com/safety?lang=vi">
              <StyleTypographyContent>An toàn</StyleTypographyContent>
            </LinkList>
          </StyleAccordionSummary>

          <AccordionDetails>
            <AtomList>
              <AtomListItem>
                <StyleAtomListItemButton href="https://policies.tinder.com/community-guidelines?lang=vi">
                  <AtomListItemText primary="Quy tắc Cộng đồng" />
                </StyleAtomListItemButton>
              </AtomListItem>
              <AtomListItem>
                <StyleAtomListItemButton href="https://policies.tinder.com/safety?lang=vi">
                  <AtomListItemText primary="Bí quyết An toàn" />
                </StyleAtomListItemButton>
              </AtomListItem>
              <AtomListItem>
                <StyleAtomListItemButton href="https://policies.tinder.com/safety-and-policy?lang=vi">
                  <AtomListItemText primary="An toàn & Chính sách" />
                </StyleAtomListItemButton>
              </AtomListItem>
              <AtomListItem>
                <StyleAtomListItemButton href="https://policies.tinder.com/security?lang=vi">
                  <AtomListItemText primary="Bảo Mật" />
                </StyleAtomListItemButton>
              </AtomListItem>
            </AtomList>
          </AccordionDetails>
        </AccordionStyle>
        {/* #4 */}
        <AccordionStyle
          elevation={0}
          expanded
          onChange={handleAccordionChange("panel4")}
        >
          <StyleAccordionSummary>
            <LinkList href="https://www.help.tinder.com/hc?utm_source=web">
              <StyleTypographyContent>Hỗ trợ</StyleTypographyContent>
            </LinkList>
          </StyleAccordionSummary>
        </AccordionStyle>
        {/* #5 */}
        <AccordionStyle
          elevation={0}
          expanded
          onChange={handleAccordionChange("panel5")}
        >
          <StyleAccordionSummary>
            <LinkList href="https://tinder.com/vi/download">
              {" "}
              <StyleTypographyContent>Tải về </StyleTypographyContent>
            </LinkList>
          </StyleAccordionSummary>
        </AccordionStyle>
      </AtomBox>
    </>
  );
};

export default ExpansionPanel;
