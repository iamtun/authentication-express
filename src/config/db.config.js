import { configDotenv } from 'dotenv';

configDotenv();

const mongoDb = {
    connectionString: process.env.DB_CONNECTION_STRING,
    options: {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        pass: process.env.DB_PASSWORD
    },
};

export { mongoDb };
