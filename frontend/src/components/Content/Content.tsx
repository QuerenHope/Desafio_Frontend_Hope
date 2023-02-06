import { useContext } from "react";
import { ClientsContext } from "../../context/ClientsContext";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import CardClient from "../CardClient/CardClient";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import FormRegisterClient from "../FormRegisterClient/FormRegisterClient";
import FormEditClient from "../FormEditClient/FormEditClient";

export default function Content() {
	const {
		clientsList,
		openModalRegisterClient,
		handleOpenModalRegisterClient,
		handleCloseModalRegisterClient,
		openModalEditClient,
		handleCloseModalEditClient,
	} = useContext(ClientsContext);

	return (
		<Paper sx={{ maxWidth: 936, margin: "auto" }}>
			<AppBar
				position="static"
				color="default"
				elevation={0}
				sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
			>
				<Toolbar>
					<Grid container spacing={2} alignItems="center">
						<Grid item>
							<Button
								variant="contained"
								sx={{ mr: 1 }}
								onClick={handleOpenModalRegisterClient}
							>
								<AddIcon />
								Cliente
							</Button>
							<Modal
								open={openModalRegisterClient}
								onClose={handleCloseModalRegisterClient}
								aria-labelledby="modal-modal-title"
								aria-describedby="modal-modal-description"
							>
								<FormRegisterClient />
							</Modal>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			{clientsList.length === 0 && (
				<Typography
					sx={{ my: 5, mx: 2 }}
					color="text.secondary"
					align="center"
				>
					Nenhum cliente cadastrado!
				</Typography>
			)}
			{clientsList && (
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 4, sm: 8, md: 12 }}
					padding="20px"
				>
					{clientsList.map((client, index) => (
						<CardClient client={client} key={client.id} />
					))}
				</Grid>
			)}
			<Modal
				open={openModalEditClient}
				onClose={handleCloseModalEditClient}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<FormEditClient />
			</Modal>
		</Paper>
	);
}
