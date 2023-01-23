import { MongoClient } from "mongodb";
import dotenv from "dotenv";

//Configurações padrões
const mongoClient = new MongoClient(process.env.MONGO_URI);
dotenv.config();
//O db para armazenar os dados
export default database = mongoClient.database("projeto14-back");
//Se der bom conecta
try { await mongoClient.connect(); console.log("Conectado..."); }
//Se não der dá erro
catch(err) { console.log(err.message); }
