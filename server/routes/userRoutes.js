import{createUser} from "../controllers/userController.js";
import{lolall} from "../controllers/userController.js";
import{updateme} from "../controllers/userController.js";
import{deleteme} from "../controllers/userController.js";

import express from "express";

const route = express.Router();
route.post("/lolall",lolall);
route.post("/createUser",createUser);
route.post("/updateme",updateme);
route.post("/deleteme",deleteme);

export default route;