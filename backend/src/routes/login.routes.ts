import { Router } from "express";
import loginUserController from "../controllers/login/loginUser.controller";

const loginRouter = Router();

loginRouter.post("/users", loginUserController);

export default loginRouter;
