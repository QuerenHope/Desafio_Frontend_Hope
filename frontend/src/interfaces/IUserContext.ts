import { IUser, IUserLogin, IUserRequest } from "./IUser";

export interface IUserContext {
	user: IUser;
	SignIn: (data: IUserLogin) => void;
	Logout: () => void;
	onSubmitRegister: (data: IUserRequest) => void;
}
