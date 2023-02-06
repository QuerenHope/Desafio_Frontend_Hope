export interface IContact {
	id: string;
	name: string;
	email: string;
	phone_number: string;
}

export interface IContactRequest {
	name: string;
	email: string;
	phone_number: string;
	clientId: string;
}

export interface IContactUpdate {
	id: string;
	name?: string;
	email?: string;
	phone_number?: string;
}
