const router = require('express').Router();
const { checkCarId, checkCarPayload, checkVinNumberValid, checkVinNumberUnique } = require("./cars-middleware");
const Car = require('./cars-model');


router.get('/', async (req, res, next) => {
    try {
        const car = await Car.getAll();
        res.json(car);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', checkCarId, (req, res) => {
    res.json(req.carId);
});

router.post('/',
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
    async (req, res, next) => {
        try {
            const newCar = await Car.create(req.body);
            res.json(newCar);
        } catch (err) {
            next(err);
        }
    });

module.exports = router;
