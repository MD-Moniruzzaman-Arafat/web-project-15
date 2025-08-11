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
      } else {
        // User is signed out
        // ...
      }
    });

    return () => {
      unSubscribe();
    };
  }, [isRegister]);

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
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
