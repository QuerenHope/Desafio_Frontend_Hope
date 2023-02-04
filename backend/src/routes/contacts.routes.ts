import { Router } from "express";

import authMiddleware from "../middlewares/auth.middleware";

import createdContactController from "../controllers/contacts/createContact.controller";
import listAllContactsController from "../controllers/contacts/listAllContacts.controller";
import retrieveContactController from "../controllers/contacts/retrieveContact.controller";
import updateContactController from "../controllers/contacts/updateContact.controller";
import deleteContactController from "../controllers/contacts/deleteContact.controller";

const contactsRoutes = Router();

contactsRoutes.post("", authMiddleware, createdContactController)
contactsRoutes.get("", authMiddleware, listAllContactsController);
contactsRoutes.get("/:id", authMiddleware, retrieveContactController);
contactsRoutes.patch("/:id", authMiddleware, updateContactController);
contactsRoutes.delete("/:id", authMiddleware, deleteContactController);

export default contactsRoutes;
