import app from "./app"
import { AppDataSource } from "./data-source";
import "dotenv/config";

(async () => {
	await AppDataSource.initialize()
		.then(() => {
			console.log("Database connected");
		})
		.catch((error) => {
			console.log(error);
		});

	app.listen(process.env.PORT || 8000, () => {
		console.log("Server running");
	});
})();