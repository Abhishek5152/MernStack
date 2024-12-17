import{createUser} from "../controllers/userController.js";
import{lolall} from "../controllers/userController.js";

import express from "express";

const route = express.Router();
route.post("/lolall",lolall);
route.post("/createUser",createUser);

export default route;