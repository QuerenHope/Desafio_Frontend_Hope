import Box from "@mui/material/Box";
import { useContext, useEffect } from "react";
import Content from "../../components/Content/Content";
import Header from "../../components/Header/Header";
import { ClientsContext } from "../../context/ClientsContext";

const Dashboard = () => {
	const { getClients } = useContext(ClientsContext);

	useEffect(() => {
		getClients();
	}, []);

	return (
		<Box width="100%">
			<Header />
			<Content />
		</Box>
	);
};

export default Dashboard;
