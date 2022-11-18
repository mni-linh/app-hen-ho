import React from "react";
import AtomGrid from "../atoms/Grid/AtomGrid";
import AtomImageApp from "../atoms/ImageApp/AtomImageApp";
import AtomLink from "../atoms/Link/AtomLink";
import AtomTypography from "../atoms/Typography/AtomTypography";

const InstallAppXs = () => {
  return (
    <>
      <AtomGrid item sx={{ textAlign: "center" }}>
        <AtomLink href="https://play.google.com/store/apps/details?id=com.tinder&hl=vi">
          <AtomImageApp
            alt="android"
            src="https://tinder.com/static/build/15f26b5d041c0094eaf2766f042945bc.webp"
            sx={(theme) => ({
              width: "100%",
              height: theme.spacing(10),
              objectFit: "contain",
            })}
          />
        </AtomLink>
      </AtomGrid>
      <AtomGrid item sx={{ textAlign: "center" }}>
        <AtomTypography
          sx={(theme) => ({
            color: theme.palette.common.white,
            fontSize: theme.spacing(1.5),
          })}
        >
          Trong hình là người mẫu và chỉ mang tính minh họa
        </AtomTypography>
      </AtomGrid>
    </>
  );
};

export default InstallAppXs;
