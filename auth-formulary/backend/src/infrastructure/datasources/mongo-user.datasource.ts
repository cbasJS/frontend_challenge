import { UserModel } from "../../data/mongo/models/user.model";
import { UserDataSource } from "../../domain/datasources/user.datasource";
import { UserEntity } from "../../domain/entities/user.entity";

export class MongoUserDatasource implements UserDataSource {
  async saveUser(user: UserEntity): Promise<void> {
    await UserModel.create(user);
  }

  async getUser(mail: string): Promise<UserEntity | null> {
    const user = (await UserModel.findOne({ mail })) as UserEntity | null;
    return user;
  }
}
