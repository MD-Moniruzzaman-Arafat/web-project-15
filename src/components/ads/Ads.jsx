import bg from "../../assets/bg1.png";
const Ads = () => {
  return (
    <>
      <div
        className="mt-5 py-10 px-5 text-center"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "40%",
        }}
      >
        <h1 className="text-white text-4xl font-extrabold">
          Create an Amazing Newspaper
        </h1>
        <p className="text-white my-10">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="btn bg-[#D72050] shadow-none border-0 text-white">
          Learn More
        </button>
      </div>
    </>
  );
};

export default Ads;
