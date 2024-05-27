import { Router } from "express";
import { UserRoutes } from "./user/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/sign-up", UserRoutes.routes);
    router.use("/api/login", UserRoutes.routes);

    return router;
  }
}
