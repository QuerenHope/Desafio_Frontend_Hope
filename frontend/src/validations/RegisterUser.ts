import * as yup from "yup";

export const schemaRegisterUser = yup.object().shape({
	name: yup.string().trim().required("Nome é obrigatório!"),
	email: yup
		.string()
		.trim()
		.required("Email Obrigatório!")
		.email("Email Invalido!"),
	password: yup.string().trim().required("Senha é obrigatória!"),
});
