import QZoneImage from "./QZoneImage";
import img1 from "../../assets/qZone1.png";
import img2 from "../../assets/qZone2.png";
import img3 from "../../assets/qZone3.png";

const QZone = () => {
  return (
    <>
      <div className="bg-base-300">
        <h1 className="font-bold py-3 px-3">Q-Zone</h1>
        <div className="py-3">
          <QZoneImage img={img1} />
          <QZoneImage img={img2} />
          <QZoneImage img={img3} />
        </div>
      </div>
    </>
  );
};

export default QZone;
