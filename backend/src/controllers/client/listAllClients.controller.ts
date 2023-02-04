import { Request, Response } from "express";
import listAllClientsService from "../../services/clients/listAllClients.service";

const listAllClientsController = async (req: Request, res: Response) => {
	const allClients = await listAllClientsService();

	return res.json(allClients);
};

export default listAllClientsController;
