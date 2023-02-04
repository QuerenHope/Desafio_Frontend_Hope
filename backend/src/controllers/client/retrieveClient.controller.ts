import { Request, Response } from "express";
import restrieveClientService from "../../services/clients/retrieveClient.service";

const retrieveClientController = async (req: Request, res: Response) => {
	const clientId = req.params.id;
	const client = await restrieveClientService(clientId);

	return res.json(client);
};

export default retrieveClientController;
