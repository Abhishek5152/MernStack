import{createUser} from "../controllers/userController.js";
import express from "express";

const route = express.Router();
route.post("/create",createUser);

export default route;