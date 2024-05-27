import LoginForm from "../../components/auth/login.component";
import useLoginForm from "../../hooks/login.hook";

const LoginPage = () => {
  const data = useLoginForm();
  return <LoginForm {...data} />;
};

export default LoginPage;
