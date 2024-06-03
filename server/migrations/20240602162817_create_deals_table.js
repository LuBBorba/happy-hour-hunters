/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('deals', function(table){
        table.increments('id').primary();
        table.integer('place_id').unsigned().notNullable();
        table.foreign('place_id').references('places.id').onDelete('CASCADE');
        table.string('day_of_week').notNullable();
        table.time('start_time').notNullable();
        table.time('end_time').notNullable();
        table.json('item').notNullable();    
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('deals');  
};
