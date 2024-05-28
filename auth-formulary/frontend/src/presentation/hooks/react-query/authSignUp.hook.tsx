import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { UserAPIBody } from "../../../domain/entities/user.entity";
import { useEffect, useState } from "react";
import { ERROR_SERVER_MSG } from "../../../application/constants/copies.constant";

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
        setErrorMsg(ERROR_SERVER_MSG);
      }
    }

    if (isError) {
      // @ts-ignore
      if (error.response.data) {
        // @ts-ignore
        const { error: errorMessage } = error.response.data;
        if (errorMessage) {
          setErrorMsg(errorMessage);
        } else {
          setErrorMsg(ERROR_SERVER_MSG);
        }
      } else {
        setErrorMsg(ERROR_SERVER_MSG);
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
