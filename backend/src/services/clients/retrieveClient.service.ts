import AppDataSource from "../../data-source";
import Clients from "../../entities/clients.entity";
import AppError from "../../errors/AppError";
import { IClient } from "../../interfaces/clients";

const restrieveClientService = async (clientId: string): Promise<IClient> => {
	const clientRepository = AppDataSource.getRepository(Clients);
	const client = await clientRepository.findOne({
		where: { id: clientId },
		relations: { contacts: true },
	});

	if (!client) {
		throw new AppError("Client not found", 404);
	}

	return client;
};

export default restrieveClientService;
