import db from "./db.js";

//Banco local de dbs
export const armazenaClientes = db.collection("users");
export const armazenaSessoes = db.collection("sessions");
export const armazenaOperacoes = db.collection("transactions");
