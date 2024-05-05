import {Router} from "express";
import accountRouter from "./account.router.js";
import userRouter from "./user.router.js";
const rootRouter = Router();

rootRouter.use('/auth', accountRouter);
rootRouter.use('/users', userRouter);

export default rootRouter;