import express from "express";
import { userTransactions } from "../controladores/controleDeOperacoes.js";
import { authMiddleware } from "../todosMiddlewares/middleware.js";
import { transactionMiddleware } from "../todosMiddlewares/operacoesDeMiddleware.js";

const moviment = express.moviment();
export default moviment

//Solicitar as movimentações que foram feitas (ganhos e perdas)
moviment.post("/transactions", authMiddleware, transactionMiddleware, userTransactions);


