import React from 'react'
import AtomBox from '../atoms/AtomBox';
import DialogChangeLanguage from './DialogChangeLanguage';
import DialogSignIn from './DialogSignIn';

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
      <DialogChangeLanguage />
      {/* Button Login */}
      <DialogSignIn />
    </AtomBox>
  );
}

export default BoxLangLogin
