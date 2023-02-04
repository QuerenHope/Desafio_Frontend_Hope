import { Request, Response } from "express";
import updateClientService from "../../services/clients/updateClients.service";
import { IClientUpdate } from "../../interfaces/clients";

const updateClientController = async (req: Request, res: Response) => {
	const { name, email, phone_number }: IClientUpdate = req.body;
	const clientId = req.params.id;
	const updatedUser = await updateClientService(
		{ name, email, phone_number },
		clientId
	);

	return res.json(updatedUser);
};

export default updateClientController;
