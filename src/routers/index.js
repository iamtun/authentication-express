import {Router} from "express";
import accountRouter from "./account.router.js";

const rootRouter = Router();

rootRouter.use('/auth', accountRouter)

export default rootRouter;