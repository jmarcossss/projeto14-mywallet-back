import { armazenaOperacoes } from "../todasAsDbs/infoDasDbs.js";

export default async function userList(require, reponse) {
    const { cliente } = reponse.locals;
    try { const transactions = await armazenaOperacoes.find({ userId: cliente._id }) .toArray(); reponse.send(transactions);}
    //Deu ruim, status 500
    catch(err) {reponse.sendStatus(500) }
}
