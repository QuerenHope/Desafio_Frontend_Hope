import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost } from "../interfaces/IPost";
import { IUser, IUserLogin, IUserRequest } from "../interfaces/IUser";
import { IUserContext } from "../interfaces/IUserContext";
import { IUserProvider } from "../interfaces/IUserProvider";
import api from "../service/api";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { ClientsContext } from "./ClientsContext";
import { IError } from "../interfaces/IError";

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
	const [user, setUser] = useState<IUser>({} as IUser);
	const { clientsList, getClients } = useContext(ClientsContext);

	const navigate = useNavigate();

	const token = localStorage.getItem("@cadastro-clientes:token");

	useEffect(() => {
		if (token) {
			setUser(
				JSON.parse(localStorage.getItem("@cadastro-clientes:user")!)
			);
		}
	}, []);

	const SignIn = async (data: IUserLogin) => {
		try {
			const res = await api.post<IPost>("/login/users", data);
			const { user } = res.data;
			const token = JSON.stringify(res.data.token)?.replace(/"/gi, "");
			setUser(user);
			getClients();
			localStorage.setItem(
				"@cadastro-clientes:user",
				JSON.stringify(user)
			);
			localStorage.setItem(
				"@cadastro-clientes:userId",
				JSON.stringify(user.id)
			);
			localStorage.setItem("@cadastro-clientes:token", token);

			navigate("/dashboard");

			toast.success("Login efetuado com sucesso!");
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			if (err.response?.data.message === "Wrong password or email") {
				toast.error("Email ou senha inválidos!");
			} else {
				toast.error("Algo deu errado! Tente novamente!");
			}
		}
	};

	const Logout = () => {
		localStorage.removeItem("@cadastro-clientes:token");
		localStorage.removeItem("@cadastro-clientes:userId");
		localStorage.removeItem("@cadastro-clientes:user");
		navigate("/");
	};

	const onSubmitRegister = async (data: IUserRequest) => {
		try {
			await api.post<IUser>("/users", data);
			toast.success("Cadastro efetuado com sucesso");
			navigate("/login");
		} catch (error) {
			const err = error as AxiosError<IError>;
			console.log(err);
			if (err.response?.data.message === "Email already exits") {
				toast.error("Email já cadastrado!");
			} else {
				toast.error("Algo deu errado! Tente novamente!");
			}
		}
	};

	return (
		<UserContext.Provider
			value={{
				user,
				SignIn,
				Logout,
				onSubmitRegister,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
