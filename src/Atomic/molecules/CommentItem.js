import React from "react";

import { SwiperSlide, Swiper } from "swiper/react";

import AtomDivider from "../atoms/AtomDivider";
import AtomGrid from "../atoms/AtomGrid";
import AtomStack from "../atoms/AtomStack";
import AtomTypography from "../atoms/AtomTypography";
import AtomCard from "../atoms/AtomCard";
import AtomCardHeader from "../atoms/AtomCardHeader";
import AtomCardContent from "../atoms/AtomCardContent";
import AtomContainer from "../atoms/AtomContainer";

import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

const CommentItem = () => {
  const comments = [
    {
      id: 1,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Victoria và Bayleigh Rodriquez ❤️
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "CẢM ƠN TINDER vì đã giúp tôi gặp được tri kỷ của mình. Chỉ năm phút sau khi bắt đầu nói chuyện, cô ấy, người hiện là bà xã của tôi đã nói về chuyện chúng tôi sẽ có một đám cưới tuyệt thế nào.",
    },
    {
      id: 2,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Ryan và Lindsey Walsh
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "… vừa dứt ra khỏi cuộc tình không mấy vui vẻ, một tài khoản Tinder giúp đầu óc tôi khỏi lan man về vụ chia tay. Sau khoảng một tuần trò chuyện, chúng tôi quyết định gặp nhau và làm vài ly tại một quán bar địa phương và… sau đó là tiến tới hôn nhân với nhau trong một buổi lễ với 18 khách mời tại New Jersey vào ngày 27 tháng 6, 2020.",
    },
    {
      id: 3,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Shannon Escobar
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            {/* <AtomFormatQuoteIcon fontSize="large"></AtomFormatQuoteIcon> */}
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "Sau vài tháng hẹn hò, mối quan hệ của chúng tôi đứng trước một ngã rẽ và chúng tôi quyết định dừng lại. Tôi đã yêu người ấy nhưng đã nghĩ là chuyện sẽ chẳng đi đến đâu. Vậy mà 9 tháng sau chúng tôi chẳng thể xa nhau thêm nữa.",
    },
    {
      id: 4,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Rebecca Lawton
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            {/* <AtomFormatQuoteIcon fontSize="large"></AtomFormatQuoteIcon> */}
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "Anh ấy gửi tôi một trong những câu bắt chuyện TỆ NHẤT, nhưng vì đang chán với công việc, tôi trả lời. Từ đó cả hai trò chuyện không ngừng, hẹn hò và càng ngày càng yêu sâu đậm.",
    },
    {
      id: 5,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Lauren Delarmente
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            {/* <AtomFormatQuoteIcon fontSize="large"></AtomFormatQuoteIcon> */}
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "Gửi tất cả những ai đang độc thân, đặc biệt là những người hướng nội như chúng tôi: đừng ngại vượt ra ngoài vùng an toàn của các bạn. Đó là nơi bạn sẽ tạo được một mối liên kết chân thành. Tinder đã đưa chúng tôi đến với nhau và tôi mãi mãi biết ơn vì điều đó. ❤",
    },
    {
      id: 6,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Rebecca Stephenson
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            {/* <AtomFormatQuoteIcon fontSize="large"></AtomFormatQuoteIcon> */}
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "Tôi đã rất chắc chắn về người đàn ông tiếp theo tôi ở bên một cách nghiêm túc, sẽ là người tôi dành trọn phần đời ở bên (chỉ là không kết hôn). Tôi đã rất kén chọn và không mong gặp một người đàn ông trên Tinder. Nhưng tôi vẫn quyết định đăng ký rồi cứ tương hợp xem sao.",
    },
    {
      id: 7,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Elissa Donahue
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            {/* <AtomFormatQuoteIcon fontSize="large"></AtomFormatQuoteIcon> */}
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "Cả tôi và bạn cùng phòng thời đại học thường Tinder cả đêm, không chờ gì nghiêm túc cả, cũng chẳng bắt kèo gì, chỉ dùng để giải trí. Và ông xã hiện giờ của tôi và tôi đã tương hợp trên Tinder.",
    },
    {
      id: 8,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Sean & Marianna Polcha
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            {/* <AtomFormatQuoteIcon fontSize="large"></AtomFormatQuoteIcon> */}
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "Tôi đã nghĩ sẽ chẳng có gì nghiêm túc, nhưng hôm đó tôi đã thấy mỹ nhân này trên ứng dụng. Tôi đã Siêu Thích cô ấy, chính xác là đã chi thêm tiền để có lượt Siêu Thích đó!",
    },
    {
      id: 9,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Magdalena & Annie
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            {/* <AtomFormatQuoteIcon fontSize="large"></AtomFormatQuoteIcon> */}
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "Tôi vừa chấm dứt một mối quan hệ còn Annie vừa bắt đầu hẹn hò với phụ nữ vì vậy cả hai chúng tôi hơi nhát và đề phòng, dè dặt tiến từng bước! Cả hai đều đã 'đổ' rất nhanh và nhận ra là mình đã tìm được mảnh ghép còn lại.",
    },
    {
      id: 10,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Shannon & Julian
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            {/* <AtomFormatQuoteIcon fontSize="large"></AtomFormatQuoteIcon> */}
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "Khi trở về quê nhà, tôi thấy cô đơn vì hầu hết bạn bè đều đã có người yêu từ khi tôi còn ở nước ngoài. Cả hai chúng tôi đã quyết định tải về Tinder và sẽ có chuyện gì. Nếu không có Tinder, chúng tôi có thể đã chẳng bao giờ gặp và có hành trình điên rồ mà tuyệt vời này. Cảm ơn Tinder đã đưa chúng tôi, cũng như nhiều cặp đôi khác trên khắp thế giới đến với nhau. Tôi sẽ mãi biết ơn.",
    },
    {
      id: 11,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Courtney & Miranda
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            {/* <AtomFormatQuoteIcon fontSize="large"></AtomFormatQuoteIcon> */}
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "Nhờ Tinder, tôi tìm được tình yêu của đời và chúng tôi sắp kết hôn. Sau những những buổi hẹn hò và vài buổi tối vui vẻ, tôi tình cờ gặp Miranda. Sau khi đọc hồ sơ, tôi đã quẹt phải không do dự ngay khi đọc câu chốt… Đang tìm nửa còn lại của đời mình. Sau khi chat với nhau được khoảng một tuần, chúng tôi gặp mặt đầu tiên và tôi đã biết cô ấy có điều gì đó rất đặc biệt!",
    },
    {
      id: 12,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Gabriel & Fiance
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            {/* <AtomFormatQuoteIcon fontSize="large"></AtomFormatQuoteIcon> */}
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "Tôi gặp vợ chưa cưới của mình trên Tinder trong thời gian cách ly vì COVID. Cô ấy đến từ Lafayette, Indiana còn tôi từ Cleveland, Ohio. Chúng tôi đều theo Cơ đốc giáo và vướng 'lưới tình' mà không tài nào gỡ được.",
    },
    {
      id: 13,
      header: (
        <AtomGrid
          container
          justifyContent="space-around"
          sx={(theme) => ({
            height: theme.spacing(4),
          })}
        >
          <AtomGrid item>
            <AtomStack spacing={2}>
              <AtomTypography
                sx={(theme) => ({
                  fontWeight: theme.typography.fontWeightBold,
                  fontSize: theme.typography.fontSize,
                })}
              >
                Kenneth & Elliot
              </AtomTypography>
              <AtomDivider
                variant="middle"
                sx={(theme) => ({ width: theme.spacing(43) })}
              />
            </AtomStack>
          </AtomGrid>
          <AtomGrid item>
            <AtomTypography
              sx={(theme) => ({
                fontFamily: "'Secular One', sans-serif;",
                fontSize: theme.spacing(9),
                color: grey[300],
              })}
            >
              "
            </AtomTypography>
          </AtomGrid>
        </AtomGrid>
      ),
      content:
        "Nói thật là tôi đã từng có nhiều bạn hẹn hò từ Tinder và chắc chắn một điều là tôi đã từng gặp gỡ người mới chỉ để vui vẻ và ăn uống miễn phí… 3 năm với rất nhiều lần hẹn hò và không ít những kỷ niệm sau đó, tôi kết hôn với một anh chàng đến từ Tinder, Kenny!",
    },
  ];
  const ResponSwiper = styled(Swiper)(({ theme }) => ({
    // slidesPerView: 1,
    // spaceBetween: 10,
    breakpoints: {
      600: {
        slidesPerView: 1,
        spaceBetween: theme.spacing(10),
      },
      900: {
        slidesPerView: 3,
        spaceBetween: theme.spacing(10),
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: theme.spacing(10),
      },
      1536: {
        slidesPerView: 3,
        spaceBetween: theme.spacing(10),
      },
    },
  }));
  return (
    <>
      <AtomContainer
        maxWidth="xl"
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
          width: "1450px",
        }}
      >
        <Swiper slidesPerView={3} freeMode={true} height={300}>
          {comments.map((comment) => (
            <SwiperSlide key={comment.id}>
              <AtomCard
                sx={(theme) => ({
                  height: theme.spacing(31.25),
                  width: theme.spacing(55),
                  marginX: theme.spacing(2.5),
                  marginY: theme.spacing(3.5),
                  boxShadow:
                    theme.spacing(0.2) +
                    " " +
                    theme.spacing(0.2) +
                    " " +
                    theme.spacing(1) +
                    " " +
                    theme.spacing(0.5) +
                    " " +
                    "#e5e5e5",
                  borderRadius: theme.spacing(3),
                })}
              >
                <AtomCardHeader
                  title={comment.header}
                  titleTypographyProps={{ fontWeight: "bold" }}
                />

                <AtomCardContent>
                  <AtomTypography
                    variant="body2"
                    color="text.secondary"
                    sx={(theme) => ({
                      fontSize: theme.spacing(1.875),
                      lineHeight: theme.spacing(2.7),
                    })}
                  >
                    {comment.content}
                  </AtomTypography>
                </AtomCardContent>
              </AtomCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </AtomContainer>

      <AtomContainer
        maxWidth="xl"
        sx={{
          display: {
            xs: "flex",
            sm: "none",
          },
        }}
      >
        <Swiper slidesPerView={1} freeMode={true} height={300}>
          {comments.map((comment) => (
            <SwiperSlide key={comment.id}>
              <AtomCard
                sx={(theme) => ({
                  height: theme.spacing(38),
                  width: theme.spacing(54),
                  marginX: theme.spacing(2.5),
                  marginY: theme.spacing(3.5),
                  justifyContent: "space-between",
                  boxShadow:
                    theme.spacing(0.2) +
                    " " +
                    theme.spacing(0.2) +
                    " " +
                    theme.spacing(1) +
                    " " +
                    theme.spacing(0.5) +
                    " " +
                    "#e5e5e5",
                  borderRadius: theme.spacing(3),
                })}
              >
                <AtomCardHeader
                  title={comment.header}
                  titleTypographyProps={{ fontWeight: "bold" }}
                />

                <AtomCardContent>
                  <AtomTypography
                    variant="body2"
                    color="text.secondary"
                    sx={(theme) => ({
                      fontSize: theme.spacing(1.875),
                      lineHeight: theme.spacing(2.7),
                    })}
                  >
                    {comment.content}
                  </AtomTypography>
                </AtomCardContent>
              </AtomCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </AtomContainer>
    </>
  );
};

export default CommentItem;
