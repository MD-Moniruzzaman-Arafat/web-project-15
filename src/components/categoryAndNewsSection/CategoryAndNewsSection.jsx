import { useContext } from "react";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import Category from "../category/Category";
import NewsCard from "../newsCard/NewsCard";
import SmallCard from "../smallCard/SmallCard";
import { NewsContext } from "../../context";

const CategoryAndNewsSection = () => {
  const { news } = useContext(NewsContext);
  return (
    <>
      <div className="lg:col-span-1 px-5 h-[1350px]">
        <Category />
        <div className="flex flex-col gap-5 my-5">
          <SmallCard img={img1} />
          <SmallCard img={img2} />
          <SmallCard img={img3} />
        </div>
      </div>
      <div className="lg:col-span-2  overflow-y-scroll h-[1600px]">
        <h1 className="font-semibold py-3 text-gray-400">Dragon News Home</h1>
        {news.map((n) => (
          <NewsCard key={n._id} news={n} />
        ))}
      </div>
    </>
  );
};

export default CategoryAndNewsSection;
