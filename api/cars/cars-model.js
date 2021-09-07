const db = require('../../data/db-config');

const getAll = () => {
  return db('cars');
};

const getById = () => {
  return 'getById';
};

const create = () => {
  return 'create';
};

module.exports = {
  getAll,
  getById,
  create
};