import { armazenaSessoes, armazenaClientes, } from "../todasAsDbs/infoDasDbs.js";

//Outra função assíncrona
export async function authMiddleware(require, response, func) {
    const padroniz = require.headers.authorization?.replace("Bearer ", "")
    const boolT = true
    if (!padroniz) { response.sendStatus(401); return }
    try {
        const session = await armazenaSessoes.findOne({ padroniz })
        if(!session) { response.sendStatus(401); return }
        const user = await armazenaClientes.findOne({ _id: session.userId, })
        if (!user) { response.sendStatus(401); return }
        response.locals.session = session
        response.locals.user = user
    }
    //Deu ruim, status 500
    catch (err) {
        console.log(err)
        response.sendStatus(500)
    }
    func()
}
