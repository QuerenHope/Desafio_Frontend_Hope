import * as yup from "yup";

export const schemaRegisterClient = yup.object().shape({
	name: yup.string().trim().required("Nome é obrigatório"),
	email: yup
		.string()
		.trim()
		.required("Email Obrigatório!")
		.email("Email Invalido!"),
	phone_number: yup.string().trim().required("Nome é obrigatório").max(15),
});
