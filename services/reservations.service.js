const { faker } = require('@faker-js/faker');
const restaurantService = require('./restaurants.service');

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
        const updateRestaurant = restaurantService.update(id, {
            tables: {
                available: tablesAvailable - 1,
                reserved: tablesReserved + 1,
            },
        });
        return updateRestaurant;
    }

    find() {
        console.log(this.reservations);
        return this.reservations;
    }
}

module.exports = new ReservationService();
