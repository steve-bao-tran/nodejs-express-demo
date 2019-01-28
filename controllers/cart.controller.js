const db = require('../db');
module.exports.addToCart = function (req, res) {
    var productId = parseInt(req.param.productId);
    var sessionId = req.signedCookies.sessionId;

    if (!sessionId) {
        res.redirect('/product');
        return;
    }

    var count = db.get('sessions').find({id:productId}).get('cart.'+productId, 0).value();

    db.get('sessions').find({id:productId}).set('cart.'+productId, count+1).write();
    res.redirect('/product');
};