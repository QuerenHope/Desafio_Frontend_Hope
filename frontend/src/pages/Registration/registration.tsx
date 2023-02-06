import Avatar from "@mui/material/Avatar";
import HowToReg from "@mui/icons-material/HowToReg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import FormRegister from "../../components/FormRegister/FormRegister";

const Registration = () => {
	return (
		<Zoom in timeout={500}>
			<Box
				sx={{
					marginTop: 12,
					marginBottom: 12,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					maxWidth: "518px",
					borderRadius: 2,
					background: "white",
					padding: 3,
					boxShadow: "0px 0px 12px 4px rgba(0,0,0,0.75)",
				}}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-around",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
						<HowToReg />
					</Avatar>
				</Box>
				<Typography component="h1" variant="h5">
					Registro
				</Typography>
				<FormRegister />
			</Box>
		</Zoom>
	);
};

export default Registration;
