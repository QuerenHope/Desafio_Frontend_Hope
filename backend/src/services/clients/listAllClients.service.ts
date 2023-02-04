import AppDataSource from "../../data-source";
import Clients from "../../entities/clients.entity";

const listAllClientsService = async (): Promise<Clients[]> => {
	const clientRepository = AppDataSource.getRepository(Clients);
	const clients = await clientRepository.find({
		relations: { contacts: true },
	});

	return clients;
};

export default listAllClientsService;
