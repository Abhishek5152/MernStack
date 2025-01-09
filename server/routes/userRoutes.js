import express from 'express';
import { createUser, lolall, updateme, deleteme, UserLog ,findUserById, update} from '../controllers/userController.js';

const router = express.Router();

router.get("/lolall", lolall);
router.post("/createUser", createUser);
router.put("/updateme", updateme);
router.delete("/deleteme/:id", deleteme);
router.post("/login", UserLog);
router.put("/UpdateOne/:id",update);
router.get("/find/:id",findUserById);

export default router;
