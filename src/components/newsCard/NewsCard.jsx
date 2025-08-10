import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router";
import { useContext } from "react";
import { NewsDetailsContext } from "../../context";

const NewsCard = ({ news }) => {
  const { setNewsDetails } = useContext(NewsDetailsContext);
  return (
    <>
      <Link to={"/news-details"} onClick={() => setNewsDetails(news)}>
        <div className="border border-base-300 my-5">
          <div className="bg-base-300 flex justify-between p-5">
            <div className="flex items-center gap-2">
              <div className="avatar">
                <div className="ring-primary w-10 h-10 ring-offset-base-100 rounded-full ring-2 ring-offset-2">
                  <img src={news?.author?.img} />
                </div>
              </div>
              <div>
                <p className="text-xs font-bold">{news?.author?.name}</p>
                <p className="text-xs">{news?.author?.published_date}</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <IoBookmarkOutline />
              <IoShareSocialOutline />
            </div>
          </div>
          <div className="p-5">
            <h1 className="font-bold">{news?.title}</h1>
            <img src={news?.thumbnail_url} alt="" className="w-full my-3" />
            <p className="text-[#706F6F] text-sm text-justify my-3">
              {news?.details.slice(0, 200)}
              ... <span className="text-[#FF8C47]">Read More</span>
            </p>
            <div className="flex justify-between py-3 border-t-1 border-base-300">
              <div className="flex  items-center gap-1">
                <FaStar className="text-[#FF8C47]" />
                <FaStar className="text-[#FF8C47]" />
                <FaStar className="text-[#FF8C47]" />
                <FaStar className="text-[#FF8C47]" />
                <FaStar className="text-[#FF8C47]" />
                {news?.rating?.number}
              </div>
              <div className="flex gap-2 items-center">
                <IoMdEye />
                {news?.total_view}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default NewsCard;
