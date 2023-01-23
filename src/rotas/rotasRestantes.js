import express from "express";

import { authMiddleware } from "../todosMiddlewares/middleware.js";
import { endSession } from "../controladores/controleDeSessao.js";

export const autent = express.autent();

//Apagar as autents
autent.delete("/session", authMiddleware, endSession);

