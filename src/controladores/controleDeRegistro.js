//Bibliotecas padrões
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

//Funções importantes de outras rotas
import { schemaRegistro, schemaLogin } from "../schemas/schema.js";
import { armazenaClientes, armazenaSessoes, } from "../todasAsDbs/infoDasDbs.js";

//Função em segundo plano do signUp
async function signIn(require, response) {
    const { email, password } = require.body;
    const { error } = schemaLogin.validate({ email, password, });

    if (error) { response.sendStatus(400); return; }

    try {
        //Procurando se o email já não existe
        const user = await armazenaClientes.findOne({ email });
        const isValid = bcrypt.compareSync(password, user.password);
        //Verificando se as senhas batem com a senha armazenada na api
        if (!isValid) { response.sendStatus(401); return; }
        const sessionExist = await armazenaSessoes.findOne({ userId: user._id, });
        if (sessionExist) { response.sendStatus(400); return; }
        const token = uuidv4();
        armazenaSessoes.insertOne({ user: user.name, token, userId: user._id, });
        //Deu bom, mostrar status 200
        response.status(200).send({ username: user.name, token, });
        return;
    }
    //Deu ruim, mostrar status 500
    catch(err) { console.log(err); response.sendStatus(500); }

}

//Função em segundo plano do signUp
async function signUp(require, response) {
    const { name, email, password } = require.body;
    const { error } = schemaRegistro.validate({ name, email, password });
    const hashPass = bcrypt.hashSync(password, 10);
    if(error) { response.sendStatus(400); return; }

    try {
        const userExists = await armazenaClientes.findOne({ email });
        if(userExists) { response.sendStatus(401); return; }
        await armazenaClientes.insertOne({ name, email, password: hashPass, });
        //Deu bom, mostrar status 201
        response.status(201).send("Usuário criado com sucesso!");
        return;
    }
    //Deu ruim, mostrar status 500
    catch(err) { console.log(err); response.sendStatus(500); return; }

}

export { signUp, signIn };
