import Contacts from "../../entities/contacts.entity";

export interface IClientRequest {
	name: string;
	email: string;
	phone_number: string;
	// contacts: Contacts[];
}

export interface IClient {
	id: string;
	name: string;
	email: string;
	phone_number: string;
	contacts: Contacts[];
}

export interface IClientUpdate {
	name?: string;
	email?: string;
	phone_number?: string;
}
