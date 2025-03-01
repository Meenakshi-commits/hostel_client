import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ element: Component, roles, ...rest }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && roles.indexOf(user.role) === -1) {
    return <Navigate to="/unauthorized" />;
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
