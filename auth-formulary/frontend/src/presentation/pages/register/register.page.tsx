import RegisterForm from "../../components/auth/register.component";
import DialogAccountCreated from "../../components/dialog/accountCreated.component";
import { useNavigate } from "react-router-dom";
import useRegisterForm from "../../hooks/register.hook";
import { useState } from "react";
import useAuthSignUp from "../../hooks/react-query/authSignUp.hook";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { mutate, isPending, errorMsg } = useAuthSignUp(setIsDialogOpen);
  const data = useRegisterForm(mutate);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    navigate("/login");
  };

  return (
    <>
      <RegisterForm
        {...data}
        isSubmitPending={isPending}
        errorMsg={errorMsg || data.errorMsg}
      />
      <DialogAccountCreated isOpen={isDialogOpen} close={handleCloseDialog} />
    </>
  );
};

export default RegisterPage;
