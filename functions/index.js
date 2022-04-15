const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const Stripe = require('stripe');
const stripe = require('stripe')('sk_test_51Kg2ZABgsUXjPdiDkAJfqDObWUa2v57tYOy6x4UEKuQieieuwo1nMt43kO6vfhD9Jw2Bsy7gNzyUAqSEcohjzLgW00LK6jzzg5');

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (req, res) => res.status(200).send("Hello!"));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log("payment request received, amount >>> ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,  // subunits of the currency
        currency: "gbp"
    })

    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})


// Listen command
exports.api = functions.https.onRequest(app);

// Endpoint Example:
// http://localhost:5001/clone-181b3/us-central1/api
