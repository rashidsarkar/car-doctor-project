import { useContext } from "react";
import { AuthContexr } from "../firebase/AuthProvider";
import { Navigate } from "react-router-dom";
import CustomLoading from "../Components/CustomLoading";

function PrivateRoutes({ children }) {
  const { user, loading } = useContext(AuthContexr);
  if (loading) {
    return <CustomLoading></CustomLoading>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace></Navigate>;
}

export default PrivateRoutes;
