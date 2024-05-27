import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { UserAPIBody } from "../../../domain/entities/user.entity";
import { useEffect, useState } from "react";

const useAuthSignUp = (
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const [errorMsg, setErrorMsg] = useState("");
  const { mutate, isSuccess, isError, isPending, data, error } = useMutation({
    mutationFn: (newUser: UserAPIBody) => {
      return axios.post(`${import.meta.env.VITE_API_URL}/api/sign-up`, newUser);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      if (data.data.status === "ok") {
        setIsDialogOpen(true);
      } else {
        setErrorMsg(
          "Ha ocurrido un error inesperado. Consulta con el equipo de soporte para mas informacion."
        );
      }
    }

    if (isError) {
      if (error.response.data) {
        const { error: errorMessage } = error.response.data;
        if (errorMessage) {
          setErrorMsg(errorMessage);
        } else {
          setErrorMsg(
            "Ha ocurrido un error inesperado. Consulta con el equipo de soporte para mas informacion."
          );
        }
      } else {
        setErrorMsg(
          "Ha ocurrido un error inesperado. Consulta con el equipo de soporte para mas informacion."
        );
      }
    }
  }, [isSuccess, data, isError, error]);

  return {
    mutate,
    isPending,
    errorMsg,
  };
};

export default useAuthSignUp;
