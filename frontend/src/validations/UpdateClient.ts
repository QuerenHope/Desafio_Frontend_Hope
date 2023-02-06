import * as yup from "yup";

export const schemaUpdateClient = yup.object().shape({
	id: yup.string().trim(),
	name: yup.string().trim(),
	email: yup.string().trim().email("Email Invalido!"),
	phone_number: yup.string().trim().max(15),
});
