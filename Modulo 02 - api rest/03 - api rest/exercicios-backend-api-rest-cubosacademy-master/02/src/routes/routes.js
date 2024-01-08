import express from "express";
import { getGuests, createGuest, deleteGuest } from "../controllers/guests.js";

const routes = express();

// read all guests
routes.get("/convidados", getGuests);

// create guest
routes.post("/convidados", createGuest);

// delete guest
routes.delete("/convidados/:nome", deleteGuest);

export default routes;
