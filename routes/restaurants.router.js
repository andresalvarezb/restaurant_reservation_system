const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');

router.get('/', (req, res) => {
    const restaurants = [];
    for (let i = 0; i < 10; i++) {
        restaurants.push({
            id: faker.database.mongodbObjectId(),
            name: faker.company.name(),
            description: faker.company.catchPhrase(),
            address: `${faker.address.city()}, ${faker.address.secondaryAddress()} in ${faker.address.street()}`,
            image: faker.image.food(),
            tables: 15,
        });
    }
    res.json(restaurants);
});

module.exports = router;