import { useEffect, useState } from "react";
import { AuthContext } from ".";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebaseConfiq";

const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(true);

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signInUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOutUser() {
    return signOut(auth);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (isRegister) return;
        setAuthData(user);
        setLoading(false);
      } else {
        // User is signed out
        // ...
      }
    });

    return () => {
      unSubscribe();
    };
  }, [isRegister]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div>
          <span className="loading loading-ball loading-xs"></span>
          <span className="loading loading-ball loading-sm"></span>
          <span className="loading loading-ball loading-md"></span>
          <span className="loading loading-ball loading-lg"></span>
          <span className="loading loading-ball loading-xl"></span>
        </div>
      </div>
    );
  }

  return (
    <>
      <AuthContext.Provider
        value={{
          authData,
          setAuthData,
          isRegister,
          setIsRegister,
          createUser,
          signInUser,
          logOutUser,
          setLoading,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
