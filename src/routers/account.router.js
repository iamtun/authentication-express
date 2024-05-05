import {Router} from "express";
import {accountController} from "../controllers/index.js";

const router = Router();

router.post('/signup', accountController.signup);

export default router;