import Clients from "../../entities/clients.entity";

export interface IContact {
	id: string;
	name: string;
	email: string;
	phone_number: string;
	createdAt: Date;
	updatedAt: Date;
	client: Clients;
}

export interface IContactRequest {
	name: string
	email: string
	phone_number: string
	clientId: string
}

export interface IContactUpdate {
	name?: string;
	email?: string;
	phone_number?: string;
}
