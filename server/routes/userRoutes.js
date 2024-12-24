import express from 'express';
import { createUser, lolall, updateme, deleteme, UserLog} from '../controllers/userController.js';

const router = express.Router();

router.post("/lolall", lolall);
router.post("/createUser", createUser);
router.post("/updateme", updateme);
router.post("/deleteme", deleteme);
router.post("/login", UserLog);

export default router;
