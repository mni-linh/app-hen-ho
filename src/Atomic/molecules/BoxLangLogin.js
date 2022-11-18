import React from "react";
import AtomBox from "../atoms/Box/AtomBox";
import ButtonDialogSignIn from "./Dialog/ButtonDialogSignIn";
import ButtonDialogLanguage from "./Dialog/ButtonDialogLanguage";

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
      {/* Dialog language */}
      <ButtonDialogLanguage />
      {/* Button Login */}
      <ButtonDialogSignIn />
    </AtomBox>
  );
};

export default BoxLangLogin;
