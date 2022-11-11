import React from "react";

import { useNavigate } from "react-router-dom";

import AtomBox from "../atoms/AtomBox";
import AtomButton from "../atoms/AtomButton";

import dataDating from "../../routes/dataDating";

const MenuBar = () => {
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
            marginY: theme.spacing(2),
            color: theme.typography.color,
            "&:hover": {
              color: theme.palette.primary.main,
            },
            display: "block",
            fontSize: theme.spacing(2),
            textAlign: "start",
            lineHeight: theme.spacing(2.6),
            textTransform: theme.typography.textTransform,
          })}
        >
          {page.name}
        </AtomButton>
      ))}
    </AtomBox>
  );
};

export default MenuBar;
