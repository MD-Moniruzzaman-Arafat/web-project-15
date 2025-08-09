import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <>
      <div className="bg-base-300 max-w-2xl mx-auto py-20 rounded-lg">
        <h1 className="text-center font-bold text-2xl">
          Register your account
        </h1>
        <form
          action=""
          className=" max-w-sm mx-auto flex flex-col justify-center mt-10"
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter your name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter your photo url"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter your email address"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input w-full"
              placeholder="Enter your password"
            />
          </fieldset>
          <p className="flex gap-2 items-center mt-2">
            <input type="checkbox" className="checkbox checkbox-xs" />
            Accept Term & Conditions
          </p>

          <button className="btn btn-block mt-5 bg-black text-white">
            Register
          </button>
        </form>
        <p className="text-center text-xs mt-5 font-semibold">
          Have An Account ?{" "}
          <Link to={"/login"} className="text-[#FF8C47]">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default RegisterPage;
