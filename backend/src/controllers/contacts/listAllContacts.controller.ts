import { Request, Response } from "express";
import listAllContactsService from "../../services/contacts/listAllContacts.service";

const listAllContactsController = async (req: Request, res: Response) => {
	const allContacts = await listAllContactsService();

	return res.json(allContacts);
};

export default listAllContactsController;
