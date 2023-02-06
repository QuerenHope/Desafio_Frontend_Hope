import * as yup from "yup";

export const schemaLogin = yup.object().shape({
	email: yup
		.string()
		.trim()
		.required("Email Obrigatório!")
		.email("Email Invalido!"),
	password: yup.string().trim().required("Senha é obrigatória!"),
});
