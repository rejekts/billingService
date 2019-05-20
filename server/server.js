require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const stripe = require("stripe")(process.env.SECRET_KEY);
const port = process.env.PORT || 8000;
app.use(express.static("dist"));
app.use(
  bodyParser.json({
    strict: false
  })
);
console.log(
  (async () => {
    const charge = await stripe.charges.create({
      amount: 999,
      currency: "usd",
      source: "tok_visa",
      receipt_email: "jenny.rosen@example.com"
    });
    console.log(charge);
  })()
);

app.listen(port, () => {
  console.log(`The shenanigans have started on aisle ${port}`);
});
