import React from "react";
import dataDating from "../../routes/dataDating";
import AtomBox from "../atoms/AtomBox";
import AtomButton from "../atoms/AtomButton";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();

  return (
    <AtomBox sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {dataDating.map((page, index) => (
        <AtomButton
          key={index}
          onClick={() => {
            navigate(`${page.path}`);
          }}
          sx={{
            my: 2,
            color: "white",
            display: "block",
            fontSize: "16px",
            textAlign: "start",
            lineHeight: "21px",
            letterSpacing: "normal",
          }}
        >
          {page.name}
        </AtomButton>
      ))}
    </AtomBox>
  );
};

export default MenuBar;
