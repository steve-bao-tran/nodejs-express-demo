const express = require('express');
const router = express.Router();
const c_product = require('../controllers/product.controller');

/** GET RQ **/
router.get('/', c_product.list);
/** POST RQ **/
// router.post('/login', c_product.postLogin);
/** Exports module **/
module.exports = router;