import userService from "../services/user.service.js";
import {StatusCodes} from "http-status-codes";

class UserController {
    async getUserInfo(req, res, next) {
        const {userId} = req;
        try {
            const user = await userService.getUserInfo(userId);

            return res.status(StatusCodes.OK).json(user);
        } catch (error) {
            next(error)
        }
    }
}

const userController = new UserController();
export default userController;