import React from "react";

import AtomContainer from "../atoms/Container/AtomContainer";
import AtomCard from "../atoms/Card/AtomCard";
import AtomCardHeader from "../atoms/CardHeader/AtomCardHeader";
import AtomGrid from "../atoms/Grid/AtomGrid";
import AtomStack from "../atoms/Stack/AtomStack";
import AtomTypography from "../atoms/Typography/AtomTypography";
import AtomDivider from "../atoms/Divider/AtomDivider";
import AtomCardContent from "../../Atomic/atoms/CardContent/AtomCardContent";

import { SwiperSlide, Swiper } from "swiper/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

import comments from "../../CDN/slides";

const CommentItem = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isComputer = useMediaQuery(theme.breakpoints.up("sm"));
  const isEqua = (isMobile && 1) || (isComputer && 3);
  return (
    <>
      {/* <AtomContainer
        maxWidth="xl"
        sx={{
          display: isEqua,
        }}
      > */}
      <Swiper
        breakpoints={{
          600: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={isMobile ? 1 : 1}
        freeMode={true}
        height={300}
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment.id}>
            <AtomCard
              // elevation
              sx={(theme) => ({
                height: theme.spacing(32),
                marginX: theme.spacing(2),
                marginY: theme.spacing(4),
                borderRadius: theme.spacing(2),
              })}
            >
              <AtomCardHeader
                titleTypographyProps={{ fontWeight: "bold" }}
                title={
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
                          {comment.header}
                        </AtomTypography>
                        <AtomDivider
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
                }
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
      {/* </AtomContainer> */}
    </>
  );
};

export default CommentItem;
