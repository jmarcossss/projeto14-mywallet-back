import dayjs from "dayjs";
//Pegando as dbs
import { armazenaOperacoes } from "../todasAsDbs/infoDasDbs.js";

//Outra func assíncrona
export async function userTransactions(require, response) {
    const { session } = response.locals;
    const { val, preco, informacao } = require.body;
    //Deu bom, status 201
    try {
        //Formato que vai ficar o input do valor, com a data e tudo mais
        await armazenaOperacoes.insertOne({ date: dayjs().format("DD/MM"), val, preco, informacao, userId: session.userId, });
        response.sendStatus(201)
    }
    //Deu ruim, status 500
    catch(err) {
        response.sendStatus(500)
    }
}
