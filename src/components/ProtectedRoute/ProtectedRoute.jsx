import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedInUser, children }) {
  if (!isLoggedInUser) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
