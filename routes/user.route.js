const express = require('express');

const router = express.Router();
const c_user = require('../controllers/user.controller');
const v_user = require('../validate/user.validate');
// const mw_auth = require('../middlewares/auth.middleware');

/** GET RQ **/
router.get('/', c_user.list);
/** TEST MIDLLEWARE **/
/*
function middleware1 (req, res, next) {
    console.log('middleware1');
    res.locals.success = true;
    next();
}
function middleware2 (req, res, next) {
    console.log('middleware2');
    console.log(res.locals);
    res.send('Hello world');
}
router.get('/test', middleware1, middleware2);
*/
router.get('/cookie', function (req, res, next) {
    res.cookie('user-id', 123456);
    res.send('Hello world');
});

router.get('/search', c_user.search);
router.get('/create', c_user.getCreate);
router.get('/:id', c_user.detail);
/** POST RQ **/
router.post('/create', v_user.postCreate, c_user.postCreate);
/** Exports module **/
module.exports = router;