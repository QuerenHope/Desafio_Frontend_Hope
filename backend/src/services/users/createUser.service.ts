import * as bcrypt from "bcryptjs";
import AppDataSource from "../../data-source";
import Users from "../../entities/users.entity";
import AppError from "../../errors/AppError";

import { IUserRequest } from "../../interfaces/user";

const createUserService = async ({
	name,
	email,
	password,
	isAdmin,
}: IUserRequest): Promise<Users> => {
	const userRepository = AppDataSource.getRepository(Users);

	const users = await userRepository.find();

	const emailAlredyExists = users.find((user) => user.email === email);

	if (emailAlredyExists) {
		throw new AppError("Email already exits");
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const user = userRepository.create({
		name,
		email,
		password: hashedPassword,
		isAdmin,
	});

	await userRepository.save(user);

	return user;
};

export default createUserService;
