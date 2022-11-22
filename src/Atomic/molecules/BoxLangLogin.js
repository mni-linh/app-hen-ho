import React from "react";
import AtomBox from "../atoms/Box/AtomBox";
import ButtonDialogSignIn from "./Dialog/ButtonDialogSignIn";
import ButtonDialogLanguage from "./Dialog/ButtonDialogLanguage";
import AtomButton from "../atoms/Button/AtomButton";
import AtomIconButton from "../atoms/IconButton/AtomIconButton";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const BoxLangLogin = () => {
  const colorMode = React.useContext(ColorModeContext);
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
      {/* <AtomButton variant="outline">
        <AtomIconButton onClick={colorMode.toggleColorMode}>
          mode
        </AtomIconButton>
      </AtomButton> */}
    </AtomBox>
  );
};

export default BoxLangLogin;
