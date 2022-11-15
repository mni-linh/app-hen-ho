import React from "react";
import AtomBox from "../atoms/AtomBox";
import ButtonSignIn from "./ButtonSignIn";
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
      {/* Dialog language */}
      <ButtonLanguage />
      {/* Button Login */}
      <ButtonSignIn />
    </AtomBox>
  );
};

export default BoxLangLogin;
