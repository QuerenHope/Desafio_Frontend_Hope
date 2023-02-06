import Avatar from "@mui/material/Avatar";
import LoginIcon from "@mui/icons-material/Login";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormLogin from "../../components/FormLogin/FormLogin";
import Zoom from "@mui/material/Zoom";

const Login = () => {
	return (
		<Zoom in timeout={500}>
			<Box
				sx={{
					marginTop: 12,
					marginBottom: 12,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					maxWidth: "405px",
					borderRadius: 2,
					background: "white",
					padding: 3,
					boxShadow: "0px 0px 12px 4px rgba(0,0,0,0.75)",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
					<LoginIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Login
				</Typography>
				<FormLogin />
			</Box>
		</Zoom>
	);
};

export default Login;
