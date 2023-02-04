import { Request, Response } from "express";
import deleteClient from "../../services/clients/deleteClient.service";

const deleteClientController = async (req: Request, res: Response) => {
	const clientId: string = req.params.id;
	await deleteClient(clientId);

	return res.status(204).send();
};

export default deleteClientController;
