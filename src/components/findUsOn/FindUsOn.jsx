import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";

const FindUsOn = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="font-bold mb-3">Find Us On</h1>
        <ul className="border border-base-300 rounded-md">
          <li className="border-b-1 border-base-300 py-3 px-3">
            <a href="" className="text-xs flex items-center gap-2">
              <span className="bg-base-300 p-1 rounded-full">
                <FaFacebookF className="text-blue-900" />
              </span>
              Facebook
            </a>
          </li>
          <li className="border-b-1 border-base-300 py-3 px-3">
            <a href="" className="text-xs flex items-center gap-2">
              <span className="bg-base-300 p-1 rounded-full">
                <IoLogoTwitter className="text-blue-400" />
              </span>
              Twitter
            </a>
          </li>
          <li className="py-3 px-3">
            <a href="" className="text-xs flex items-center gap-2">
              <span className="bg-base-300 p-1 rounded-full">
                <FaInstagram className="text-orange-500" />
              </span>
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FindUsOn;
