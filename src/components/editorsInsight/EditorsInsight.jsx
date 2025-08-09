import SmallCard from "../smallCard/SmallCard";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";

const EditorsInsight = () => {
  return (
    <>
      <div>
        <h1 className="font-bold">Editors Insight</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          <SmallCard img={img1} />
          <SmallCard img={img2} />
          <SmallCard img={img3} />
        </div>
      </div>
    </>
  );
};

export default EditorsInsight;
