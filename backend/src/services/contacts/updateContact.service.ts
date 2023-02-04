import AppDataSource from "../../data-source";
import Contacts from "../../entities/contacts.entity";
import AppError from "../../errors/AppError";
import { IContact, IContactUpdate } from "../../interfaces/contacts";

const updateContactService = async (
	{ name, email, phone_number }: IContactUpdate,
	contactId: string
): Promise<IContact> => {
	const contactsRepository = AppDataSource.getRepository(Contacts);
	const contact = await contactsRepository.findOneBy({ id: contactId });

	if (!contact) {
		throw new AppError("Contact not found", 404);
	}

	await contactsRepository.update(contactId, {
		name,
		email,
		phone_number,
	});

	const contactUpdated = contactsRepository.findOneByOrFail({
		id: contactId,
	});

	return contactUpdated;
};

export default updateContactService;
