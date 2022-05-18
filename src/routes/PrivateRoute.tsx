import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "contexts/AuthContext";

export const PrivateRoute = () => {
  const { authorization } = useAuth();
  const location = useLocation();
  return authorization.isAuth ? <Outlet /> : <Navigate to="/login" state={{ fromVal: location }} replace />;
};
