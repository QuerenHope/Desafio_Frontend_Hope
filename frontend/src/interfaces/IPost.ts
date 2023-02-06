import { IUser } from "./IUser";

export interface IPost {
	user: IUser;
	token: string;
}
