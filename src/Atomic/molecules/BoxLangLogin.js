import React from "react";
import AtomBox from "../atoms/AtomBox";
import DialogSignIn from "./DialogSignIn";
import ButtonLanguage from "./ButtonLanguage";
const BoxLangLogin = () => {
  return (
    <AtomBox
      sx={{
        justifyContent: "space-around",
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      {/* Button - Dialog language */}
      <ButtonLanguage />
      {/* Button - Dialog Login */}
      <DialogSignIn />
    </AtomBox>
  );
};

export default BoxLangLogin;
