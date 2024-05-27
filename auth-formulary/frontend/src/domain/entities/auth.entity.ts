export type FieldName = "mail" | "username" | "password" | "repeatPassword";
export type RegisterFormData = {
  mail: string;
  username: string;
  password: string;
  repeatPassword: string;
  errorMsg: string;
  submitButtonDisable: boolean
  onSubmit: React.FormEventHandler<HTMLFormElement>
  setInputValue: (nameOfField: FieldName, value: string) => void;
}
