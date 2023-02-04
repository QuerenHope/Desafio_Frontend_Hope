import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";
import { IUserRequest } from "../../interfaces/user";

const creteUserController = async (req: Request, res: Response) => {
	const { name, email, password, isAdmin }: IUserRequest = req.body;
	const newUser = await createUserService({
		name,
		email,
		password,
		isAdmin,
	});

	return res.status(201).send(instanceToPlain(newUser));
};

export default creteUserController;
