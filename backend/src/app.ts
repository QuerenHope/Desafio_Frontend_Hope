import "reflect-metadata";
import express from "express";
import cors from "cors";
import "express-async-errors";
import handleErrorMiddleware from "./middlewares/handleError.middleware";
import loginRouter from "./routes/login.routes";
import userRoutes from "./routes/users.routes";
import clientsRoutes from "./routes/clients.routes";
import contactsRoutes from "./routes/contacts.routes";

const app = express();

const corsOptions = {
	origin: "http://localhost:3000",
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/login", loginRouter);
app.use("/users", userRoutes);
app.use("/clients", clientsRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrorMiddleware);

export default app;