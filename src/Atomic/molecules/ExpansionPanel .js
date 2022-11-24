import React, { useState } from "react";
import { styled } from "@mui/system";

import AtomBox from "../atoms/Box/AtomBox";
import AtomAccordion from "../atoms/Accordion/AtomAccordion";
import AtomList from "../atoms/List/AtomList";
import AtomListItem from "../atoms/ListItem/AtomListItem";
import AtomListItemText from "../atoms/ListItemText/AtomListItemText";
import AtomListItemButton from "../atoms/ListItemButton/AtomListItemButton";
import AtomAccordionDetails from "../atoms/AccordionDetails/AtomAccordionDetails";
import AtomAccordionSummary from "../atoms/AccordionSummary/AtomAccordionSummary";
import AtomTypography from "../atoms/Typography/AtomTypography";
import AtomExpandMoreIcon from "../atoms/ExpandMoreIcon/AtomExpandMoreIcon";

import menu from "../../CDN/menu";
import itemMenu1 from "../../CDN/itemMenu1";
import itemMenu2 from "../../CDN/itemMenu2";

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
// style Typography
const StyleTypographyContent = styled(AtomTypography)(({ theme }) => ({
  color: theme.palette.common.titleDraw,
  fontWeight: theme.typography.fontWeightBold,
  "&:hover": {
    color: theme.palette.action.hover,
  },
}));
// style ListItemButton
const StyleAtomListItemButton = styled(AtomListItemButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.action.hover,
  },
}));
// style AccordionSummary
const StyleAccordionSummary = styled(AtomAccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.background.row,
  "&:hover": {
    color: theme.palette.action.hover,
  },
}));

const ExpansionPanel = () => {
  const [expandedPanel, setExpandedPanel] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    // console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
  };
  // const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      {menu.map((item) => (
        <AtomBox key={item.id} sx={(theme) => ({ padding: theme.spacing(1) })}>
          {/* câu điều kiện để xác định panel có dropdown hay là không*/}
          {item.expand === "yes" ? (
            <AccordionStyle
              elevation={0}
              expanded={expandedPanel === item.id}
              onChange={handleAccordionChange(item.id)}
            >
              <StyleAccordionSummary expandIcon={<AtomExpandMoreIcon />}>
                <LinkList href={item.linkName}>
                  <StyleTypographyContent>{item.name}</StyleTypographyContent>
                </LinkList>
              </StyleAccordionSummary>

              <AtomAccordionDetails>
                {/* câu điều kiện để xác định panel nào thì hiển thị nhưng list item nào */}
                {item.numList === "1" ? (
                  <AtomList>
                    {itemMenu1.map((i) => (
                      <AtomListItem key={i.id}>
                        <StyleAtomListItemButton href={i.itemTitle.itemLink}>
                          <AtomListItemText primary={i.itemTitle.itemName} />
                        </StyleAtomListItemButton>
                      </AtomListItem>
                    ))}
                  </AtomList>
                ) : (
                  <AtomList>
                    {itemMenu2.map((idx) => (
                      <AtomListItem key={idx.id}>
                        <StyleAtomListItemButton href={idx.itemTitle.itemLink}>
                          <AtomListItemText primary={idx.itemTitle.itemName} />
                        </StyleAtomListItemButton>
                      </AtomListItem>
                    ))}
                  </AtomList>
                )}
              </AtomAccordionDetails>
            </AccordionStyle>
          ) : (
            <AccordionStyle elevation={0} expanded={expandedPanel === item.id}>
              <StyleAccordionSummary>
                <LinkList href={item.linkName}>
                  <StyleTypographyContent>{item.name}</StyleTypographyContent>
                </LinkList>
              </StyleAccordionSummary>
            </AccordionStyle>
          )}
        </AtomBox>
      ))}
    </>
  );
};

export default ExpansionPanel;
