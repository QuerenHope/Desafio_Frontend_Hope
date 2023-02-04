import AppDataSource from "../../data-source";
import Clients from "../../entities/clients.entity";
import Contacts from "../../entities/contacts.entity";
import AppError from "../../errors/AppError";
import { IClientRequest } from "../../interfaces/clients";

const createClientService = async ({
	name,
	email,
	phone_number,
	// contacts,
}: IClientRequest): Promise<Clients> => {
	const clientRepository = AppDataSource.getRepository(Clients);
	const contactRepository = AppDataSource.getRepository(Contacts);

	const clients = await clientRepository.find();

	const emailAlredyExists = clients.find((client) => client.email === email);

	if (emailAlredyExists) {
		throw new AppError("Email already exists.");
	}

	const createdClient = clientRepository.create({
		name,
		email,
		phone_number,
	});

	const contactsList: Contacts[] = [];

	// for (const { name, email, phone_number } of contacts) {
	// 	const newContact = contactRepository.create({
	// 		name,
	// 		email,
	// 		phone_number,
	// 		client: createdClient,
	// 	});
	// 	await contactRepository.save(newContact);
	// 	contactsList.push(newContact);
	// }

	// createdClient.contacts = contactsList;

	createdClient.contacts = []

	await clientRepository.save(createdClient);

	return createdClient;
};

export default createClientService;
