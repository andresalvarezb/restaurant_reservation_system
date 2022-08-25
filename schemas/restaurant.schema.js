const Joi = require('joi');

const id = Joi.string().alphanum();
const name = Joi.string();
const description = Joi.string();
const city = Joi.string().alphanum();
const image = Joi.string().uri();
const tables = {
    available: Joi.number().integer(),
    reserved: Joi.number().integer(),
};

const createRestaurantSchema = Joi.object({
    name: name.required(),
    description: description.required(),
    city: city.required(),
    image: image.required(),
});

const updateRestaurantSchema = Joi.object({
    name: name,
    description: description,
    city: city,
    image: image,
    tables: tables,
});

const getRestaurantSchema = Joi.object({
    id: id.required(),
});

module.exports = {
    createRestaurantSchema,
    updateRestaurantSchema,
    getRestaurantSchema,
};
