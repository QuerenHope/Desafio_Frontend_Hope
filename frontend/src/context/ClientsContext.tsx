import { createContext, useState } from "react";
import { IClientsContext } from "../interfaces/IClientsContext";
import { IClientsProvider } from "../interfaces/IClientsProvider";
import { IClient, IClientRequest, IClientUpdate } from "../interfaces/IClient";
import {
	IContact,
	IContactRequest,
	IContactUpdate,
} from "../interfaces/IContact";
import { IError } from "../interfaces/IError";
import api from "../service/api";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export const ClientsContext = createContext<IClientsContext>(
	{} as IClientsContext
);

const ClientsProvider = ({ children }: IClientsProvider) => {
	const [clientsList, setClientsList] = useState<IClient[]>([]);
	const [client, setClient] = useState<IClient>({} as IClient);
	const [contact, setContact] = useState<IContact>({} as IContact);
	const [openModalRegisterClient, setOpenModalRegisterClient] =
		useState(false);
	const [openModalEditClient, setOpenModalEditClient] = useState(false);
	const [openModalRegisterContact, setOpenModalRegisterContact] =
		useState(false);
	const [openModalEditContact, setOpenModalEditContact] = useState(false);
	const handleOpenModalRegisterClient = () =>
		setOpenModalRegisterClient(true);
	const handleCloseModalRegisterClient = () =>
		setOpenModalRegisterClient(false);
	const handleOpenModalEditClient = () => setOpenModalEditClient(true);
	const handleCloseModalEditClient = () => setOpenModalEditClient(false);
	const handleOpenModalRegisterContact = () =>
		setOpenModalRegisterContact(true);
	const handleCloseModalRegisterContact = () =>
		setOpenModalRegisterContact(false);
	const handleOpenModalEditContact = () => setOpenModalEditContact(true);
	const handleCloseModalEditContact = () => setOpenModalEditContact(false);

	const token = localStorage.getItem("@cadastro-clientes:token");

	const getClients = async () => {
		try {
			const res = await api.get<IClient[]>("/clients");
			setClientsList(res.data);
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			toast.error(
				"Não foi possível carregar a lista de clientes! Tente novamente!"
			);
		}
	};

	const getClientByIdToEdit = async (clientId: string) => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await api.get<IClient>(`/clients/${clientId}`);
			setClient(res.data);
			handleOpenModalEditClient();
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			if (err.response?.data.message === "Client not found") {
				toast.error("Cliente não encontrado!");
			} else {
				toast.error("Algo deu errado! Tente novamente!");
			}
		}
	};

	const getClientToAddContact = async (clientId: string) => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await api.get<IClient>(`/clients/${clientId}`);
			setClient(res.data);
			handleOpenModalRegisterContact();
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			if (err.response?.data.message === "Client not found") {
				toast.error("Cliente não encontrado!");
			} else {
				toast.error("Algo deu errado! Tente novamente!");
			}
		}
	};

	const RegisterClient = async (data: IClientRequest) => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await api.post<IClientRequest>("/clients", data);
			toast.success("Cliente cadastrado com sucesso!");
			handleCloseModalRegisterClient();
			getClients();
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			handleCloseModalRegisterClient();
			if (err.response?.data.message === "Email already exists.") {
				toast.error("Email já cadastrado!");
			} else if (err.response?.data.message === "Client not found") {
				toast.error("Cliente não encontrado!");
			} else {
				toast.error(
					"Não foi possível cadastrar o cliente! Tente novamente!"
				);
			}
		}
	};

	const UpdateClient = async (data: IClientUpdate) => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await api.patch<IClientUpdate>(`/clients/${data.id}`, data);
			handleCloseModalEditClient();
			getClients();
			toast.success("Cliente atualizado com sucesso!");
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			handleCloseModalEditClient();
			if (err.response?.data.message === "Client not found") {
				toast.error("Cliente não encontrado!");
			} else {
				toast.error("Algo deu errado! Tente novamente!");
			}
		}
	};

	const DeleteClient = async (clientId: string) => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await api.delete(`/clients/${clientId}`);
			getClients();
			toast.success("Cliente excluído com sucesso!");
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			if (err.response?.data.message === "Client not found") {
				toast.error("Cliente não encontrado!");
			} else {
				toast.error("Algo deu errado! Tente novamente!");
			}
		}
	};

	const getContactById = async (contactId: string) => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			const res = await api.get<IClient>(`/contacts/${contactId}`);
			setContact(res.data);
			handleOpenModalEditContact();
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			if (err.response?.data.message === "Contact not found") {
				toast.error("Contato não encontrado!");
			} else {
				toast.error("Algo deu errado! Tente novamente!");
			}
		}
	};

	const RegisterContact = async (data: IContactRequest) => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await api.post<IContactRequest>("/contacts", data);
			handleCloseModalRegisterContact();
			getClients();
			toast.success("Contato cadastrado com sucesso!");
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			if (err.response?.data.message === "Client not found") {
				toast.error("Cliente não encontrado!");
			} else if (err.response?.data.message === "Contact not found") {
				toast.error("Contato não encontrado!");
			} else {
				toast.error(
					"Não foi possível cadastrar o contato! Tente novamente!"
				);
			}
		}
	};

	const UpdateContact = async (data: IContactUpdate) => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await api.patch<IContactUpdate>(`/contacts/${data.id}`, data);
			handleCloseModalEditContact();
			getClients();
			toast.success("Contato atualizado com sucesso!");
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);

			if (err.response?.data.message === "Contact not found") {
				toast.error("Contato não encontrado!");
			} else {
				toast.error("Algo deu errado! Tente novamente!");
			}
		}
	};

	const DeleteContact = async (contactId: string) => {
		try {
			api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
			await api.delete(`/contacts/${contactId}`);
			getClients();
			toast.success("Contato excluído com sucesso!");
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			if (err.response?.data.message === "Contact not found") {
				toast.error("Contato não encontrado!");
			} else {
				toast.error("Algo deu errado! Tente novamente!");
			}
		}
	};

	return (
		<ClientsContext.Provider
			value={{
				clientsList,
				setClientsList,
				client,
				setClient,
				contact,
				setContact,
				openModalRegisterClient,
				openModalEditClient,
				openModalRegisterContact,
				openModalEditContact,
				handleOpenModalRegisterClient,
				handleCloseModalRegisterClient,
				handleOpenModalEditClient,
				handleCloseModalEditClient,
				handleOpenModalRegisterContact,
				handleCloseModalRegisterContact,
				handleOpenModalEditContact,
				handleCloseModalEditContact,
				getClients,
				getClientByIdToEdit,
				getClientToAddContact,
				getContactById,
				RegisterClient,
				UpdateClient,
				DeleteClient,
				RegisterContact,
				UpdateContact,
				DeleteContact,
			}}
		>
			{children}
		</ClientsContext.Provider>
	);
};

export default ClientsProvider;
