const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requiresLogin = require('../middlewares/requiresLogin');

module.exports = app => {
  app.post('/api/stripe', requiresLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: 'Charging $5 for email credits',
      source: req.body.id
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};