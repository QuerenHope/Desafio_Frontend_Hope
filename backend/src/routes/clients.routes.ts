import { Router } from "express";

import authMiddleware from "../middlewares/auth.middleware";

import createClientController from "../controllers/client/createClient.controller";
import deleteClientController from "../controllers/client/deleteClient.controller";
import listAllClientsController from "../controllers/client/listAllClients.controller";
import retrieveClientController from "../controllers/client/retrieveClient.controller";
import updateClientController from "../controllers/client/updateClient.controller";

const clientsRoutes = Router();

clientsRoutes.post("", createClientController);
clientsRoutes.get("", authMiddleware, listAllClientsController);
clientsRoutes.get("/:id", authMiddleware, retrieveClientController);
clientsRoutes.patch("/:id", authMiddleware, updateClientController);
clientsRoutes.delete("/:id", authMiddleware, deleteClientController);

export default clientsRoutes;
