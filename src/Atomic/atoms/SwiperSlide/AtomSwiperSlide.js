import { styled } from "@mui/material/styles";

const AtomSwiperSlide = styled("swiper-slide")(({ theme }) => ({
  textAlign: "center",
  color: "red",
  fontSize: theme.spacing(2.25),
  background: "#fff",

  display: "block",
  objectFit: "cover",
  webkitBoxPack: "center",
  msFlexPack: "center",
  webkitJustifyContent: "center",
  justifyContent: "center",
  webkitBoxAlign: "center",
  msFlexAlign: "center",
  webkitAlignItems: "center",
  alignItems: "center",
}));

export default AtomSwiperSlide;
