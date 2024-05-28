export interface UserEntityOptions {
  _id: string;
  mail: string;
  userName: string;
  password: string;
  createdAt?: Date;
}

export class UserEntity {
  public _id: string;
  public mail: string;
  public userName: string;
  public password: string;
  public createdAt?: Date;

  constructor(options: UserEntityOptions) {
    const { _id, mail, userName, password, createdAt = new Date() } = options;
    this._id = _id;
    this.mail = mail;
    this.userName = userName;
    this.password = password;
    this.createdAt = createdAt;
  }
}
