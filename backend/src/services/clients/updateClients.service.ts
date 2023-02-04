import AppDataSource from "../../data-source";
import Clients from "../../entities/clients.entity";
import AppError from "../../errors/AppError";
import { IClientUpdate } from "../../interfaces/clients";

const updateClientService = async (
	{ name, email, phone_number }: IClientUpdate,
	clientId: string
): Promise<IClientUpdate> => {
	const clientsRespository = AppDataSource.getRepository(Clients);

	const client = await clientsRespository.findOneBy({ id: clientId });

	if (!client) {
		throw new AppError("Client not found", 404);
	}

	await clientsRespository.update(clientId, {
		name,
		email,
		phone_number,
	});

	const clinetUpdated = await clientsRespository.findOne({
		where: { id: clientId },
		relations: { contacts: true },
	});

	return clinetUpdated!;
};

export default updateClientService;
