import {Router} from "express";
import {accountController} from "../controllers/index.js";
import {validateData} from "../middlewares/validation.middleware.js";
import {userSignupSchema, userLoginSchema} from "../schemas/account.schema.js";

const router = Router();

router.post('/signup', validateData(userSignupSchema), accountController.signup);
router.post('/login', validateData(userLoginSchema), accountController.login);

export default router;