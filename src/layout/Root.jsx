import { Outlet } from "react-router";
import Title from "../components/header/Title";
import MarqueeText from "../components/marqueeText/MarqueeText";
import Navbar from "../components/navbar/Navbar";

const Root = () => {
  return (
    <>
      <Title />
      <MarqueeText />
      <Navbar />
      <Outlet />
    </>
  );
};

export default Root;
