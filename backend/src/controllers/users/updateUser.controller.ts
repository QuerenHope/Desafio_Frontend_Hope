import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { IUserUpdate } from "../../interfaces/user";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
	const { name, email, password }: IUserUpdate = req.body;
	const userId = req.params.id;
	const updatedUser = await updateUserService(
		{ name, email, password },
		userId
	);

	return res.json(instanceToPlain(updatedUser));
};

export default updateUserController;
