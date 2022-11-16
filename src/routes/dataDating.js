import Product from "../pages/Product";
import Safe from "../pages/Safe";
import Support from "../pages/Support";
import Download from "../pages/Download";
import LearnAbout from "../pages/LearnAbout";

const dataDating = [
  {
    path: "/product",
    element: <Product />,
    name: "Sản phẩm",
  },
  {
    path: "/learn-about",
    element: <LearnAbout />,
    name: "Tìm hiểu",
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
