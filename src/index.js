//Importando bibliotecas padrões
import express from "express"
import cors from "cors"
// Importando bibliotecas relacionadas as rotas
import listRoutes from "./rotas/listagem.js"
import sessionRoutes from "./rotas/rotasRestantes.js"
import authRoutes from "./rotas/registro.js"
import transactionRoutes from "./rotas/operations.js"

//Inicializando o servidor e padronizando
const servidor = express()
servidor.use(cors())
servidor.use(express.json())
const PORTA = 5000

//Rotas
servidor.use(sessionRoutes);
servidor.use(transactionRoutes);
servidor.use(listRoutes);
servidor.use(authRoutes);

servidor.listen(PORTA, () => {
    console.log(`Rodando na porta ${PORTA}...`);
});
