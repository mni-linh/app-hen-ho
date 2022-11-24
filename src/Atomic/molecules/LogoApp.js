import React from "react";

import AtomBox from "../atoms/Box/AtomBox";
import AtomImageLogo from "../atoms/ImageLogo/AtomImageLogo";
import AtomLink from "../atoms/Link/AtomLink";
import AtomTypography from "../atoms/Typography/AtomTypography";

const LogoApp = () => {
  return (
    <div>
      <AtomBox sx={{ display: "flex" }}>
        {/* Icon (màn hình lớn) */}
        <AtomImageLogo
          alt="logo"
          src="/images/logoTinder.png"
          sx={{
            // display: {
            //   xs: "flex",
            //   md: "flex",
            // },
            alignSelf: "center",
          }}
        />
        {/* Chữ tinder (màn hình lớn) */}
        <AtomTypography
          variant="h6"
          noWrap
          component={AtomLink}
          href="/"
          sx={(theme) => ({
            marginRight: theme.spacing(2),
            fontFamily: theme.typography.fontFamily,
            fontWeight: theme.typography.fontWeightBold,
            color: theme.palette.common.white,
            textDecoration: "none",
            fontSize: theme.spacing(5),
            // display: {
            //   xs: "flex",
            //   md: "flex",
            // },
          })}
        >
          tinder
        </AtomTypography>
      </AtomBox>
    </div>
  );
};

export default LogoApp;
