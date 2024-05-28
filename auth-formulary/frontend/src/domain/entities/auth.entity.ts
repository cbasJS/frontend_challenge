export type RegisterFieldName = "mail" | "username" | "password" | "repeatPassword";
export type RegisterFormData = {
  mail: string;
  username: string;
  password: string;
  repeatPassword: string;
  errorMsg: string;
  submitButtonDisable: boolean
  onSubmit: React.FormEventHandler<HTMLFormElement>
  setInputValue: (nameOfField: RegisterFieldName, value: string) => void;
}

export type LoginFieldName = "mail" | "password"
export type LoginFormData = {
  mail: string;
  password: string;
  errorMsg: string;
  submitButtonDisable: boolean
  setInputValue: (nameOfField: LoginFieldName, value: string) => void;
}
