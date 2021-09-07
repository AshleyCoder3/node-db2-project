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

router.get('/:id', checkCarId, (req, res, next) => {
    try {
        res.json('GET id is Working');
    } catch (err) {
        next(err);
    }
});

router.post('/',
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
    (req, res, next) => {
        try {
            res.json('POST is Working');
        } catch (err) {
            next(err);
        }
    });

module.exports = router;
