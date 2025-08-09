import { Outlet, useLocation } from "react-router";
import Title from "../components/header/Title";
import MarqueeText from "../components/marqueeText/MarqueeText";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  const pathLocation = useLocation();
  console.log(pathLocation.pathname);
  return (
    <>
      {pathLocation.pathname === "/" ? <Title /> : ""}
      {pathLocation.pathname === "/" ? <MarqueeText /> : ""}
      {/* <Title /> */}
      {/* <MarqueeText /> */}
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
