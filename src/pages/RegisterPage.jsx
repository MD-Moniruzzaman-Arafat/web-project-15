import { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebaseConfiq";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    photoUrl: "",
    email: "",
    password: "",
    isChecked: false,
  });
  const { createUser } = useContext(AuthContext);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setRegisterData({
      ...registerData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleRegisterSubmit(e) {
    e.preventDefault();

    createUser(registerData.email, registerData.password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: registerData.userName,
          photoURL: registerData.photoUrl,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <>
      <div className="bg-base-300 max-w-2xl mx-auto py-20 rounded-lg">
        <h1 className="text-center font-bold text-2xl">
          Register your account
        </h1>
        <form
          onSubmit={handleRegisterSubmit}
          action=""
          className=" max-w-sm mx-auto flex flex-col justify-center mt-10"
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your Name</legend>
            <input
              name="userName"
              onChange={handleChange}
              value={registerData.userName}
              type="text"
              className="input w-full"
              placeholder="Enter your name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              name="photoUrl"
              onChange={handleChange}
              value={registerData.photoUrl}
              type="text"
              className="input w-full"
              placeholder="Enter your photo url"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              name="email"
              onChange={handleChange}
              value={registerData.email}
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
              value={registerData.password}
              type="password"
              className="input w-full"
              placeholder="Enter your password"
            />
          </fieldset>
          <p className="flex gap-2 items-center mt-2">
            <input
              type="checkbox"
              name="isChecked"
              onChange={handleChange}
              checked={registerData.isChecked}
              className="checkbox checkbox-xs"
            />
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
