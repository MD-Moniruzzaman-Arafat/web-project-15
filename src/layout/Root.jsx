import { Outlet } from "react-router";
import Title from "../components/header/Title";

const Root = () => {
  return (
    <>
      <Title />
      <Outlet />
    </>
  );
};

export default Root;
