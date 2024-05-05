import User from "../models/user.model.js";
import {UserNotFoundError} from "../errors/user.error.js";
import mongoose from "mongoose";

class UserService {
    async getUserInfo(userId) {
        const _userId = new mongoose.Types.ObjectId(userId);
        const filter = {
            _id: _userId
        }

        const userFounded = await User.findOne(filter).exec();

        if(!userFounded) {
            throw new UserNotFoundError(`User with id: ${userId} not found!`);
        }

        return userFounded;
    }
}

const userService = new UserService();
export default userService;