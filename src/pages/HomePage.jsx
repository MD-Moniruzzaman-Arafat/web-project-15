import Category from "../components/category/Category";
import SmallCard from "../components/smallCard/SmallCard";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-2">
        <div className="lg:col-span-1 px-5">
          <Category />
          <div className="flex flex-col gap-5 my-5">
            <SmallCard img={img1} />
            <SmallCard img={img2} />
            <SmallCard img={img3} />
          </div>
        </div>
        <div className="lg:col-span-2 bg-amber-950">a</div>
        <div className="lg:col-span-1 bg-blue-600">d</div>
      </div>
    </>
  );
};

export default HomePage;
