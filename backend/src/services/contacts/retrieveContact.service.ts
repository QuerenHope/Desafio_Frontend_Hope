import AppDataSource from "../../data-source";
import Contacts from "../../entities/contacts.entity";
import AppError from "../../errors/AppError";
import { IContact } from "../../interfaces/contacts";

const retrieveContactService = async (contactId: string): Promise<IContact> => {
	const contactsRepository = AppDataSource.getRepository(Contacts);
	const contact = contactsRepository.findOneOrFail({
		where: { id: contactId },
		relations: { client: true },
	});

	if (!contact) {
		throw new AppError("Contact not found", 404);
	}

	return contact;
};

export default retrieveContactService;
