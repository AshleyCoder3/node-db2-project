const Car = require('./cars-model');
const vinValidator = require('vin-validator');
const db = require('../../data/db-config');


const checkCarId = async (req, res, next) => {
  const carId = await Car.getById(req.params.id);
  if (!carId) {
    next({
      message: `car with id ${req.params.id} is not found`,
      status: 404
    });
  } else {
    req.carId = carId;
    next();
  }
};

const checkCarPayload = (req, res, next) => {
  try {
    const { vin, make, model, mileage } = req.body;
    if (!vin) {
      next({
        message: `vin is missing`,
        status: 400
      });
    }
    if (!make) {
      next({
        message: `make is missing`,
        status: 400
      });
    } if (!model) {
      next({
        message: `model is missing`,
        status: 400
      });
    } if (!mileage) {
      next({
        message: `mileage is missing`,
        status: 400
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkVinNumberValid = async (req, res, next) => {
  try {
    const isVinValid = vinValidator.validate(req.body.vin);
    if (isVinValid) {
      next();
    } else {
      next({
        message: `vin ${req.body.vin} is invalid`,
        status: 400
      });
    }
  } catch (err) {
    next(err);
  }
};

const checkVinNumberUnique = async (req, res, next) => {
  const { vin } = req.body;
  const vinNotUnique = await db('cars').where('vin', vin).first();
  if (vinNotUnique) {
    next({
      message: `vin ${vin} already exists`,
      status: 400
    });
  } else {
    next();
  }
};

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberUnique,
  checkVinNumberValid
};