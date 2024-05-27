import { useState } from "react";
import RegisterForm from "../../components/auth/register.component";
import DialogAccountCreated from "../../components/dialog/accountCreated.component";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const navigate = useNavigate();

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    navigate("/login");
  };

  return (
    <>
      <RegisterForm />
      <DialogAccountCreated isOpen={isDialogOpen} close={handleCloseDialog} />
    </>
  );
};

export default RegisterPage;
