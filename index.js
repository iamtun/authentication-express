import Express from 'express';
import {connectDB} from './src/db/index.js'

const app = Express();
const PORT = process.env.PORT || 3000;

connectDB()
    .then(() => {
        console.log('connect db success')
        app.listen(PORT, () => {
            console.log(`App running port ${PORT}`)
        })
    })
    .catch((err) => console.error(err));
