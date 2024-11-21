import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/auth/login"} />;
};

export default PrivateRoute;