import mongoose from 'mongoose';
import {mongoDb} from '../config/db.config.js';

const connectDB = () => mongoose.connect(mongoDb.connectionString, mongoDb.options)

export {connectDB};
