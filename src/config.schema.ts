import * as Joi from '@hapi/joi';

export const configValidationSchema = Joi.object({
    PORT: Joi.number().default(3001),
    STAGE: Joi.string().required(),
    DB_HOST: Joi.string().required(),
    DB_PORT: Joi.number().default(3306).required(),
    DB_USERNAME: Joi.string().required(),
    DB_PASSWORD: Joi.string().default('ed53e15f').required(),
    DB_DATABASE: Joi.string().required(),
});