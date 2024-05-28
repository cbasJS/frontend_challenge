import { useLocalStorage } from "@uidotdev/usehooks";
import { UserAPIData } from "../../domain/entities/user.entity";
import { Navigate } from "react-router-dom";

const withAuth = (WrappedComponent: React.FC<any>) => {
  const Wrapped: React.FC<any> = (props) => {
    const [user] = useLocalStorage<UserAPIData | null>("user");

    if (!user) {
      return <Navigate to={"/login"} replace />;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapped;
};

export default withAuth;
