import AppDataSource from "../../data-source";
import Clients from "../../entities/clients.entity";
import Contacts from "../../entities/contacts.entity";
import AppError from "../../errors/AppError";
import { IContactRequest } from "../../interfaces/contacts";

const createContactService = async ({
	name,
	email,
	phone_number,
	clientId,
}: IContactRequest): Promise<Contacts> => {
	const contactRepository = AppDataSource.getRepository(Contacts);
	const clientRepository = AppDataSource.getRepository(Clients);

	const client = await clientRepository.findOneBy({ id: clientId });

	if (!client) {
		throw new AppError("Client not found", 404);
	}

	const createdContact = contactRepository.create({
		name,
		email,
		phone_number,
		client: client,
	});

	await contactRepository.save(createdContact);

	return createdContact;
};

export default createContactService;
