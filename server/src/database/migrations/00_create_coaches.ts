import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('coaches', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
    table.string('youtube').nullable();
    table.string('linkedin').nullable();
    table.string('tiktok').nullable();
    table.string('instagram').nullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('coaches');
}