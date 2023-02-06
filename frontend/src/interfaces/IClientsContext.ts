import { IClient, IClientRequest, IClientUpdate } from "./IClient";
import { IContact, IContactRequest, IContactUpdate } from "./IContact";

export interface IClientsContext {
	clientsList: IClient[];
	setClientsList: (state: IClient[]) => void;
	client: IClient;
	setClient: (state: IClient) => void;
	contact: IContact;
	setContact: (state: IContact) => void;
	openModalRegisterClient: boolean;
	openModalEditClient: boolean;
	openModalRegisterContact: boolean;
	openModalEditContact: boolean;
	handleOpenModalRegisterClient: () => void;
	handleCloseModalRegisterClient: () => void;
	handleOpenModalEditClient: () => void;
	handleCloseModalEditClient: () => void;
	handleOpenModalRegisterContact: () => void;
	handleCloseModalRegisterContact: () => void;
	handleOpenModalEditContact: () => void;
	handleCloseModalEditContact: () => void;
	getClients: () => void;
	getClientByIdToEdit: (clientId: string) => void;
	getClientToAddContact: (clientId: string) => void;
	getContactById: (contactId: string) => void;
	RegisterClient: (data: IClientRequest) => void;
	UpdateClient: (data: IClientUpdate) => void;
	DeleteClient: (clientId: string) => void;
	RegisterContact: (data: IContactRequest) => void;
	UpdateContact: (data: IContactUpdate) => void;
	DeleteContact: (contactId: string) => void;
}
