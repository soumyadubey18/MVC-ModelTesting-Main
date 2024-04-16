import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("subcribe", function (table) {
      table.increments("id").primary();
      table.string("email").unique().index();

      table.timestamp("created_at").notNullable();
      table.timestamp("updated_at").notNullable();
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("subcribe");
}
