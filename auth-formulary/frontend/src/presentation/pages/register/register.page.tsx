import RegisterForm from "../../components/auth/register.component";
import DialogAccountCreated from "../../components/dialog/accountCreated.component";
import { useNavigate } from "react-router-dom";
import useRegisterForm from "../../hooks/register.hook";
import { useState } from "react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const { ...data } = useRegisterForm(setIsDialogOpen);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    navigate("/login");
  };

  return (
    <>
      <RegisterForm {...data} />
      <DialogAccountCreated isOpen={isDialogOpen} close={handleCloseDialog} />
    </>
  );
};

export default RegisterPage;
