import { Outlet } from "react-router";
import Title from "../components/header/Title";
import MarqueeText from "../components/marqueeText/MarqueeText";

const Root = () => {
  return (
    <>
      <Title />
      <MarqueeText />
      <Outlet />
    </>
  );
};

export default Root;
