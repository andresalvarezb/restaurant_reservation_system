const { faker } = require('@faker-js/faker');

class RestaurantServices {
    constructor() {
        this.restaurants = [];
        this.generate();
    }

    generate() {
        for (let i = 0; i < 5; i++) {
            this.restaurants.push({
                id: faker.database.mongodbObjectId(),
                name: faker.company.name(),
                description: faker.company.catchPhrase(),
                address: `${faker.address.city()}, ${faker.address.secondaryAddress()} in ${faker.address.street()}`,
                image: faker.image.food(),
                tables: 15,
            });
        }
    }

    create(body) {
        /**
         * ! validate data with JOI
         *  name
         * description
         * city
         * url image
         */

        this.restaurants.push({
            id: faker.database.mongodbObjectId(),
            tables: 15,
            ...body,
        });
        return {
            message: 'Crested restaurant',
            data: body,
        };
    }

    find() {
        return this.restaurants;
    }

    findOne(id) {
        return this.restaurants.find((restaurant) => restaurant.id === id);
    }

    update(id, body) {
        const index = this.restaurants.findIndex(
            (restaurant) => restaurant.id === id
        );
        if (index === -1) {
            return {
                message: 'Restaurant not found',
                index,
            };
        }
        const restaurant = this.restaurants[index];
        this.restaurants[index] = {
            ...restaurant,
            ...body,
        };
        return restaurant;
    }
    delete() {}
}
module.exports = RestaurantServices;
