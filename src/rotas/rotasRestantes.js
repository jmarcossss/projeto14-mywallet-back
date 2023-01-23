import express from "express";

import { authMiddleware } from "../todosMiddlewares/middleware.js";
import { endSession } from "../controladores/controleDeSessao.js";

const autent = express.autent();
export default autent

//Apagar as autents
autent.delete("/session", authMiddleware, endSession);

