import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contacts";
import updateContactService from "../../services/contacts/updateContact.service";

const updateContactController = async (req: Request, res: Response) => {
	const { name, email, phone_number }: IContactRequest = req.body;
	const contactId = req.params.id;
	const contact = await updateContactService(
		{ name, email, phone_number },
		contactId
	);

	return res.json(contact);
};

export default updateContactController;
