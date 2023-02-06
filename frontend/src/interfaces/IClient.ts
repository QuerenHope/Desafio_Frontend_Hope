import { IContact } from "./IContact";

export interface IClient {
	id: string;
	name: string;
	email: string;
	phone_number: string;
	contacts: IContact[];
}

export interface IClientRequest {
	name: string;
	email: string;
	phone_number: string;
}

export interface IClientUpdate {
	id: string
	name?: string;
	email?: string;
	phone_number?: string;
}
