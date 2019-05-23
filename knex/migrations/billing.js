exports.up = knex =>
  knex.schema.createTable("billing", table => {
    table.increments("id");
    table
      .string("user_id")
      .notNullable()
      .unique();
    table
      .string("token")
      .notNullable()
      .unique();
    table.string("name").notNullable();
    table.string("billingAddress1").notNullable();
    table.string("billingAddress2");
    table.string("billingCity").notNullable();
    table.string("billingState").notNullable();
    table.string("billingZip").notNullable();
    table.timestamps(true, true);
  });

exports.down = knex => knex.schema.dropTable("billing");
