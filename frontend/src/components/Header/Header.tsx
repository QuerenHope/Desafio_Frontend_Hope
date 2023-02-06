import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";

const Header = () => {
	const { user, Logout } = useContext(UserContext);

	return (
		<>
			<AppBar
				component="div"
				color="primary"
				position="static"
				elevation={0}
				sx={{ zIndex: 0, borderRadius: "8px", marginBottom: "30px" }}
			>
				<Toolbar>
					<Grid container alignItems="center" spacing={1}>
						<Grid item xs>
							<Typography
								color="inherit"
								variant="h5"
								component="h1"
							>
								Bem vindo! {user.name}
							</Typography>
						</Grid>
						<Grid item>
							<IconButton color="inherit" sx={{ p: 0.5 }}>
								<Avatar>
									<AccountCircleIcon />
								</Avatar>
							</IconButton>
						</Grid>
						<Grid item>
							<Button
								variant="contained"
								color="info"
								onClick={Logout}
							>
								Logout
							</Button>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
