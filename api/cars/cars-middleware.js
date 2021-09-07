const Car = require('./cars-model');


const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id);
    if (!car) {
      next({
        message: `car with id ${car} is not found`,
        status: 404
      });
    }
  } catch (err) {
    next(err);
  }
};

const checkCarPayload = (req, res, next) => {
  res.json('Checked payload');
};

const checkVinNumberValid = (req, res, next) => {
  res.json('Checked vin number valid');
};

const checkVinNumberUnique = (req, res, next) => {
  res.json('Checked vin number unique');
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
};