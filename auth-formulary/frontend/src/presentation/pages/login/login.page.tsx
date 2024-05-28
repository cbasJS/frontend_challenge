import LoginForm from "../../components/auth/login.component";
import useLoginForm from "../../hooks/login.hook";
import useAuthLogin from "../../hooks/react-query/authLogin.hook";

const LoginPage = () => {
  const data = useLoginForm();
  const { refetch, isFetching, errorMsg } = useAuthLogin(
    data.mail,
    data.password
  );

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!data.submitButtonDisable) {
      await refetch();
    }
  };

  return (
    <LoginForm
      {...data}
      onSubmit={onSubmit}
      isSubmitPending={isFetching}
      errorMsg={errorMsg || data.errorMsg}
    />
  );
};

export default LoginPage;
