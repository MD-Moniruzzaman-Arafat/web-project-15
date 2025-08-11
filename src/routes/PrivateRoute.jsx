import { useContext } from "react";
import { AuthContext } from "../context";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { authData } = useContext(AuthContext);
  return <>{authData ? children : <Navigate to={"/login"} replace />}</>;
};

export default PrivateRoute;
