const environment = process.env.ENVIRONMENT || "development";
const options = require("../knexfile.js")[environment];
const knex = require("knex")(options);

const saveInfo = payload => {
  //save stuff to db
  return knex("billing")
    .insert(payload)
    .then(results => {
      console.log(results);
      return results;
    });
};
const updateInfo = payload => {
  //update stuff in db
  return knex("billing")
    .where({ user_id: payload.user_id })
    .update(payload)
    .then(results => {
      console.log(results);
      return results;
    });
};
const getInfo = id => {
  return knex("billing")
    .select("*")
    .where({ user_id: id })
    .then(results => {
      if (results.length === 0) {
        console.log("nothing found");
        return false;
      } else {
        console.log(results, " results to send back");
        return results;
      }
    });
};

module.exports = { saveInfo, getInfo, updateInfo };
