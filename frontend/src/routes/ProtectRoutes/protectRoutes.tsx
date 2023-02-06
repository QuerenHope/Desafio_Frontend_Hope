import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
	const token = window.localStorage.getItem("@cadastro-clientes:token");

	return token ? <Outlet /> : <Navigate to={"/login"} replace />;
};

export default ProtectedRoutes;
