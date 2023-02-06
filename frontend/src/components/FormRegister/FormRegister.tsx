import { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserRequest } from "../../interfaces/IUser";
import { schemaRegisterUser } from "../../validations/RegisterUser";

const FormRegister = () => {
	const { onSubmitRegister } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUserRequest>({
		resolver: yupResolver(schemaRegisterUser),
		reValidateMode: "onSubmit",
	});

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(onSubmitRegister)}
			noValidate
			sx={{ mt: 1 }}
		>
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
				label="Email"
				type="email"
				id="email"
				autoComplete="email"
				{...register("email")}
			/>
			<TextField
				error={errors.password ? true : false}
				helperText={
					errors.password ? `${errors.password?.message}` : " "
				}
				margin="normal"
				fullWidth
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
				{...register("password")}
			/>
			<Button
				type="submit"
				fullWidth
				variant="contained"
				sx={{ mt: 3, mb: 2 }}
			>
				Cadastrar
			</Button>
			<Grid item>
				<Link
					to="/login"
					style={{
						textDecoration: "none",
						color: "rgba(0, 0, 0, 0.6)",
					}}
				>
					Já possui cadastro? Efetue o{" "}
					<b style={{ textDecoration: "underline" }}>Login aqui!</b>
				</Link>
			</Grid>
		</Box>
	);
};

export default FormRegister;
