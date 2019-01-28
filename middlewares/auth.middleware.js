const db = require('../db');

module.exports.requireAuth = function (req, res, next) {
    // console.log(req.cookies.userId+' - '+ req.signedCookies.userId);
    var cookiesUser = req.cookies.userId; // cookies normal
    var signedCookiesUser = req.signedCookies.userId; // cookies safe
    if (!signedCookiesUser) {
        res.redirect('/auth/login');
        return;
    } 

    const user = db.get('users').find({id:signedCookiesUser}).value();
    if (!user) {
        res.redirect('/auth/login');
        return; 
    }

    res.locals.user = user;
    next();
};