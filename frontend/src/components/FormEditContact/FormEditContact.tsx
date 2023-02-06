import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Grid, Typography } from "@mui/material";
import { ClientsContext } from "../../context/ClientsContext";
import { schemaUpdateClient } from "../../validations/UpdateClient";
import TextField from "@mui/material/TextField";
import { IContactUpdate } from "../../interfaces/IContact";

const style = {
	position: "absolute" as "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	maxWidth: "400px",
	minWidth: "300px",
	bgcolor: "background.paper",
	borderRadius: "8px",
	boxShadow: 24,
	p: 4,
};

const FormEditContact = React.forwardRef((props, ref) => {
	const { contact, UpdateContact } = useContext(ClientsContext);
	const { id, name, email, phone_number } = contact;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IContactUpdate>({
		resolver: yupResolver(schemaUpdateClient),
		reValidateMode: "onSubmit",
	});
	return (
		<Box
			ref={ref}
			component="form"
			onSubmit={handleSubmit(UpdateContact)}
			sx={style}
		>
			<Grid>
				<Typography component="h1" variant="h5">
					Editar Contato
				</Typography>
			</Grid>
			<input value={id} hidden {...register("id")} />
			<TextField
				error={errors.name ? true : false}
				helperText={errors.name ? `${errors.name?.message}` : " "}
				margin="normal"
				fullWidth
				id="name"
				label="Nome completo"
				autoComplete="name"
				autoFocus
				defaultValue={name}
				{...register("name")}
			/>
			<TextField
				error={errors.email ? true : false}
				helperText={errors.email ? `${errors.email?.message}` : " "}
				margin="normal"
				fullWidth
				id="email"
				label="Email"
				autoComplete="email"
				defaultValue={email}
				{...register("email")}
			/>

			<TextField
				error={errors.phone_number ? true : false}
				helperText={
					errors.phone_number
						? `${errors.phone_number?.message}`
						: " "
				}
				margin="normal"
				fullWidth
				label="phone_number"
				type="text"
				id="phone_number"
				autoComplete="tel"
				defaultValue={phone_number}
				{...register("phone_number")}
			/>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: 3, mb: 2 }}
			>
				Salvar
			</Button>
		</Box>
	);
});

export default FormEditContact;
