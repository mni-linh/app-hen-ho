import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React from "react";
import AtomTypography from "../atoms/AtomTypography";

const CommentItem = () => {
  const comments = [
    {
      header: "Victoria và Bayleigh Rodriquez ❤️",
      content:
        "CẢM ƠN TINDER vì đã giúp tôi gặp được tri kỷ của mình. Chỉ năm phút sau khi bắt đầu nói chuyện, cô ấy, người hiện là bà xã của tôi đã nói về chuyện chúng tôi sẽ có một đám cưới tuyệt thế nào.",
    },
    {
      header: "Ryan và Lindsey Walsh",
      content:
        "… vừa dứt ra khỏi cuộc tình không mấy vui vẻ, một tài khoản Tinder giúp đầu óc tôi khỏi lan man về vụ chia tay. Sau khoảng một tuần trò chuyện, chúng tôi quyết định gặp nhau và làm vài ly tại một quán bar địa phương và… sau đó là tiến tới hôn nhân với nhau trong một buổi lễ với 18 khách mời tại New Jersey vào ngày 27 tháng 6, 2020.",
    },
    {
      header: "Shannon Escobar",
      content:
        "Sau vài tháng hẹn hò, mối quan hệ của chúng tôi đứng trước một ngã rẽ và chúng tôi quyết định dừng lại. Tôi đã yêu người ấy nhưng đã nghĩ là chuyện sẽ chẳng đi đến đâu. Vậy mà 9 tháng sau chúng tôi chẳng thể xa nhau thêm nữa.",
    },
    {
      header: "Rebecca Lawton",
      content:
        "Anh ấy gửi tôi một trong những câu bắt chuyện TỆ NHẤT, nhưng vì đang chán với công việc, tôi trả lời. Từ đó cả hai trò chuyện không ngừng, hẹn hò và càng ngày càng yêu sâu đậm.",
    },
    {
      header: "Lauren Delarmente",
      content:
        "Gửi tất cả những ai đang độc thân, đặc biệt là những người hướng nội như chúng tôi: đừng ngại vượt ra ngoài vùng an toàn của các bạn. Đó là nơi bạn sẽ tạo được một mối liên kết chân thành. Tinder đã đưa chúng tôi đến với nhau và tôi mãi mãi biết ơn vì điều đó. ❤",
    },
    {
      header: "Rebecca Stephenson",
      content:
        "Tôi đã rất chắc chắn về người đàn ông tiếp theo tôi ở bên một cách nghiêm túc, sẽ là người tôi dành trọn phần đời ở bên (chỉ là không kết hôn). Tôi đã rất kén chọn và không mong gặp một người đàn ông trên Tinder. Nhưng tôi vẫn quyết định đăng ký rồi cứ tương hợp xem sao.",
    },
    {
      header: "Elissa Donahue",
      content:
        "Cả tôi và bạn cùng phòng thời đại học thường Tinder cả đêm, không chờ gì nghiêm túc cả, cũng chẳng bắt kèo gì, chỉ dùng để giải trí. Và ông xã hiện giờ của tôi và tôi đã tương hợp trên Tinder.",
    },
    {
      header: "Sean & Marianna Polcha",
      content:
        "Tôi đã nghĩ sẽ chẳng có gì nghiêm túc, nhưng hôm đó tôi đã thấy mỹ nhân này trên ứng dụng. Tôi đã Siêu Thích cô ấy, chính xác là đã chi thêm tiền để có lượt Siêu Thích đó!",
    },
    {
      header: "Magdalena & Annie",
      content:
        "Tôi vừa chấm dứt một mối quan hệ còn Annie vừa bắt đầu hẹn hò với phụ nữ vì vậy cả hai chúng tôi hơi nhát và đề phòng, dè dặt tiến từng bước! Cả hai đều đã 'đổ' rất nhanh và nhận ra là mình đã tìm được mảnh ghép còn lại.",
    },
    {
      header: "Shannon & Julian",
      content:
        "Khi trở về quê nhà, tôi thấy cô đơn vì hầu hết bạn bè đều đã có người yêu từ khi tôi còn ở nước ngoài. Cả hai chúng tôi đã quyết định tải về Tinder và sẽ có chuyện gì. Nếu không có Tinder, chúng tôi có thể đã chẳng bao giờ gặp và có hành trình điên rồ mà tuyệt vời này. Cảm ơn Tinder đã đưa chúng tôi, cũng như nhiều cặp đôi khác trên khắp thế giới đến với nhau. Tôi sẽ mãi biết ơn.",
    },
    {
      header: "Courtney & Miranda",
      content:
        "Nhờ Tinder, tôi tìm được tình yêu của đời và chúng tôi sắp kết hôn. Sau những những buổi hẹn hò và vài buổi tối vui vẻ, tôi tình cờ gặp Miranda. Sau khi đọc hồ sơ, tôi đã quẹt phải không do dự ngay khi đọc câu chốt… Đang tìm nửa còn lại của đời mình. Sau khi chat với nhau được khoảng một tuần, chúng tôi gặp mặt đầu tiên và tôi đã biết cô ấy có điều gì đó rất đặc biệt!",
    },
    {
      header: "Gabriel & Fiance",
      content:
        "Tôi gặp vợ chưa cưới của mình trên Tinder trong thời gian cách ly vì COVID. Cô ấy đến từ Lafayette, Indiana còn tôi từ Cleveland, Ohio. Chúng tôi đều theo Cơ đốc giáo và vướng 'lưới tình' mà không tài nào gỡ được.",
    },
    {
      header: "Kenneth & Elliot",
      content:
        "Nói thật là tôi đã từng có nhiều bạn hẹn hò từ Tinder và chắc chắn một điều là tôi đã từng gặp gỡ người mới chỉ để vui vẻ và ăn uống miễn phí… 3 năm với rất nhiều lần hẹn hò và không ít những kỷ niệm sau đó, tôi kết hôn với một anh chàng đến từ Tinder, Kenny!",
    },
  ];
  return (
    <div>
      {/* <AtomTypography sx={{ color: "red" }}> */}
      <Card elevation={1} sx={{ maxWidth: 345 }}>
        {comments.map((comments) => (
          <>
            <CardHeader key={comments}>{comments.header}</CardHeader>
            <CardContent key={comments}>
              <Typography variant="body2" color="text.secondary">
                {comments.content}
              </Typography>
            </CardContent>
          </>
        ))}
      </Card>
      {/* </AtomTypography> */}
    </div>
  );
};

export default CommentItem;
