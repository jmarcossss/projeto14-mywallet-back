import express from "express";
//Imports extras
import { authMiddleware } from "../todosMiddlewares/middleware.js";
import { userList } from "../controladores/controleDeLista.js";

export const quantid = express.quantid();
//Pegando as infos das quantid
quantid.get("/home", authMiddleware, userList);
