import { armazenaOperacoes } from "../todasAsDbs/infoDasDbs.js";

async function endSession(req, response) {
    const { session } = response.locals;
    try {
        await armazenaOperacoes.deleteOne({ userId: session.userId });
        response.status(200).send("Até logo " + session.user);
    }
    catch(err) {
        console.log(err)
        response.sendStatus(500)
    }
}

export { endSession }
