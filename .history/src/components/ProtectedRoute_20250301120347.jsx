import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ component: Component, roles, ...rest }) => {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          return <Redirect to="/login" />;
        }

        if (roles && roles.indexOf(user.role) === -1) {
          return <Redirect to="/unauthorized" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
