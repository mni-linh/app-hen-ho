import React from "react";
import AtomBox from "../../Atomic/atoms/Box/AtomBox";
import ButtonActionAccount from "../molecules/ButtonActionAccount";

const BanerDating = () => {
  return (
    <div>
      <AtomBox
        sx={{
          background: "rgba(33, 38, 46,0.5)",
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          width: "100%",
          height: "100%",
        }}
      />
      <ButtonActionAccount />

      <AtomBox />
    </div>
  );
};

export default BanerDating;
