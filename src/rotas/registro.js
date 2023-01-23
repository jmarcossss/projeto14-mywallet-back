import express from "express";
import { signUp, signIn } from "../controladores/controleDeRegistro.js";

export const registro = express.registro();

//Fazendo a solicitação dos registros
registro.post("/sign-up", signUp);
registro.post("/sign-in", signIn);