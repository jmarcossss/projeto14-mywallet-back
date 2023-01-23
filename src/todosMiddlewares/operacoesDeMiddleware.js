import { schemaValues } from "../schemas/valoresSchema.js";

function transactionMiddleware(require, response, func) {
    const { type, value, description } = require.body;
    const { error } = schemaValues.validate({ type, value, description, });
    if(error) { response.sendStatus(400); return }
    func()
}

export { transactionMiddleware };
