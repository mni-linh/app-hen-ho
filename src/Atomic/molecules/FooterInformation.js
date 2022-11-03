import React from "react";
import AtomFacebookIcon from "../atoms/AtomFacebookIcon";
import AtomGrid from "../atoms/AtomGrid";
import AtomInstagramIcon from "../atoms/AtomInstagramIcon";
import AtomMusicNoteIcon from "../atoms/AtomMusicNoteIcon";
import AtomStack from "../atoms/AtomStack";
import AtomStyleFooter from "../atoms/AtomStyleFooter";
import AtomTwitterIcon from "../atoms/AtomTwitterIcon";
import AtomTypography from "../atoms/AtomTypography";
import AtomYouTubeIcon from "../atoms/AtomYouTubeIcon";
const footer = [
  {
    title: "pháp lý",
    content: (
      <AtomStack spacing={1}>
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
      <AtomStack spacing={1}>
        <AtomStyleFooter>Cổng thông tin Nghề nghiệp</AtomStyleFooter>
        <AtomStyleFooter>Blog Công Nghệ</AtomStyleFooter>
      </AtomStack>
    ),
  },
  {
    title: "mạng xã hội",
    content: (
      <AtomStack direction="row" spacing={1}>
        <AtomStyleFooter>
          <AtomInstagramIcon />
        </AtomStyleFooter>
        <AtomStyleFooter>
          <AtomMusicNoteIcon />
        </AtomStyleFooter>
        <AtomStyleFooter>
          <AtomYouTubeIcon />
        </AtomStyleFooter>
        <AtomStyleFooter>
          <AtomTwitterIcon />
        </AtomStyleFooter>
        <AtomStyleFooter>
          <AtomFacebookIcon />
        </AtomStyleFooter>
      </AtomStack>
    ),
  },
  {
    title: "",
    content: (
      <AtomStack spacing={1}>
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
      <AtomGrid container columnSpacing={3} sx={{ margin: "21px 0px" }}>
        {footer.map((foot, index) => (
          <AtomGrid item key={foot.title} sx={{ paddingRight: "100px" }}>
            <AtomTypography
              sx={{
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "18px",
                paddingBottom: "10px",
              }}
            >
              {foot.title}
            </AtomTypography>
            {foot.content}
          </AtomGrid>
        ))}
      </AtomGrid>
    </>
  );
};

export default FooterInformation;
