import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Typography } from "@mui/material";
import { ClientsContext } from "../../context/ClientsContext";
import { IClientRequest } from "../../interfaces/IClient";
import TextField from "@mui/material/TextField";
import { schemaRegisterClient } from "../../validations/RegisterClient";
import { Grid } from "@mui/joy";

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

const FormRegisterClient = React.forwardRef((props, ref) => {
	const { RegisterClient } = useContext(ClientsContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IClientRequest>({
		resolver: yupResolver(schemaRegisterClient),
		reValidateMode: "onSubmit",
	});
	return (
		<Box
			ref={ref}
			component="form"
			onSubmit={handleSubmit(RegisterClient)}
			sx={style}
		>
			<Grid>
				<Typography component="h1" variant="h5">
					Novo Cliente
				</Typography>
			</Grid>

			<TextField
				error={errors.name ? true : false}
				helperText={errors.name ? `${errors.name?.message}` : " "}
				margin="normal"
				fullWidth
				id="name"
				label="Nome completo"
				autoComplete="name"
				autoFocus
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
				label="Telefone"
				type="text"
				id="phone_number"
				autoComplete="tel"
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
export default FormRegisterClient;
