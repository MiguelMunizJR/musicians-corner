import { useNavigate, Outlet } from "react-router-dom";
import { ROUTES_PATH } from "../consts";
import { useEffect } from "react";

const ProtectedRoutes = ({ isLogin }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLogin) {
			console.log("You need to login to continue");
			navigate(ROUTES_PATH.LOGIN);
		}
	}, []);

	if (isLogin) {
		return <Outlet />;
	}
};

export default ProtectedRoutes;