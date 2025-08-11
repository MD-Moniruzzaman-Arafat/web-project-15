import { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context";

const Navbar = () => {
  const { authData, setAuthData, logOutUser } = useContext(AuthContext);

  function handleLogOut() {
    logOutUser()
      .then(() => {
        setAuthData("");
        console.log(authData);
      })
      .catch(() => {});
  }

  const menus = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Career</a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar container mx-auto my-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menus}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menus}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={
                  authData?.photoURL
                    ? authData.photoURL
                    : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                }
              />
            </div>
          </div>
          {authData ? (
            <Link
              onClick={handleLogOut}
              className="btn bg-[#403F3F] text-white px-10"
            >
              Log out
            </Link>
          ) : (
            <Link to={"/login"} className="btn bg-[#403F3F] text-white px-10">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
