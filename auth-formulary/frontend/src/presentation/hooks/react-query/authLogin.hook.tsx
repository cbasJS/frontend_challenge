import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getUserCallback } from "../../../infrastructure/api/auth/login.api";
import { ERROR_SERVER_MSG } from "../../../application/constants/copies.constant";
import { useNavigate } from "react-router-dom";

const useAuthLogin = (mail: string, password: string) => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  const {
    data: response,
    error,
    refetch,
    isFetching,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["getUser"],
    queryFn: () => getUserCallback(mail, password),
    enabled: false,
  });

  useEffect(() => {
    if (isSuccess) {
      if (response.status === "ok") {
        if (response.data) {
          navigate("/");
        } else {
          setErrorMsg(response.message);
        }
      } else {
        setErrorMsg(ERROR_SERVER_MSG);
      }
    }

    if (isError) {
      console.error(error);
      setErrorMsg(ERROR_SERVER_MSG);
    }
  }, [isSuccess, response, isError, error]);

  return {
    response,
    error,
    isFetching,
    refetch,
    errorMsg,
  };
};

export default useAuthLogin;
