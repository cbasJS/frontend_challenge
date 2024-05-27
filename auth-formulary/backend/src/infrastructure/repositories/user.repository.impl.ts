import { UserDataSource } from "../../domain/datasources/user.datasource";
import { UserEntity } from "../../domain/entities/user.entity";
import { UserRepository } from "../../domain/repository/user.repository";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDatasource: UserDataSource) {}

  async saveUser(user: UserEntity): Promise<void> {
    return this.userDatasource.saveUser(user);
  }

  async getUser(mail: string): Promise<UserEntity | null> {
    return this.userDatasource.getUser(mail);
  }
}
