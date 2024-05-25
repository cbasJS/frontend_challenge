import { Request, Response } from "express";
import { UserModel } from "../../data/mongo";
import { cryptPassword } from "../../config/plugins/bcrypt.plugins";

export class UserController {
  //* DI
  constructor() {}

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
