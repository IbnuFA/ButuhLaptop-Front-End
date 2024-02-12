import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoutes = () => {
  const { user, isSuccess } = useSelector((state) => state.auth);

  if (user && isSuccess && user.role !== "admin") {
    return <Navigate to="/user" replace />;
  }

  return <Outlet />;
};

export default AdminRoutes;
