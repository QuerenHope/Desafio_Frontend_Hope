import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard/dashboard";
import Login from "../pages/Login/login";
import Registration from "../pages/Registration/registration";
import ProtectedRoutes from "./ProtectRoutes/protectRoutes";



const AllRoutes = () => {
	return (
		<Routes>
			<Route path="*" element={<Navigate to="/login" />} />
			<Route path="/login" element={<Login />} />
			<Route path="/registration" element={<Registration />} />
			<Route element={<ProtectedRoutes />}>
				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
		</Routes>
	);
};

export default AllRoutes;
