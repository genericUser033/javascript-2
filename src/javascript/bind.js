const app = (function myFunc() {
    const cars = [];
    return {
        get(index) {
            return cars[index];
        },
        add(car) {
            cars.push(car)
        },
        delete(index) {
            cars.splice(index, 1);
        },
        update(index, car) {
            cars[index] = car;
        }
    }
})()