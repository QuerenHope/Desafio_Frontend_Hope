import {
	CardContent,
	DialogContent,
	Divider,
	Grid,
	IconButton,
	Modal,
	Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { ClientsContext } from "../../context/ClientsContext";
import { IContactProps } from "../../interfaces/IContactProps";
import FormEditContact from "../FormEditContact/FormEditContact";

const CardContact = ({ contact }: IContactProps) => {
	const {
		getContactById,
		DeleteContact,
		openModalEditContact,
		handleCloseModalEditContact,
	} = useContext(ClientsContext);

	return (
		<>
			<Divider />
			<CardContent
				key={contact.id}
				sx={{
					padding: "5px 10px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Grid>
					<Typography variant="body1" component="div">
						{contact.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{contact.email}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{contact.phone_number}
					</Typography>
				</Grid>
				<Grid>
					<IconButton
						aria-label="edit"
						size="small"
						onClick={() => getContactById(contact.id)}
					>
						<EditIcon fontSize="inherit" />
					</IconButton>
					<IconButton
						aria-label="delete"
						size="small"
						onClick={() => DeleteContact(contact.id)}
					>
						<DeleteIcon fontSize="inherit" />
					</IconButton>
				</Grid>
			</CardContent>
			<Divider />
			<Modal
				open={openModalEditContact}
				onClose={handleCloseModalEditContact}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<DialogContent>
					<FormEditContact />
				</DialogContent>
			</Modal>
		</>
	);
};

export default CardContact;
