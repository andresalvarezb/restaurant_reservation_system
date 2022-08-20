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

    create() {}
    find() {
        return this.restaurants;
    }
    update() {}
    delete() {}
}
module.exports = RestaurantServices;
