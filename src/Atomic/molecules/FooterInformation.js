import React from "react";
import AtomContainer from "../atoms/AtomContainer";
import AtomFacebookIcon from "../atoms/AtomFacebookIcon";
import AtomGrid from "../atoms/AtomGrid";
import AtomInstagramIcon from "../atoms/AtomInstagramIcon";
import AtomLink from "../atoms/AtomLink";
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
        <AtomStyleFooter>Quyền riêng tư</AtomStyleFooter>
        <AtomStyleFooter>Điều khoản</AtomStyleFooter>
        <AtomStyleFooter>Chính sách Cookie</AtomStyleFooter>
        <AtomStyleFooter>Sở hữu trí tuệ</AtomStyleFooter>
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
        <AtomStyleFooter>Cổng thông tin Nghề nghiệp</AtomStyleFooter>
        <AtomStyleFooter>Blog Công Nghệ</AtomStyleFooter>
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
        <AtomStyleFooter>
          {/* <AtomStyleLinkSoc> */}
          <AtomInstagramIcon>
            <AtomLink to="https://www.instagram.com/" />
          </AtomInstagramIcon>
          {/* </AtomStyleLinkSoc> */}
        </AtomStyleFooter>

        <AtomStyleFooter>
          {/* <AtomStyleLinkSoc> */}
          <AtomMusicNoteIcon />
          {/* </AtomStyleLinkSoc> */}
        </AtomStyleFooter>

        <AtomStyleFooter>
          {/* <AtomStyleLinkSoc> */}
          <AtomYouTubeIcon />
          {/* </AtomStyleLinkSoc> */}
        </AtomStyleFooter>

        <AtomStyleFooter>
          {/* <AtomStyleLinkSoc> */}
          <AtomTwitterIcon />
          {/* </AtomStyleLinkSoc> */}
        </AtomStyleFooter>

        <AtomStyleFooter>
          {/* <AtomStyleLinkSoc> */}
          <AtomFacebookIcon />
          {/* </AtomStyleLinkSoc> */}
        </AtomStyleFooter>
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
        <AtomStyleFooter>Câu Hỏi Thường Gặp</AtomStyleFooter>
        <AtomStyleFooter>Các điểm đến</AtomStyleFooter>
        <AtomStyleFooter>Khu Vực Báo Chí</AtomStyleFooter>
        <AtomStyleFooter>Liên Hệ</AtomStyleFooter>
        <AtomStyleFooter>Mã Khuyến Mãi</AtomStyleFooter>
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
        })}
      >
        <AtomGrid
          container
          columnSpacing={3}
          sx={(theme) => ({ margin: theme.spacing(2.6) + theme.spacing(0) })}
          justifyContent="space-around"
        >
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
