import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { signInUser, setIsRegister } = useContext(AuthContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  function handleSignInSubmit(e) {
    e.preventDefault();
    setIsRegister(false);
    signInUser(loginData.email, loginData.password)
      .then((result) => {
        if (result.user) {
          navigate("/");
        }
      })
      .catch(() => {});
  }

  return (
    <>
      <div className="bg-base-300 max-w-2xl mx-auto py-20 rounded-lg">
        <h1 className="text-center font-bold text-2xl">Login your account</h1>
        <form
          onSubmit={handleSignInSubmit}
          action=""
          className=" max-w-sm mx-auto flex flex-col justify-center mt-10"
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input
              name="email"
              onChange={handleChange}
              value={loginData.email}
              type="email"
              className="input w-full"
              placeholder="Enter your email address"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              name="password"
              onChange={handleChange}
              value={loginData.password}
              type="password"
              className="input w-full"
              placeholder="Enter your password"
            />
          </fieldset>

          <button className="btn btn-block mt-5 bg-black text-white">
            Login
          </button>
        </form>
        <p className="text-center text-xs mt-5 font-semibold">
          Dont’t Have An Account ?{" "}
          <Link to={"/register"} className="text-[#FF8C47]">
            Register
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
