const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');
class RestaurantServices {
    constructor() {
        this.restaurants = [];
        this.generate();
    }

    generate() {
        for (let i = 0; i < 10; i++) {
            this.restaurants.push({
                id: faker.database.mongodbObjectId(),
                name: faker.company.name(),
                description: faker.company.catchPhrase(),
                city: faker.address.city(),
                image: faker.image.food(),
                tables: {
                    available: 15,
                    reserved: 0,
                },
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
            ...body,
            tables: {
                available: 15,
                reserved: 0,
            },
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
        const restaurant = this.restaurants.find(
            (restaurant) => restaurant.id === id
        );
        if (!restaurant) {
            throw boom.notFound('Restaurant not found');
        }
        return restaurant;
    }

    filter(query) {
        const { city } = query;
        if (city) {
            return this.restaurants
                .filter((restaurant) => restaurant.city === city)
                .sort((a, b) => {
                    const nameA = a.name[0].toLowerCase();
                    const nameB = b.name[0].toLowerCase();
                    if (nameA == nameB) {
                        return 0;
                    }
                    if (nameA < nameB) {
                        return -1;
                    }
                    return 1;
                });
        } else {
            throw boom.badRequest('Query unknown');
        }
    }

    update(id, body) {
        const index = this.restaurants.findIndex(
            (restaurant) => restaurant.id === id
        );
        if (index === -1) {
            throw boom.notFound('Restaurant not found');
        }
        const restaurant = this.restaurants[index];
        this.restaurants[index] = {
            ...restaurant,
            ...body,
        };
        return restaurant;
    }

    delete(id) {
        const restaurantDeleted = this.findOne(id);
        const newListOfRestaurants = this.restaurants.filter(
            (restaurant) => restaurant.id !== id
        );
        this.restaurants = newListOfRestaurants;
        return restaurantDeleted;
    }
}

module.exports = new RestaurantServices();
