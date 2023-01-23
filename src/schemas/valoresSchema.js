import joi from "joi";

export const schemaValues = joi.object({ type: joi.string().valid("entry", "exit").required(), value: joi.number().required(), description: joi.string().required(), });
