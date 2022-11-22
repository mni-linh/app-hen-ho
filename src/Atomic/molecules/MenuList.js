import React from "react";

import { useNavigate } from "react-router-dom";

import AtomBox from "../atoms/Box/AtomBox";
import AtomButton from "../atoms/Button/AtomButton";

import dataDating from "../../routes";
import AtomTypography from "../atoms/Typography/AtomTypography";

const MenuList = () => {
  const navigate = useNavigate();
  return (
    <AtomBox
      sx={{
        flexGrow: 1,
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      {dataDating.map((page, index) => (
        <AtomButton
          key={index}
          onClick={() => {
            navigate(`${page.path}`);
          }}
          sx={(theme) => ({
            color: theme.palette.common.white,
            "&:hover": {
              color: theme.palette.action.hover,
            },
            fontSize: theme.spacing(2),
            lineHeight: theme.spacing(2.6),
            textTransform: theme.typography.button.textTransform,
          })}
        >
          {page.name}
        </AtomButton>
      ))}
    </AtomBox>
  );
};

export default MenuList;
