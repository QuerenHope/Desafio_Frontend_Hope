import { useContext } from "react";
import { ClientsContext } from "../../context/ClientsContext";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	IconButton,
	Modal,
} from "@mui/material";
import { IClientProps } from "../../interfaces/IClientProps";
import FormRegisterContact from "../FormRegisterContact/FormRegisterContact";
import DialogContent from "@mui/material/DialogContent";
import CardContact from "../CardContact/CardContact";

const CardClient = ({ client }: IClientProps) => {
	const {
		getClientByIdToEdit,
		getClientToAddContact,
		DeleteClient,
		openModalRegisterContact,
		handleCloseModalRegisterContact,
	} = useContext(ClientsContext);

	const { id, name, email, phone_number, contacts } = client!;

	return (
		<Grid item xs={2} sm={4} md={4} maxWidth="100%">
			<Card sx={{ minWidth: 250 }}>
				<CardContent
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Grid>
						<Typography variant="h5" component="div">
							{name}
						</Typography>
						<Typography sx={{ mb: 1.5 }} color="text.secondary">
							{email}
						</Typography>
						<Typography variant="body2">{phone_number}</Typography>
					</Grid>
					<Grid>
						<IconButton
							aria-label="edit"
							size="small"
							onClick={() => getClientByIdToEdit(client!.id)}
						>
							<EditIcon fontSize="inherit" />
						</IconButton>
						<IconButton
							aria-label="delete"
							size="small"
							onClick={() => DeleteClient(id)}
						>
							<DeleteIcon fontSize="inherit" />
						</IconButton>
					</Grid>
				</CardContent>
				<CardActions>
					<Button
						size="small"
						onClick={() => getClientToAddContact(client!.id)}
					>
						<AddIcon />
						Contato
					</Button>
					<Modal
						open={openModalRegisterContact}
						onClose={handleCloseModalRegisterContact}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<DialogContent>
							<FormRegisterContact />
						</DialogContent>
					</Modal>
				</CardActions>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>Contatos</Typography>
					</AccordionSummary>
					<AccordionDetails>
						{contacts.map((contact) => (
							<CardContact key={contact.id} contact={contact} />
						))}
					</AccordionDetails>
				</Accordion>
			</Card>
		</Grid>
	);
};

export default CardClient;
