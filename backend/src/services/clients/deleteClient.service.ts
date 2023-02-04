import AppDataSource from "../../data-source";
import Clients from "../../entities/clients.entity";
import AppError from "../../errors/AppError";

const deleteClient = async (clientId: string): Promise<void> => {
	const clientRepository = AppDataSource.getRepository(Clients);

	const client = await clientRepository.findOneBy({ id: clientId });

	if (!client) throw new AppError("Client not found", 404);

	await clientRepository.delete(clientId);
};

export default deleteClient;
