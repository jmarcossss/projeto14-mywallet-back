import express from "express";
import { userTransactions } from "../controladores/controleDeOperacoes.js";
import { authMiddleware } from "../todosMiddlewares/middleware.js";
import { transactionMiddleware } from "../todosMiddlewares/operacoesDeMiddleware.js";

export const moviment = express.moviment();

//Solicitar as movimentações que foram feitas (ganhos e perdas)
moviment.post("/transactions", authMiddleware, transactionMiddleware, userTransactions);

