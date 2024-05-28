import { useLocalStorage } from "@uidotdev/usehooks";
import withAuth from "../../hocs/withAuth.hoc";
import { UserAPIData } from "../../../domain/entities/user.entity";
import { Link } from "react-router-dom";
import UserSpec from "../../components/user/spec.component";

const HomePage = () => {
  const [user, setUser] = useLocalStorage<UserAPIData | null>("user");

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Welcome {user?.userName || ""} a Fisphera challange - Auth formulary
            extra bonus
          </h2>

          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Estos son los datos de tu cuenta
          </p>
          <UserSpec title="Fecha de creación:" spec={user?.createdAt || ""} />
          <UserSpec title="Mail:" spec={user?.mail || ""} />
          <UserSpec title="Token:" spec={user?.token || ""} />
          <UserSpec title="Usernam:" spec={user?.userName || ""} />
        </div>
        <p className="mt-10 text-center text-sm">
          <Link
            className="font-semibold leading-6 text-red-600"
            to="/login"
            onClick={() => setUser(null)}
          >
            Cerrar sesión
          </Link>
        </p>
      </div>
    </div>
  );
};

export default withAuth(HomePage);
