import AppDataSource from "../../data-source";
import Contacts from "../../entities/contacts.entity";
import AppError from "../../errors/AppError";

const deleteContactService = async (contactId: string): Promise<void> => {
	const contactsRespository = AppDataSource.getRepository(Contacts);
	const contact = contactsRespository.findOneByOrFail({ id: contactId });

	if (!contact) {
		throw new AppError("Contact not found", 404);
	}

	await contactsRespository.delete(contactId);
};

export default deleteContactService;
