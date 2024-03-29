const express = require('express');

const router = express.Router();
const c_auth = require('../controllers/auth.controller');
// const mw_auth = require('../middlewares/auth.middleware');

/** GET RQ **/
router.get('/login', c_auth.login);
/** POST RQ **/
router.post('/login', c_auth.postLogin);
/** Exports module **/
module.exports = router;