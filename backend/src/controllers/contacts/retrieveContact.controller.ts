import { Request, Response } from "express";
import retrieveContactService from "../../services/contacts/retrieveContact.service";

const retrieveContactController = async (req: Request, res: Response) => {
	const contactId = req.params.id;
	const contact = await retrieveContactService(contactId);

	return res.json(contact);
};

export default retrieveContactController;
