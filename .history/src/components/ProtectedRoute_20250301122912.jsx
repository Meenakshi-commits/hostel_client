import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      element={(props) => {
        if (!user) {
          return <Navigate to="/login" />;
        }

        if (roles && roles.indexOf(user.role) === -1) {
          return <Navigate to="/unauthorized" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
