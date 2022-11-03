import React from 'react'
import AtomGrid from '../atoms/AtomGrid';
import AtomTypography from '../atoms/AtomTypography';

const FooterContent = () => {
  return (
    <AtomGrid container rowSpacing={2} sx={{ margin: "auto", width: "98%" }}>
      <AtomGrid item>
        <AtomTypography sx={{ fontSize: "13px" }}>
          Gửi những ai còn độc thân: Nếu bạn đang tìm kiếm người yêu, muốn bắt
          đầu hẹn hò, hay chỉ đơn giản là muốn có thêm bạn, bạn cần có mặt trên
          Tinder. Với hơn 55 tỷ lượt tương hợp thành công, Tinder chính là nơi
          để gặp gỡ tương hợp tốt nhất tiếp theo của bạn. Chân thành mà nói, môi
          trường hẹn hò ngày nay không còn giống như xưa nữa, giờ đây hầu hết
          mọi người đang gặp gỡ trực tuyến. Với Tinder, ứng dụng hẹn hò miễn phí
          phổ biến nhất trên thế giới, hàng triệu người độc thân tuyệt vời khác
          luôn nằm trong tầm tay bạn. Không những thế họ luôn sẵn sàng gặp gỡ
          những người mới như bạn. Dù bạn thẳng hay thuộc cộng đồng LGBTQIA,
          Tinder luôn sẵn sàng mang đến cho bạn các cơ hội gặp gỡ.
        </AtomTypography>
      </AtomGrid>
      <AtomGrid item>
        <AtomTypography sx={{ fontSize: "13px" }}>
          Sẽ luôn có điều gì đó phù hợp cho mọi người trên Tinder. Bạn muốn có
          một mối quan hệ? Sẽ có. Bạn muốn tìm thêm bạn bè? Cũng sẽ có. Bạn mới
          tới ký túc xá và muốn trải nghiệm học đại học của mình tuyệt nhất?
          Tinder U sẽ giúp bạn. Tinder không phải là trang hẹn hò thường thường
          bậc trung — Tinder là ứng dụng hẹn hò đa dạng nhất, nơi những con
          người trưởng thành thuộc mọi tầng lớp xã hội với những trải nghiệm
          phong phú khác nhau được khuyến khích tạo dựng các kết nối, kỷ niệm,
          hay những điều tương tự.
        </AtomTypography>
      </AtomGrid>
    </AtomGrid>
  );
}

export default FooterContent
