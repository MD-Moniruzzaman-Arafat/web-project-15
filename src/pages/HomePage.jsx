import SocialLLogin from "../components/socialLogin/SocialLLogin";
import FindUsOn from "../components/findUsOn/FindUsOn";
import QZone from "../components/qZone/QZone";
import Ads from "../components/ads/Ads";
import { Outlet } from "react-router";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2 min-h-screen">
        <Outlet />

        <div className="lg:col-span-1 px-5 h-[1350px]">
          <SocialLLogin />
          <FindUsOn />
          <QZone />
          <Ads />
        </div>
      </div>
    </>
  );
};

export default HomePage;
