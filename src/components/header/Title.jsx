import logo from "../../assets/logo.png";

const Title = () => {
  return (
    <>
      <div className="flex flex-col gap-2 items-center my-5">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p className="font-bold">Sunday, November 27, 2022</p>
      </div>
    </>
  );
};

export default Title;
