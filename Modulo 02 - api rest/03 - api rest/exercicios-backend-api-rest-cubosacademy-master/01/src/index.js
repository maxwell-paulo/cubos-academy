import express from "express";
import routes from "./routes/routes.js";
import passwordValidation from "./middleware/middlewares.js";

const app = express();

app.use(express.json());
app.use(passwordValidation);
app.use(routes);

app.listen(3000);
