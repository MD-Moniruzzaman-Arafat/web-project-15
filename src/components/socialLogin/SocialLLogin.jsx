import { IoLogoGoogle } from "react-icons/io5";
import { VscGithubInverted } from "react-icons/vsc";

const SocialLLogin = () => {
  return (
    <>
      <div>
        <h1 className="font-semibold py-3 text-gray-400">Login With</h1>
        <div>
          <button className="btn btn-outline w-full border-blue-500 text-blue-500 text-xs my-1">
            <IoLogoGoogle />
            Login With Google
          </button>
          <button className="btn btn-outline w-full  text-black text-xs my-1">
            <VscGithubInverted />
            Login With Github
          </button>
        </div>
      </div>
    </>
  );
};

export default SocialLLogin;
