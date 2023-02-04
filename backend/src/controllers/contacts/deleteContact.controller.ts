import { Request, Response } from "express";
import deleteContactService from "../../services/contacts/deleteContact.service";

const deleteContactController = async (req: Request, res: Response) => {
	const contactId = req.params.id;
	await deleteContactService(contactId);

	return res.status(204).send();
};

export default deleteContactController;
