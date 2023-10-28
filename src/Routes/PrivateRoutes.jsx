import { useContext } from "react";
import { AuthContexr } from "../firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import CustomLoading from "../Components/CustomLoading";

function PrivateRoutes({ children }) {
  const { user, loading } = useContext(AuthContexr);
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return <CustomLoading></CustomLoading>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
}

export default PrivateRoutes;
