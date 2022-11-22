import { styled } from "@mui/system";
import React from "react";
import AtomContainer from "../atoms/Container/AtomContainer";
import AtomGrid from "../atoms/Grid/AtomGrid";
import AtomLink from "../atoms/Link/AtomLink";
import AtomTypography from "../atoms/Typography/AtomTypography";

const StyleTypographyContent = styled(AtomTypography)(({ theme }) => ({
  color: theme.palette.common.title,
  "&:hover": {
    color: theme.palette.action.hover,
  },
}));
const ShortFooter = () => {
  return (
    <>
      {/* <AtomContainer
        maxWidth="xl"
        sx={(theme) => ({
          padding: theme.spacing(2),
        })}
      > */}
      <AtomGrid
        container
        justifyContent="space-between"
        sx={(theme) => ({
          padding: theme.spacing(2),
        })}
      >
        {/* short foot */}
        <AtomGrid
          item
          sx={(theme) => ({
            // chỉnh được map rồi thì breackpoint lại footer
          })}
        >
          <AtomLink
            underline="none"
            href="https://tinder.com/vi/faq"
            // sx={(theme) => ({
            //   color: theme.palette.common.black,
            // })}
          >
            <StyleTypographyContent variant="caption">
              Câu Hỏi Thường Gặp /{" "}
            </StyleTypographyContent>
          </AtomLink>{" "}
          <AtomLink
            underline="none"
            href="https://policies.tinder.com/safety?lang=vi"
          >
            <StyleTypographyContent variant="caption">
              Bí quyết An toàn /{" "}
            </StyleTypographyContent>
          </AtomLink>{" "}
          <AtomLink
            underline="none"
            variant="caption"
            href="https://policies.tinder.com/terms?lang=vi"
          >
            <StyleTypographyContent variant="caption">
              Điều khoản /{" "}
            </StyleTypographyContent>
          </AtomLink>{" "}
          <AtomLink
            underline="none"
            variant="caption"
            href="https://policies.tinder.com/cookie-policy?lang=vi"
          >
            <StyleTypographyContent variant="caption">
              Chính sách Cookie /{" "}
            </StyleTypographyContent>
          </AtomLink>{" "}
          <AtomLink
            underline="none"
            variant="caption"
            href="https://tinder.com/vi"
          >
            <StyleTypographyContent variant="caption">
              Cài đặt Quyền Riêng Tư
            </StyleTypographyContent>
          </AtomLink>
        </AtomGrid>
        {/* bản quyển */}
        <AtomGrid item>
          <StyleTypographyContent variant="caption">
            © 2022 Match Group, LLC, mọi quyền đã được bảo lưu.
          </StyleTypographyContent>
        </AtomGrid>
      </AtomGrid>
      {/* </AtomContainer> */}
    </>
  );
};

export default ShortFooter;
