import React from "react";
import AtomContainer from "../atoms/AtomContainer";
import AtomFacebookIcon from "../atoms/AtomFacebookIcon";
import AtomGrid from "../atoms/AtomGrid";
import AtomInstagramIcon from "../atoms/AtomInstagramIcon";

import AtomMusicNoteIcon from "../atoms/AtomMusicNoteIcon";
import AtomStack from "../atoms/AtomStack";
import AtomStyleFooter from "../atoms/AtomStyleFooter";
import AtomStyleLinkSoc from "../atoms/AtomStyleLinkSoc";
import AtomTwitterIcon from "../atoms/AtomTwitterIcon";
import AtomTypography from "../atoms/AtomTypography";
import AtomYouTubeIcon from "../atoms/AtomYouTubeIcon";

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
        <AtomStyleFooter href="https://policies.tinder.com/privacy/intl/vi">
          Quyền riêng tư
        </AtomStyleFooter>
        <AtomStyleFooter href="https://policies.tinder.com/terms/intl/vi">
          Điều khoản
        </AtomStyleFooter>
        <AtomStyleFooter href="https://policies.tinder.com/cookie-policy?lang=vi">
          Chính sách Cookie
        </AtomStyleFooter>
        <AtomStyleFooter href="https://policies.tinder.com/intellectual-property?lang=vi">
          Sở hữu trí tuệ
        </AtomStyleFooter>
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
        <AtomStyleFooter href="https://www.lifeattinder.com/?lang=vi">
          Cổng thông tin Nghề nghiệp
        </AtomStyleFooter>
        <AtomStyleFooter href="https://medium.com/tinder-engineering?lang=vi">
          Blog Công Nghệ
        </AtomStyleFooter>
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
        {/* <AtomStyleFooter> */}
        <AtomStyleLinkSoc href="https://www.instagram.com/">
          <AtomInstagramIcon />
        </AtomStyleLinkSoc>

        {/* </AtomStyleFooter> */}

        <AtomStyleLinkSoc href="https://www.tiktok.com/">
          <AtomMusicNoteIcon />
        </AtomStyleLinkSoc>

        <AtomStyleLinkSoc href="https://www.youtube.com/">
          <AtomYouTubeIcon />
        </AtomStyleLinkSoc>

        <AtomStyleLinkSoc href="https://www.twitter.com/">
          <AtomTwitterIcon />
        </AtomStyleLinkSoc>

        <AtomStyleLinkSoc href="https://www.facebook.com/">
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
        <AtomStyleFooter href="https://tinder.com/vi/faq">
          Câu Hỏi Thường Gặp
        </AtomStyleFooter>
        <AtomStyleFooter href="https://tinder.com/vi/places">
          Các điểm đến
        </AtomStyleFooter>
        <AtomStyleFooter href="https://vn.tinderpressroom.com/?lang=vi">
          Khu Vực Báo Chí
        </AtomStyleFooter>
        <AtomStyleFooter href="https://policies.tinder.com/contact?lang=vi">
          Liên Hệ
        </AtomStyleFooter>
        <AtomStyleFooter href="https://policies.tinder.com/contact?lang=vi">
          Mã Khuyến Mãi
        </AtomStyleFooter>
      </AtomStack>
    ),
  },
];
const FooterInformation = () => {
  return (
    <>
      <AtomContainer
        maxWidth="xl"
        sx={(theme) => ({
          marginY: theme.spacing(3),
          marginX: theme.spacing(3),
        })}
      >
        <AtomGrid container columnSpacing={15}>
          {footer.map((foot, index) => (
            <AtomGrid item key={foot.title}>
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
      </AtomContainer>
    </>
  );
};

export default FooterInformation;
