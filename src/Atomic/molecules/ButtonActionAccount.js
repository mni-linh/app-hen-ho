import React from "react";

import AtomGrid from "../atoms/Grid/AtomGrid";
import AtomTypography from "../atoms/Typography/AtomTypography";
import ButtonDialogSignIn from "./Dialog/ButtonDialogSignIn";
import ButtonDialogSignUp from "./Dialog/ButtonDialogSignUp";
import InstallAppXs from "./InstallAppXs";

const ButtonActionAccount = () => {
  return (
    <>
      {/* Quẹt phải & Tạo tài khoản */}
      <AtomGrid
        container
        alignItems="center"
        direction="column"
        sx={{
          justifyContent: "center",
          minHeight: "100vh",
          opacity: 0.9,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* Quẹt Phải */}
        <AtomGrid item>
          <AtomTypography
            sx={(theme) => ({
              color: theme.palette.primary.contrastText,
              fontWeight: theme.typography.fontWeightBold,
              margin: "0 auto",
              [theme.breakpoints.up("xs")]: {
                fontSize: theme.spacing(8),
                display: "flex",
                justifyContent: "center",
                fontStyle: "italic",
              },
              [theme.breakpoints.up("md")]: {
                fontSize: theme.spacing(15),
                display: "flex",
                justifyContent: "center",
                fontStyle: "normal",
              },
            })}
          >
            Quẹt Phải
          </AtomTypography>
        </AtomGrid>

        {/* Tạo tài khoản */}
        {/* màn hình lớn */}
        <AtomGrid
          item
          xs={12}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <ButtonDialogSignUp />
        </AtomGrid>
        {/* màn hình nhỏ */}
        {/* Cục đăng ký - đăng nhập */}
        <AtomGrid
          item
          xs={12}
          sx={(theme) => ({
            display: {
              xs: "block",
              md: "none",
            },
            justifyContent: "space-around",
            marginTop: theme.spacing(20),
          })}
        >
          {/* Đăng ký */}
          <AtomGrid sx={(theme) => ({ marginBottom: theme.spacing(2) })}>
            <ButtonDialogSignUp />
          </AtomGrid>
          {/* Đăng nhập */}
          <AtomGrid>
            <ButtonDialogSignIn />
          </AtomGrid>
          {/* cài app */}
          <InstallAppXs />
        </AtomGrid>
      </AtomGrid>
    </>
  );
};

export default ButtonActionAccount;
