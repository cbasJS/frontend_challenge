import { useLocalStorage } from "@uidotdev/usehooks";
import { UserAPIData } from "../../domain/entities/user.entity";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent: React.FC<any>) => {
  const Wrapped: React.FC<any> = (props) => {
    const [user] = useLocalStorage<UserAPIData | null>("user");
    const navigate = useNavigate();

    useEffect(() => {
      if (user === null) {
        navigate("/login");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapped;
};

export default withAuth;
