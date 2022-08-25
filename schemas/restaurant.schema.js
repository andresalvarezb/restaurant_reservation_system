const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum();
const description = Joi.string().alphanum();
const city = Joi.string().alphanum();
const image = Joi.string().uri();
const tables = {
    vailable: Joi.number().integer(),
    reserved: Joi.number().integer(),
};

const createRestaurantSchema = Joi.object({
    name: name.required(),
    description: description.required(),
    city: city.required(),
    image: image.required(),
});

const updateRestaurantSchema = Joi.object({
    name: name.optional(),
    description: description.optional(),
    city: city.optional(),
    image: image.optional(),
    tables: tables.optional(),
});

const getRestaurantSchema = Joi.object({
    id: id.required(),
});

module.exports = {
    createRestaurantSchema,
    updateRestaurantSchema,
    getRestaurantSchema,
};
