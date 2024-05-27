import { UserEntity } from "../entities/user.entity";

export abstract class UserDataSource {
  abstract saveUser(user: UserEntity): Promise<void>;
  abstract getUser(mail: string): Promise<UserEntity | null>;
}
