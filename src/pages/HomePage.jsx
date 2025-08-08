import Category from "../components/category/Category";
import SmallCard from "../components/smallCard/SmallCard";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import NewsCard from "../components/newsCard/NewsCard";
import SocialLLogin from "../components/socialLogin/SocialLLogin";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2 min-h-screen">
        <div className="lg:col-span-1 px-5 h-[1350px]">
          <Category />
          <div className="flex flex-col gap-5 my-5">
            <SmallCard img={img1} />
            <SmallCard img={img2} />
            <SmallCard img={img3} />
          </div>
        </div>
        <div className="lg:col-span-2  overflow-y-scroll h-[1350px]">
          <h1 className="font-semibold py-3 text-gray-400">Dragon News Home</h1>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <div className="lg:col-span-1 px-5 h-[1350px]">
          <SocialLLogin />
        </div>
      </div>
    </>
  );
};

export default HomePage;
