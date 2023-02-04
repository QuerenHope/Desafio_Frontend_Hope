import AppDataSource from "../../data-source";
import Users from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import { IUserUpdate } from "../../interfaces/user";

const updateUserService = async (
	{ name, email, password }: IUserUpdate,
	userId: string
): Promise<Users> => {
	const userRepository = AppDataSource.getRepository(Users);
	const findUser = await userRepository.findOneBy({ id: userId });

	if (!findUser) {
		throw new AppError("User not found", 404);
	}

	await userRepository.update(userId, {
		name,
		email,
		password,
	});

	const user = await userRepository.findOneBy({ id: userId });

	return user!;
};

export default updateUserService;
