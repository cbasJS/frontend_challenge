import { useEffect, useState } from "react";
import {
  RegisterFieldName,
  RegisterFormData,
} from "../../domain/entities/auth.entity";
import { validateEmail } from "../../application/utils/form.util";

type ReturnProps = {} & RegisterFormData;

const useRegisterForm = (
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
): ReturnProps => {
  const [mail, setMail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(true);

  const setValueObject = {
    mail: (value: string) => setMail(value),
    username: (value: string) => setUsername(value),
    password: (value: string) => setPassword(value),
    repeatPassword: (value: string) => setRepeatPassword(value),
  };

  const setInputValue = (nameOfField: RegisterFieldName, value: string) => {
    setValueObject[nameOfField](value);
  };

  const validFields = () => {
    setErrorMsg("");
    if (!mail) {
      return false;
    } else if (!validateEmail(mail)) {
      setErrorMsg("El correo no cuenta con el formato requerido");
      return false;
    } else if (!username) {
      return false;
    } else if (!password) {
      return false;
    } else if (!repeatPassword) {
      return false;
    } else if (repeatPassword !== password) {
      setErrorMsg("Las contraseñas no coinciden");
      return false;
    }
    return true;
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!submitButtonDisable) {
      setIsDialogOpen(true);
    }
  };

  useEffect(() => {
    if (validFields()) {
      setSubmitButtonDisable(false);
    } else {
      setSubmitButtonDisable(true);
    }
  }, [mail, username, password, repeatPassword]);

  return {
    mail,
    username,
    password,
    repeatPassword,
    errorMsg,
    submitButtonDisable,
    setInputValue,
    onSubmit,
  };
};

export default useRegisterForm;
