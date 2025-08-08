import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";
import newsImg from "../../assets/editorsInsight1.png";
import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";

const NewsCard = () => {
  return (
    <>
      <div className="border border-base-300 my-5">
        <div className="bg-base-300 flex justify-between p-5">
          <div className="flex items-center gap-2">
            <div className="avatar">
              <div className="ring-primary w-10 h-10 ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold">Awlad Hossain</p>
              <p className="text-xs">2022-08-21</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <IoBookmarkOutline />
            <IoShareSocialOutline />
          </div>
        </div>
        <div className="p-5">
          <h1 className="font-bold">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
            Aid Package Yet
          </h1>
          <img src={newsImg} alt="" className="w-full my-3" />
          <p className="text-[#706F6F] text-sm text-justify my-3">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
            Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine,
            United States, Worthy News (Worthy News) – U.S. President Joe Biden
            has announced nearly $3 billion in new U.S. military a...{" "}
            <span className="text-[#FF8C47]">Read More</span>
          </p>
          <div className="flex justify-between py-3 border-t-1 border-base-300">
            <div className="flex  items-center gap-1">
              <FaStar className="text-[#FF8C47]" />
              <FaStar className="text-[#FF8C47]" />
              <FaStar className="text-[#FF8C47]" />
              <FaStar className="text-[#FF8C47]" />
              <FaStar className="text-[#FF8C47]" />
              4.9
            </div>
            <div className="flex gap-2 items-center">
              <IoMdEye />
              499
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
