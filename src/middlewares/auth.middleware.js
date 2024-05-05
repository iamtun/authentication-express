import {NoTokenProvidedError, TokenExpiredError} from "../errors/user.error.js";
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    if(!req.headers.authorization) {
        throw new NoTokenProvidedError('No token provided');
    }

    const [_, token] = req.headers.authorization.split('Bearer ');

    if (!token)
        throw NoTokenProvidedError('No token provided');

    try {
        const claims = jwt.verify(token, process.env.SALT);
        const {sub} = claims;
        req.userId = sub;

        next();
    } catch (error) {
        if(error.name === 'TokenExpiredError') {
            throw new TokenExpiredError('Token expired')
        }
        throw new NoTokenProvidedError('Token invalid');
    }
}

export default authMiddleware;