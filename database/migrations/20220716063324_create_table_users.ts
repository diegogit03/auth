import { Knex } from 'knex';

const tableName = 'users';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableIfNotExists(tableName, table => {
        table.increments()

        table.string('username').notNullable()
        table.string('email').unique().notNullable()
        table.string('password').notNullable()
        table.string('photo_url')

        table.string('facebook_id')
        table.string('google_id')


        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists(tableName);
}

