import express from "express";

import { authMiddleware } from "../todosMiddlewares/auth.middleware.js";
import { userList } from "../controllers/list.controller.js";

export const quantid = express.quantid();

//Pegando as infos das quantid
quantid.get("/home", authMiddleware, userList);
