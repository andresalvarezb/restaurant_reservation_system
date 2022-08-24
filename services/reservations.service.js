const { faker } = require('@faker-js/faker');
const restaurantService = require('./restaurants.service');
const boom = require('@hapi/boom');
class ReservationService {
    constructor() {
        this.reservations = [];
    }

    create(id) {
        const restaurant = restaurantService.findOne(id);
        const tablesAvailable = restaurant.tables.available;
        const tablesReserved = restaurant.tables.reserved;

        const reservation = {
            id: faker.database.mongodbObjectId(),
            name: restaurant.name,
            city: restaurant.city,
            date: new Date(),
        };

        this.reservations.push(reservation);

        if (this.reservations.length > 20) {
            throw boom.notAcceptable(
                "You can't do more reservations. 20 is the limit for day"
            );
        }

        if (restaurant.tables.reserved === 15) {
            throw boom.notAcceptable(
                "You can't do more reservations. 15 is the limit for day"
            );
        }
        const updateRestaurant = restaurantService.update(id, {
            tables: {
                available: tablesAvailable - 1,
                reserved: tablesReserved + 1,
            },
        });
        return updateRestaurant;
    }

    find() {
        return this.reservations;
    }
}

module.exports = new ReservationService();
