import { Request, Response } from "express";
import { IClientRequest } from "../../interfaces/clients";
import createClientService from "../../services/clients/createClient.service";

const createClientController = async (req: Request, res: Response) => {
	const { name, email, phone_number }: IClientRequest = req.body;
	const newClient = await createClientService({
		name,
		email,
		phone_number,
		// contacts,
	});

	return res.status(201).send(newClient);
};

export default createClientController;
