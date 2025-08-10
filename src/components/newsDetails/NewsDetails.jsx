import { GoArrowLeft } from "react-icons/go";
import EditorsInsight from "../editorsInsight/EditorsInsight";
import { useContext } from "react";
import { NewsDetailsContext } from "../../context";

const NewsDetails = () => {
  const { newsDetails } = useContext(NewsDetailsContext);
  console.log(newsDetails);
  return (
    <>
      <div className="lg:col-span-3 px-5 h-[2400px] lg:h-[1350px]">
        <h1 className="font-semibold py-3 text-gray-400">Dragon News</h1>
        <div className="border border-base-300 my-5">
          <div className="p-5">
            <img
              src={newsDetails?.thumbnail_url}
              alt=""
              className="w-full my-3"
            />
            <h1 className="font-bold text-3xl">{newsDetails?.title}</h1>
            <p className="text-[#706F6F] text-sm text-justify my-3">
              {newsDetails?.details}
            </p>
            <button className="btn bg-[#D72050] text-white">
              <GoArrowLeft />
              All news in this category
            </button>
          </div>
        </div>
        <EditorsInsight />
      </div>
    </>
  );
};

export default NewsDetails;
