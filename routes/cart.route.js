const express = require('express');

const router = express.Router();
const c_cart = require('../controllers/cart.controller');

/** GET RQ **/
router.get('/add/:productId', c_cart.addToCart);
/** POST RQ **/

/** Exports module **/
module.exports = router;