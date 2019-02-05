const express = require('express');
const router = express.Router();
const c_transfer = require('../controllers/transfer.controller');

/** GET RQ **/
router.get('/create', c_transfer.create);
/** POST RQ **/
router.post('/create', c_transfer.postTransfer);
/** Exports module **/
module.exports = router;