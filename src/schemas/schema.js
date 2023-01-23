//Função padrão para mexer com valores
import joi from "joi";

export const schemaLogin = joi.object({ email: joi.string().email().required(), password: joi.string().required(), });
export const schemaRegistro = joi.object({ name: joi.string().required(), email: joi.string().email().required(), password: joi.string().required(), });
