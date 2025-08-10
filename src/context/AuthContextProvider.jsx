import { useEffect, useState } from "react";
import { AuthContext } from ".";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import auth from "../firebase/firebaseConfiq";

const AuthContextProvider = ({ children }) => {
  const [authData, setAuthData] = useState(null);
  const [isRegister, setIsRegister] = useState(true);

  function createUser(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (isRegister) return;
        setAuthData(user);
      } else {
        // User is signed out
        // ...
      }
    });

    return () => {
      unSubscribe();
    };
  }, [auth, isRegister]);

  return (
    <>
      <AuthContext.Provider
        value={{ authData, setAuthData, isRegister, setIsRegister, createUser }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
