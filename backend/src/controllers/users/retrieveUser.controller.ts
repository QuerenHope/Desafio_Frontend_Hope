import { Request, Response } from "express";
import retrieveUserService from "../../services/users/retrieveUser.service";
import { instanceToPlain } from "class-transformer";

const retrieveUserController = async (req: Request, res: Response) => {
	const userId = req.params.id;
	const findUser = await retrieveUserService(userId);

	return res.json(instanceToPlain(findUser));
};

export default retrieveUserController;
