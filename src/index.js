//Importando bibliotecas padrões
import express from "express";
import cors from "cors";
import chalk from "chalk";

// Importando bibliotecas relacionadas as rotas
import authRoutes from "./routes/auth.routes.js";
import transactionRoutes from "./routes/transactions.routes.js";
import listRoutes from "./routes/list.routes.js";
import sessionRoutes from "./routes/session.routes.js";

//Inicializando o servidor e padronizando
const servidor = express();
servidor.use(cors());
servidor.use(express.json());
servidor.use(authRoutes);
servidor.use(transactionRoutes);
servidor.use(listRoutes);
servidor.use(sessionRoutes);

servidor.listen(process.env.PORT_API, () => {
    console.log(
        chalk.bold.cyan(`[Listening ON] Port: ${process.env.PORT_API}.`)
    );
});
