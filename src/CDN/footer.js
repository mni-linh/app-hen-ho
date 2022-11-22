import AtomFacebookIcon from "../Atomic/atoms/FacebookIcon/AtomFacebookIcon";
import AtomInstagramIcon from "../Atomic/atoms/InstagramIcon/AtomInstagramIcon";
import AtomMusicNoteIcon from "../Atomic/atoms/MusicNoteIcon/AtomMusicNoteIcon";
import AtomStyleFooter from "../Atomic/atoms/StyleFooter/AtomStyleFooter";
import AtomStyleLinkSoc from "../Atomic/atoms/StyleLinkSoc/AtomStyleLinkSoc";
import AtomTwitterIcon from "../Atomic/atoms/TwitterIcon/AtomTwitterIcon";
import AtomYouTubeIcon from "../Atomic/atoms/YouTubeIcon/AtomYouTubeIcon";

const foot = [
  {
    title: "Pháp lý",
    content: (
      <>
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
      </>
    ),
  },
  {
    title: "Nghề nghiệp",
    content: (
      <>
        <AtomStyleFooter href="https://www.lifeattinder.com/?lang=vi">
          Cổng thông tin Nghề nghiệp
        </AtomStyleFooter>
        <AtomStyleFooter href="https://medium.com/tinder-engineering?lang=vi">
          Blog Công Nghệ
        </AtomStyleFooter>
      </>
    ),
  },
  {
    title: "Mạng xã hội",
    content: (
      <>
        <AtomStyleLinkSoc href="https://www.instagram.com/tinder/">
          <AtomInstagramIcon />
        </AtomStyleLinkSoc>

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
      </>
    ),
  },
  {
    title: "",
    content: (
      <>
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
      </>
    ),
  },
];
