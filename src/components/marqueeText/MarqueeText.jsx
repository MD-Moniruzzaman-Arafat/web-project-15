import Marquee from "react-fast-marquee";

const MarqueeText = () => {
  return (
    <>
      <div className="container mx-auto bg-base-300 p-5 rounded-lg flex items-center gap-5">
        <button className="btn bg-[#D72050] text-white ">Latest</button>
        <Marquee>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </>
  );
};

export default MarqueeText;
