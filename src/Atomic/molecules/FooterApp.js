import React from "react";
import AtomContainer from "../atoms/AtomContainer";
import AtomGrid from "../atoms/AtomGrid";
import AtomImageApp from "../atoms/AtomImageApp";
import AtomLink from "../atoms/AtomLink";
import AtomTypography from "../atoms/AtomTypography";

const FooterApp = () => {
  return (
    <AtomContainer maxWidth="xl">
      <AtomGrid
        container
        columnSpacing={3}
        sx={(theme) => ({
          marginY: theme.spacing(2.6),
          marginLeft: theme.spacing(0),
        })}
        display="flex"
        justifyContent="flex-start"
      >
        <AtomGrid item sx={{ alignSelf: "center" }}>
          <AtomTypography
            sx={(theme) => ({
              fontWeight: theme.typography.fontWeightBold,
              fontSize: theme.spacing(2.5),
            })}
          >
            TẢI ỨNG DỤNG!
          </AtomTypography>
        </AtomGrid>
        <AtomGrid item>
          <AtomLink href="https://apps.apple.com/us/app/tinder-dating-new-people/id547702041">
            <AtomImageApp alt="android" src="/images/ios.png" />
          </AtomLink>
        </AtomGrid>
        <AtomGrid item>
          <AtomLink href="https://play.google.com/store/apps/details?id=com.tinder&hl=vi">
            <AtomImageApp alt="android" src="/images/android.png" />
          </AtomLink>
        </AtomGrid>
      </AtomGrid>
    </AtomContainer>
  );
};

export default FooterApp;
