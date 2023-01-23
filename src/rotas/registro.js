import express from "express";
import { signUp, signIn } from "../controladores/controleDeRegistro.js";

const registro = express.registro();
export default registro

//Fazendo a solicitação dos registros
registro.post("/sign-up", signUp);
registro.post("/sign-in", signIn);