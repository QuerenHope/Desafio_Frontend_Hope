import { Request, Response } from "express";
import { IContactRequest } from "../../interfaces/contacts";
import createContactService from "../../services/contacts/createContact.service";

const createdContactController = async (req: Request, res: Response) => {
	const { name, email, phone_number, clientId }: IContactRequest = req.body;
	const newContact = await createContactService({
		name,
		email,
		phone_number,
		clientId,
	});

	return res.status(201).send(newContact);
};

export default createdContactController;
