exports.seed = (knex, Promise) => {
  return knex("billing")
    .del()
    .then(() => {
      return knex("billing").insert([
        {
          user_id: "3",
          token: "tok_1EcJQzDbqAQgxqBKVwJ1fu8C",
          name: "Asdf Asdf",
          billingAddress1: "123 Asdf st",
          billingAddress2: "APT 3123",
          billingCity: "Austin",
          billingState: "Texas",
          billingZip: "78613"
        }
      ]);
    });
};
