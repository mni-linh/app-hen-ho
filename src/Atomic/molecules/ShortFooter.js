import React from "react";
import AtomContainer from "../atoms/Container/AtomContainer";
import AtomGrid from "../atoms/Grid/AtomGrid";
import AtomStyleFooter from "../atoms/StyleFooter/AtomStyleFooter";
import AtomTypography from "../atoms/Typography/AtomTypography";

const ShortFooter = () => {
  return (
    <AtomContainer
      maxWidth="xl"
      sx={(theme) => ({
        padding: theme.spacing(2),
      })}
    >
      <AtomGrid container rowSpacing={3} justifyContent="space-between">
        {/* short foot */}
        <AtomGrid
          item
          sx={(theme) => ({
            fontSize: theme.spacing(1.7),
            textAlign: "center",
          })}
        >
          <AtomStyleFooter href="https://tinder.com/vi/faq">
            Câu Hỏi Thường Gặp
          </AtomStyleFooter>{" "}
          /{" "}
          <AtomStyleFooter href="https://policies.tinder.com/safety?lang=vi">
            Bí quyết An toàn
          </AtomStyleFooter>{" "}
          /{" "}
          <AtomStyleFooter href="https://policies.tinder.com/terms?lang=vi">
            Điều khoản
          </AtomStyleFooter>{" "}
          /{" "}
          <AtomStyleFooter href="https://policies.tinder.com/cookie-policy?lang=vi">
            Chính sách Cookie
          </AtomStyleFooter>{" "}
          /{" "}
          <AtomStyleFooter href="https://tinder.com/vi">
            Cài đặt Quyền Riêng Tư
          </AtomStyleFooter>
        </AtomGrid>
        {/* bản quyển */}
        <AtomGrid item>
          <AtomTypography
            sx={(theme) => ({
              fontSize: theme.spacing(1.7),
              textAlign: "center",
            })}
          >
            © 2022 Match Group, LLC, mọi quyền đã được bảo lưu.
          </AtomTypography>
        </AtomGrid>
      </AtomGrid>
    </AtomContainer>
  );
};

export default ShortFooter;
