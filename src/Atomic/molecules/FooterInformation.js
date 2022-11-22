import { styled } from "@mui/system";
import React from "react";
import AtomContainer from "../atoms/Container/AtomContainer";
import AtomFacebookIcon from "../atoms/FacebookIcon/AtomFacebookIcon";
import AtomGrid from "../atoms/Grid/AtomGrid";
import AtomInstagramIcon from "../atoms/InstagramIcon/AtomInstagramIcon";

import AtomMusicNoteIcon from "../atoms/MusicNoteIcon/AtomMusicNoteIcon";
import AtomStack from "../atoms/Stack/AtomStack";
import AtomLink from "../atoms/Link/AtomLink";
import AtomStyleLinkSoc from "../atoms/StyleLinkSoc/AtomStyleLinkSoc";
import AtomTwitterIcon from "../atoms/TwitterIcon/AtomTwitterIcon";
import AtomTypography from "../atoms/Typography/AtomTypography";
import AtomYouTubeIcon from "../atoms/YouTubeIcon/AtomYouTubeIcon";

const footer = [
  {
    title: "pháp lý",
    content: (
      <AtomStack
        spacing={1}
        sx={(theme) => ({
          fontSize: theme.spacing(2),
        })}
      >
        <AtomLink href="https://policies.tinder.com/privacy/intl/vi">
          Quyền riêng tư
        </AtomLink>
        <AtomLink href="https://policies.tinder.com/terms/intl/vi">
          Điều khoản
        </AtomLink>
        <AtomLink href="https://policies.tinder.com/cookie-policy?lang=vi">
          Chính sách Cookie
        </AtomLink>
        <AtomLink href="https://policies.tinder.com/intellectual-property?lang=vi">
          Sở hữu trí tuệ
        </AtomLink>
      </AtomStack>
    ),
  },
  {
    title: "nghề nghiệp",
    content: (
      <AtomStack
        spacing={1}
        sx={(theme) => ({
          fontSize: theme.spacing(2),
        })}
      >
        <AtomLink href="https://www.lifeattinder.com/?lang=vi">
          Cổng thông tin Nghề nghiệp
        </AtomLink>
        <AtomLink href="https://medium.com/tinder-engineering?lang=vi">
          Blog Công Nghệ
        </AtomLink>
      </AtomStack>
    ),
  },
  {
    title: "mạng xã hội",
    content: (
      <AtomStack
        direction="row"
        spacing={1}
        sx={(theme) => ({
          fontSize: theme.spacing(2),
        })}
      >
        {/* <AtomLink> */}
        <AtomStyleLinkSoc href="https://www.instagram.com/tinder/">
          <AtomInstagramIcon />
        </AtomStyleLinkSoc>

        {/* </AtomLink> */}

        <AtomStyleLinkSoc href="https://www.instagram.com/tinder/">
          <AtomMusicNoteIcon />
        </AtomStyleLinkSoc>

        <AtomStyleLinkSoc href="https://www.youtube.com/channel/UCnplK_NE54gkEt0VGrUDg1g">
          <AtomYouTubeIcon />
        </AtomStyleLinkSoc>

        <AtomStyleLinkSoc href="https://twitter.com/Tinder">
          <AtomTwitterIcon />
        </AtomStyleLinkSoc>

        <AtomStyleLinkSoc href="https://www.facebook.com/Tinder-Vietnam-106524054422640">
          <AtomFacebookIcon />
        </AtomStyleLinkSoc>
      </AtomStack>
    ),
  },
  {
    title: "",
    content: (
      <AtomStack
        spacing={1}
        sx={(theme) => ({
          fontSize: theme.spacing(2),
        })}
      >
        <AtomLink href="https://tinder.com/vi/faq">Câu Hỏi Thường Gặp</AtomLink>
        <AtomLink href="https://tinder.com/vi/places">Các điểm đến</AtomLink>
        <AtomLink href="https://vn.tinderpressroom.com/?lang=vi">
          Khu Vực Báo Chí
        </AtomLink>
        <AtomLink href="https://policies.tinder.com/contact?lang=vi">
          Liên Hệ
        </AtomLink>
        <AtomLink href="https://policies.tinder.com/contact?lang=vi">
          Mã Khuyến Mãi
        </AtomLink>
      </AtomStack>
    ),
  },
];
const StyleTypographyTitle = styled(AtomTypography)(({ theme }) => ({
  textTransform: "uppercase",
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.spacing(2.5),
  paddingBottom: theme.spacing(1),
}));
const StyleTypographyContent = styled(AtomTypography)(({ theme }) => ({
  fontSize: theme.spacing(2),
  color: theme.palette.common.title,
  "&:hover": {
    color: theme.palette.action.hover,
  },
}));
const FooterInformation = () => {
  return (
    <>
      {/* <AtomGrid container columnSpacing={3}>
          {footer.map((foot, index) => (
            <AtomGrid item key={foot.title} xs={4} sm={2}>
              <AtomTypography
                sx={(theme) => ({
                  textTransform: "uppercase",
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.spacing(2.25),
                  paddingBottom: theme.spacing(0.8),
                })}
              >
                {foot.title}
              </AtomTypography>
              {foot.content}
            </AtomGrid>
          ))}
        </AtomGrid>
      </AtomContainer> */}

      {/* edit */}
      <AtomGrid
        container
        spacing={2}
        sx={(theme) => ({ paddingY: theme.spacing(2) })}
      >
        {/* Pháp lý */}
        <AtomGrid item xs={6} sm={3}>
          <AtomStack alignItems="center">
            <StyleTypographyTitle>pháp lý</StyleTypographyTitle>
            <AtomGrid container spacing={2} justifyContent="center">
              <AtomGrid item>
                <AtomLink
                  underline="none"
                  href="https://policies.tinder.com/privacy/intl/vi"
                >
                  <StyleTypographyContent>
                    Quyền riêng tư
                  </StyleTypographyContent>
                </AtomLink>
                <AtomLink
                  underline="none"
                  href="https://policies.tinder.com/terms/intl/vi"
                >
                  <StyleTypographyContent>Điều khoản</StyleTypographyContent>
                </AtomLink>
                <AtomLink
                  underline="none"
                  href="https://policies.tinder.com/cookie-policy?lang=vi"
                >
                  <StyleTypographyContent>
                    Chính sách Cookie
                  </StyleTypographyContent>
                </AtomLink>
                <AtomLink
                  underline="none"
                  href="https://policies.tinder.com/intellectual-property?lang=vi"
                >
                  <StyleTypographyContent>
                    Sở hữu trí tuệ
                  </StyleTypographyContent>
                </AtomLink>
              </AtomGrid>
            </AtomGrid>
          </AtomStack>
        </AtomGrid>
        {/* Nghề nghiệp */}
        <AtomGrid item xs={6} sm={3}>
          <AtomStack alignItems="center">
            <StyleTypographyTitle>nghề nghiệp</StyleTypographyTitle>
            <AtomGrid container spacing={2} justifyContent="center">
              <AtomGrid item>
                <AtomLink
                  underline="none"
                  href="https://www.lifeattinder.com/?lang=vi"
                >
                  <StyleTypographyContent>
                    Cổng thông tin Nghề nghiệp
                  </StyleTypographyContent>
                </AtomLink>
                <AtomLink
                  underline="none"
                  href="https://medium.com/tinder-engineering?lang=vi"
                >
                  <StyleTypographyContent>
                    Blog Công Nghệ
                  </StyleTypographyContent>
                </AtomLink>
              </AtomGrid>
            </AtomGrid>
          </AtomStack>
        </AtomGrid>
        {/* Mạng xã hội */}
        <AtomGrid item xs={6} sm={3}>
          <AtomStack alignItems="center">
            <StyleTypographyTitle>mạng xã hội</StyleTypographyTitle>
            <AtomGrid
              container
              justifyContent="space-evenly"
              sx={(theme) => ({ fontSize: theme.spacing(2) })}
            >
              <AtomGrid item>
                <AtomStyleLinkSoc href="https://www.instagram.com/tinder/">
                  <AtomInstagramIcon />
                </AtomStyleLinkSoc>
              </AtomGrid>
              <AtomGrid item>
                <AtomStyleLinkSoc href="https://www.tiktok.com/@tinder">
                  <AtomMusicNoteIcon />
                </AtomStyleLinkSoc>
              </AtomGrid>
              <AtomGrid item>
                <AtomStyleLinkSoc href="https://twitter.com/Tinder">
                  <AtomTwitterIcon />
                </AtomStyleLinkSoc>
              </AtomGrid>
              <AtomGrid item>
                <AtomStyleLinkSoc href="https://www.facebook.com/Tinder-Vietnam-106524054422640">
                  <AtomFacebookIcon />
                </AtomStyleLinkSoc>
              </AtomGrid>
            </AtomGrid>
          </AtomStack>
        </AtomGrid>
        {/* Các vấn đề khác */}
        <AtomGrid item xs={6} sm={3}>
          <AtomStack alignItems="center">
            <StyleTypographyTitle>Các vấn đề khác</StyleTypographyTitle>
            <AtomGrid container spacing={2} justifyContent="center">
              <AtomGrid item>
                <AtomLink underline="none" href="https://tinder.com/vi/faq">
                  <StyleTypographyContent>
                    Câu Hỏi Thường Gặp
                  </StyleTypographyContent>
                </AtomLink>
                <AtomLink underline="none" href="https://tinder.com/vi/places">
                  <StyleTypographyContent>Các điểm đến</StyleTypographyContent>
                </AtomLink>
                <AtomLink
                  underline="none"
                  href="https://vn.tinderpressroom.com/?lang=vi"
                >
                  <StyleTypographyContent>
                    Khu Vực Báo Chí
                  </StyleTypographyContent>
                </AtomLink>
                <AtomLink
                  underline="none"
                  href="https://policies.tinder.com/contact?lang=vi"
                >
                  <StyleTypographyContent>Liên Hệ</StyleTypographyContent>
                </AtomLink>
                <AtomLink
                  underline="none"
                  href="https://policies.tinder.com/contact?lang=vi"
                >
                  <StyleTypographyContent>Mã Khuyến Mãi</StyleTypographyContent>
                </AtomLink>
              </AtomGrid>
            </AtomGrid>
          </AtomStack>
        </AtomGrid>
      </AtomGrid>
    </>
  );
};

export default FooterInformation;
