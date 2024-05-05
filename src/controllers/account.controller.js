import accountsService from "../services/account.service.js";
import {StatusCodes} from 'http-status-codes';

class AccountController {
    async signup(req, res, next) {
        try {
            const {firstName, lastName, dateOfBirth, gender, username, email, password} = req.body;

            await accountsService.signup(firstName, lastName, new Date(dateOfBirth).toString(), gender, username, email, password);

            res.status(StatusCodes.CREATED);

            return res.end();
        } catch (err) {
            return next(err);
        }
    }
}

const accountController = new AccountController();
export default accountController;