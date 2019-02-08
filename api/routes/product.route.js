const express = require('express');
const router = express.Router();
const api_product = require('../../api/controllers/product.controller');

/** GET RQ **/
router.get('/', api_product.list);
/** POST RQ **/
router.post('/', api_product.create);
/** Exports module **/
module.exports = router;