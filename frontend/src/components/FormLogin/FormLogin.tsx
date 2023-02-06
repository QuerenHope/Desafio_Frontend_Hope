import { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import { IUserLogin } from "../../interfaces/IUser";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../validations/Login";

const FormLogin = () => {
	const { SignIn } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IUserLogin>({
		resolver: yupResolver(schemaLogin),
		reValidateMode: "onSubmit",
	});

	return (
		<Box
			component="form"
			onSubmit={handleSubmit(SignIn)}
			noValidate
			sx={{ mt: 1 }}
		>
			<TextField
				error={errors.email ? true : false}
				helperText={errors.email ? `${errors.email?.message}` : " "}
				margin="normal"
				required
				fullWidth
				id="email"
				label="Email"
				autoComplete="email"
				autoFocus
				{...register("email")}
			/>

			<TextField
				error={errors.password ? true : false}
				helperText={
					errors.password ? `${errors.password?.message}` : " "
				}
				margin="normal"
				required
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
				Login
			</Button>
			<Grid container>
				<Grid item>
					<Link
						to="/registration"
						style={{
							textDecoration: "none",
							color: "rgba(0, 0, 0, 0.6)",
						}}
					>
						Ainda não possui conta?{" "}
						<b style={{ textDecoration: "underline" }}>
							Cadastre-se aqui!
						</b>
					</Link>
				</Grid>
			</Grid>
		</Box>
	);
};

export default FormLogin;
