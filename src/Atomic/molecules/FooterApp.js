import React from "react";
import AtomContainer from "../atoms/Container/AtomContainer";
import AtomGrid from "../atoms/Grid/AtomGrid";
import AtomImageApp from "../atoms/ImageApp/AtomImageApp";
import AtomLink from "../atoms/Link/AtomLink";
import AtomTypography from "../atoms/Typography/AtomTypography";

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
        <AtomGrid
          item
          sx={{
            alignSelf: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <AtomTypography
            sx={(theme) => ({
              fontWeight: theme.typography.fontWeightBold,
              fontSize: theme.spacing(2.5),
            })}
          >
            TẢI ỨNG DỤNG!
          </AtomTypography>
        </AtomGrid>
        <AtomGrid
          item
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignSelf: "center",
          }}
        >
          <AtomGrid item sx={(theme) => ({ paddingRight: theme.spacing(4) })}>
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
      </AtomGrid>
    </AtomContainer>
  );
};

export default FooterApp;
