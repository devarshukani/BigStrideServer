const functions = require('firebase-functions');
const admin = require('firebase-admin');
// const stripe = require('stripe')('STRIPE SECRET KEY HERE');
const stripe = require('stripe')('sk_test_51NPllASFBBpl8tLICCkdtLqVGBmJYkD9BRYlJw0stkJuXLatIFhC19TgGDOWLi1lR2Lyn7HQzdhshm4On0xtZfDF006th62qkT');


admin.initializeApp();

exports.createPaymentSheet = functions.https.onRequest(async (req, res) => {
    try {
        const customer = await stripe.customers.create();
        const ephemeralKey = await stripe.ephemeralKeys.create(
            { customer: customer.id },
            { apiVersion: '2022-11-15' }
        );
        const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: 'inr',
        customer: customer.id,
        automatic_payment_methods: {
            enabled: true,
        },
        });

        res.json({
            paymentIntent: paymentIntent.client_secret,
            ephemeralKey: ephemeralKey.secret,
            customer: customer.id,
            // publishableKey:'STRIPE PUBLISHABLE KEY HERE',
            publishableKey:'pk_test_51NPllASFBBpl8tLIV6WWpehHvhACdqMavmvaC8yteGMIQxZZ2MX1kicGuHI9w6gVe7Rdx1Lycp8M7M551f0bH2p700KhEpHiYN',
        });
    } 
    catch (error) {
        res.status(500).send(error.message);
    }
});


exports.createPaymentSheetPro = functions.https.onRequest(async (req, res) => {
    try {
        const customer = await stripe.customers.create();
        const ephemeralKey = await stripe.ephemeralKeys.create(
            { customer: customer.id },
            { apiVersion: '2022-11-15' }
        );
        const paymentIntent = await stripe.paymentIntents.create({
        amount: 3000,
        currency: 'inr',
        customer: customer.id,
        automatic_payment_methods: {
            enabled: true,
        },
        });

        res.json({
            paymentIntent: paymentIntent.client_secret,
            ephemeralKey: ephemeralKey.secret,
            customer: customer.id,
            // publishableKey:'STRIPE PUBLISHABLE KEY HERE',
            publishableKey:'pk_test_51NPllASFBBpl8tLIV6WWpehHvhACdqMavmvaC8yteGMIQxZZ2MX1kicGuHI9w6gVe7Rdx1Lycp8M7M551f0bH2p700KhEpHiYN',
        });
    } 
    catch (error) {
        res.status(500).send(error.message);
    }
});



