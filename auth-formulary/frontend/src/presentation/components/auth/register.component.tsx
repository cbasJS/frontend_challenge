import { Link } from "react-router-dom";
import LayoutAuthForm from "./layout.component";

const RegisterForm = () => {
  return (
    <LayoutAuthForm title="Crear cuenta">
      <form className="space-y-6">
        <div>
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="email"
          >
            Correo electronico
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="email"
              name="email"
            />
          </div>
        </div>

        <div>
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="username"
          >
            Username
          </label>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="username"
              name="username"
              type="text"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="password"
            >
              Contraseña
            </label>
          </div>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="password"
              name="password"
              type="password"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="repeat-password"
            >
              Confirmar contraseña
            </label>
          </div>
          <div className="mt-2">
            <input
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="repeat-password"
              name="repeat-password"
              type="text"
            />
          </div>
        </div>
        <div>
          <p className=" text-red-500">
            Lorem aute ipsum exercitation esse cillum nisi ullamco
          </p>
        </div>
        <div>
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            type="submit"
          >
            Crear
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        <Link
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          to="/login"
        >
          Ya tengo cuenta
        </Link>
      </p>
    </LayoutAuthForm>
  );
};

export default RegisterForm;
