import Home from "../pages/Home";
import Product from "../pages/Product";
import Safe from "../pages/Safe";
import Support from "../pages/Support";
import Download from "../pages/Download";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LearnAbout from "../pages/LearnAbout";

const dataDating = [
  {
    path: "/",
    element: <Home />,
    icon: <WhatshotIcon />,
  },
  {
    path: "/product",
    element: <Product />,
    name: "Sản phẩm",
  },
  {
    path: "/learn-about",
    element: <LearnAbout />,
    name: "Tìm hiểu về",
  },
  {
    path: "/safe",
    element: <Safe />,
    name: "An toàn",
  },
  {
    path: "/support",
    element: <Support />,
    name: "Hỗ trợ",
  },
  {
    path: "/download",
    element: <Download />,
    name: "Tải về",
  },
];

export default dataDating;
