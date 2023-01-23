import express from "express";

import { authMiddleware } from "../todosMiddlewares/auth.middleware.js";
import { endSession } from "../controllers/session.controller.js";

export const autent = express.autent();

//Apagar as autents
autent.delete("/session", authMiddleware, endSession);

