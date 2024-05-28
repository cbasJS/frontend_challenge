import { validateEmail } from "../../application/utils/form.util";
import {
  LoginFieldName,
  LoginFormData,
} from "../../domain/entities/auth.entity";
import { useEffect, useState } from "react";

type ReturnProps = {} & LoginFormData;

const useLoginForm = (): ReturnProps => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisable, setSubmitButtonDisable] = useState(true);

  const setValueObject = {
    mail: (value: string) => setMail(value),
    password: (value: string) => setPassword(value),
  };

  const setInputValue = (nameOfField: LoginFieldName, value: string) => {
    setValueObject[nameOfField](value);
  };

  const validFields = () => {
    setErrorMsg("");
    if (!mail) {
      return false;
    } else if (!validateEmail(mail)) {
      setErrorMsg("El correo no cuenta con el formato requerido");
      return false;
    } else if (!password) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (validFields()) {
      setSubmitButtonDisable(false);
    } else {
      setSubmitButtonDisable(true);
    }
  }, [mail, password]);

  return {
    mail,
    password,
    errorMsg,
    submitButtonDisable,
    setInputValue,
  };
};

export default useLoginForm;
