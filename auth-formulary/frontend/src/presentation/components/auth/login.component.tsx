import { Link } from "react-router-dom";
import LayoutAuthForm from "./layout.component";
import { LoginFormData } from "../../../domain/entities/auth.entity";
import Spinner from "../spinner/spinner.component";

type Props = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  isSubmitPending: boolean;
} & LoginFormData;

const LoginForm: React.FC<Props> = ({
  onSubmit,
  submitButtonDisable,
  errorMsg,
  setInputValue,
  isSubmitPending,
  ...data
}) => {
  return (
    <LayoutAuthForm title="Entrar">
      <form className="space-y-6" onSubmit={onSubmit}>
        <div>
          <label
            className="block text-sm font-medium leading-6 text-gray-900"
            htmlFor="email"
          >
            Correo electronico <span className="text-red-500">*</span>
          </label>
          <div className="mt-2">
            <input
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="email"
              name="email"
              value={data.mail}
              onChange={(e) => setInputValue("mail", e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor="password"
            >
              Contraseña <span className="text-red-500">*</span>
            </label>
          </div>
          <div className="mt-2">
            <input
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              id="password"
              name="password"
              type="password"
              value={data.password}
              onChange={(e) => setInputValue("password", e.target.value)}
            />
          </div>
        </div>
        {errorMsg && (
          <div>
            <p className=" text-red-500">{errorMsg}</p>
          </div>
        )}

        <div>
          <button
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed"
            type="submit"
            disabled={submitButtonDisable || isSubmitPending}
          >
            Entrar{" "}
            {isSubmitPending && (
              <span className="ml-2">
                <Spinner />
              </span>
            )}
          </button>
        </div>
      </form>

      <p className="mt-10 text-center text-sm text-gray-500">
        <Link
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          to="/register"
        >
          Crear cuenta
        </Link>
      </p>
    </LayoutAuthForm>
  );
};

export default LoginForm;
