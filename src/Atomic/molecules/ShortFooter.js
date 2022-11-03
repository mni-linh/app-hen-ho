import React from "react";
import AtomGrid from "../atoms/AtomGrid";
import AtomStyleFooter from "../atoms/AtomStyleFooter";
import AtomTypography from "../atoms/AtomTypography";

const ShortFooter = () => {
  return (
    <AtomGrid
      container
      spacing={2}
      justifyContent="space-between"
      sx={{ padding: "16px 16px" }}
    >
      <AtomGrid item sx={{ fontSize: "13px" }}>
        <AtomStyleFooter> Câu Hỏi Thường Gặp</AtomStyleFooter> /
        <AtomStyleFooter> Bí quyết An toàn</AtomStyleFooter> /
        <AtomStyleFooter> Điều khoản</AtomStyleFooter> /
        <AtomStyleFooter> Chính sách Cookie</AtomStyleFooter> /
        <AtomStyleFooter> Cài đặt Quyền Riêng Tư</AtomStyleFooter>
      </AtomGrid>

      <AtomGrid item>
        <AtomTypography sx={{ fontSize: "13px" }}>
          © 2022 Match Group, LLC, mọi quyền đã được bảo lưu.
        </AtomTypography>
      </AtomGrid>
    </AtomGrid>
  );
};

export default ShortFooter;
