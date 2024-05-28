import { Request, Response } from "express";
import { UserModel } from "../../data/mongo";
import {
  cryptPassword,
  validateCryptPassword,
} from "../../config/plugins/bcrypt.plugins";
import { UserRepositoryImpl } from "../../infrastructure/repositories/user.repository.impl";
import { MongoUserDatasource } from "../../infrastructure/datasources/mongo-user.datasource";
import { generateJWT } from "../../config/plugins/jsonwebtoken.plugin";

export class UserController {
  //* DI
  constructor() {}

  public getUser = async (req: Request, res: Response) => {
    const password = req.query.password as string | undefined;
    const mail = req.query.mail as string | undefined;

    if (password && mail) {
      const userRepository = new UserRepositoryImpl(new MongoUserDatasource());
      const user = await userRepository.getUser(mail);

      if (user) {
        if (await validateCryptPassword(password, user.password)) {
          const token = await generateJWT(user.mail);
          return res.json({
            status: "ok",
            message: "Se ha iniciado sesión correctamente",
            data: {
              mail: user.mail,
              createdAt: user.createdAt,
              userName: user.userName,
              token,
            },
          });
        } else {
          return res.json({
            status: "ok",
            message: "El correo o contraseña es invalida",
            data: null,
          });
        }
      } else {
        return res.json({
          status: "ok",
          message: "El correo o contraseña es invalida",
          data: null,
        });
      }
    } else {
      return res
        .status(404)
        .json({ error: "Correo electronico y contraseña son requeridos" });
    }
  };

  public createUser = async (req: Request, res: Response) => {
    const { mail, userName, password } = req.body;

    if (!mail) {
      return res
        .status(400)
        .json({ error: "El correo electronico es requerido" });
    } else if (!userName) {
      return res.status(400).json({ error: "El username es requerido" });
    } else if (!password) {
      return res.status(400).json({ error: "La constraseña es requerida" });
    }
    if (mail && userName && password) {
      try {
        const hashPassword = await cryptPassword(password);

        await UserModel.create({
          mail,
          userName,
          password: hashPassword,
        });

        return res.json({
          status: "ok",
          message: "El usuario se a creado correctamente",
          data: null,
        });
      } catch (e: any) {
        if (e._message && e._message === "User validation failed") {
          return res
            .status(400)
            .json({ error: "El usuario o correo ya existe!" });
        }

        console.log(e);
        return res.status(500).json(e);
      }
    }
  };
}
