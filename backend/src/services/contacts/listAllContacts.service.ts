import AppDataSource from "../../data-source";
import Contacts from "../../entities/contacts.entity";

const listAllContactsService = async (): Promise<Contacts[]> => {
	const contactsRepository = AppDataSource.getRepository(Contacts);
	const AllContacts = await contactsRepository.find({
		relations: { client: true },
	});

	return AllContacts;
};

export default listAllContactsService;
