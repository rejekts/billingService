require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const stripe = require("stripe")(process.env.SECRET_KEY);
const port = process.env.PORT || 8000;
const db = require("../knex/knex.js");
app.use(express.static("dist"));
app.use(
  bodyParser.json({
    strict: false
  })
);
app.get("/billing/information/:id", (req, res) => {
  db.getInfo(req.params.id).then(results => {
    if (results) {
      res.status(200).send(results);
    } else {
      res.status(204).send(false);
    }
  });
});
app.post("/billing/information", (req, res) => {
  console.log(req.body, "body of post request");
  db.saveInfo(req.body)
    .then(results => {
      console.log(results, " response from saveInfo");
    })
    .catch(err => {
      console.log("fail in saveInfo");
    });
});

// console.log(
//   (async () => {
//     const charge = await stripe.charges.create({
//       amount: 999,
//       currency: "usd",
//       source: "tok_visa",
//       receipt_email: "jenny.rosen@example.com"
//     });
//   })()
// );

app.listen(port, () => {
  console.log(`The shenanigans have started on aisle ${port}`);
});
