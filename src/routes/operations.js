import express from "express";
import { userTransactions } from "../controllers/transactions.controller.js";
import { authMiddleware } from "../todosMiddlewares/auth.middleware.js";
import { transactionMiddleware } from "../todosMiddlewares/transactions.middleware.js";

export const moviment = express.moviment();

//Solicitar as movimentações que foram feitas (ganhos e perdas)
moviment.post("/transactions", authMiddleware, transactionMiddleware, userTransactions);

