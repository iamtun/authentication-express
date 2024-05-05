import bcrypt from 'bcrypt';
import User from "../models/user.model.js";

class AccountService {
    async signup(firstName, lastName, dateOfBirth, gender, username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = new User({
            firstName,
            lastName,
            dateOfBirth,
            gender,
            username,
            email,
            passwordHash: hashedPassword
        });

        await newUser.save();
    }
}

const accountsService = new AccountService();

export default accountsService;