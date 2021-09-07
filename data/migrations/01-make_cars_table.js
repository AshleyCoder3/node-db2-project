exports.up = async function (knex) {
  await knex.schema.createTable('cars', table => {
    table.increments();
    table.string('vin', 100).unique().notNullable();
    table.string('make', 100).notNullable();
    table.string('model', 100).notNullable();
    table.integer('mileage').notNullable();
    table.string('title', 100);
    table.string('transmission');
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars');
};
