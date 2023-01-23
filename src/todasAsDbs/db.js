import { MongoClient } from "mongodb";
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();
const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect();
    console.log(chalk.bold.green("[MongoDB] Connected!"));
} catch (err) {
    console.log(chalk.red(err.message));
}

const db = mongoClient.db("mywallet");

export default db;
