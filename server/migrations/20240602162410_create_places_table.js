/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('places', function(table){
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('contact_info').notNullable();
    table.string('website').notNullable();

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('places');
};
