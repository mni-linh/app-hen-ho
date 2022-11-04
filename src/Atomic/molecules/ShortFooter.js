import React from "react";
import AtomContainer from "../atoms/AtomContainer";
import AtomGrid from "../atoms/AtomGrid";
import AtomStyleFooter from "../atoms/AtomStyleFooter";
import AtomTypography from "../atoms/AtomTypography";

const ShortFooter = () => {
  return (
    <AtomContainer maxWidth="xl">
      <AtomGrid
        container
        spacing={2}
        justifyContent="space-between"
        sx={(theme) => ({
          marginY: theme.spacing(1.8),
        })}
      >
        <AtomGrid item sx={(theme) => ({ fontSize: theme.spacing(1.7) })}>
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

        <AtomGrid item>
          <AtomTypography sx={(theme) => ({ fontSize: theme.spacing(1.7) })}>
            © 2022 Match Group, LLC, mọi quyền đã được bảo lưu.
          </AtomTypography>
        </AtomGrid>
      </AtomGrid>
    </AtomContainer>
  );
};

export default ShortFooter;
