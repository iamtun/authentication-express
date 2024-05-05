import {Router} from "express";
import {accountController} from "../controllers/index.js";
import {ValidateData} from "../middlewares/index.js";
import {userSignupSchema, userLoginSchema} from "../schemas/account.schema.js";

const router = Router();

router.post('/signup', ValidateData(userSignupSchema), accountController.signup);
router.post('/login', ValidateData(userLoginSchema), accountController.login);

export default router;