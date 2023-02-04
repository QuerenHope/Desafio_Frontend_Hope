import { Router } from "express";

import authMiddleware from "../middlewares/auth.middleware";

import creteUserController from "../controllers/users/createUser.controller";
import listAllUsersController from "../controllers/users/listAllUsers.controller";
import retrieveUserController from "../controllers/users/retrieveUser.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import disableUserController from "../controllers/users/disableUser.constroller";

const userRoutes = Router();

userRoutes.post("", creteUserController);
userRoutes.get("", authMiddleware, listAllUsersController);
userRoutes.get("/:id", authMiddleware, retrieveUserController);
userRoutes.patch("/:id", authMiddleware, updateUserController);
userRoutes.delete("/:id", authMiddleware, disableUserController);

export default userRoutes;
