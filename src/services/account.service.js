import bcrypt from 'bcrypt';
import User from "../models/user.model.js";
import {UserNotFoundError, PasswordNotMatchingError} from '../errors/user.error.js';
import {randomUUID} from 'crypto'
import jwt from 'jsonwebtoken';
import RefreshToken from "../models/refreshToken.model.js";

class AccountService {
    async signup(firstName, lastName, dateOfBirth, gender, username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            firstName, lastName, dateOfBirth, gender, username, email, passwordHash: hashedPassword
        });

        await newUser.save();
    }

    async login(username, password) {
        const filter = {
            username
        };

        const expiredTime = Number(process.env.EXPIRED_TIME || 10 * 60);

        const foundUser = await User.findOne(filter).exec();

        if (foundUser === null) {
            throw new UserNotFoundError(`User with username: ${username} not found!`);
        }

        const doesPasswordMatch = await bcrypt.compare(password, foundUser.passwordHash);

        if (!doesPasswordMatch) {
            throw new PasswordNotMatchingError('Invalid credentials, please re-enter your credentials.');
        }

        const accessTokenClaims = {
            sub: foundUser._id.toString(), jti: randomUUID(), role: foundUser.role, username: foundUser.username
        };


        const accessToken = jwt.sign(accessTokenClaims, process.env.SALT, {
            expiresIn: expiredTime
        });

        const refreshTokenClaims = {
            sub: foundUser._id.toString(), jti: randomUUID()
        };

        const refreshToken = jwt.sign(refreshTokenClaims, process.env.SALT, {
            expiresIn: expiredTime
        });

        // Persist the refresh token
        const foundRefreshToken = await RefreshToken.findOne({
            userId: foundUser._id
        }).exec();

        if (foundRefreshToken === null) {
            const newRefreshToken = new RefreshToken({
                userId: foundUser._id, token: refreshToken
            });

            await newRefreshToken.save();
        } else {
            const filter = {
                userId: foundUser._id
            };

            const payload = {
                token: refreshToken
            };

            await RefreshToken.updateOne(filter, payload).exec();
        }

        return {
            access_token: accessToken, refresh_token: refreshToken, expires_in: expiredTime
        };
    }
}

const accountsService = new AccountService();

export default accountsService;