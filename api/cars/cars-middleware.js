const checkCarId = (req, res, next) => {
  res.json('Checked id');
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