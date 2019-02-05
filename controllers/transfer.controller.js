const shortid = require('shortid');
const db = require('../db');

module.exports.create = function (req, res) {
    // res.render('transfers/create', {
    //     csrfToken: req.csrfToken()
    // });
    res.render('transfers/create');
};

module.exports.postTransfer = function (req, res) {
    var data = {
        id: shortid.generate(),
        amount: parseInt(req.body.amount),
        accountId: req.body.account,
        userId: req.signedCookies.userId
    };
    
    db.get('transfers').push(data).write();
    res.redirect('/transfer/create');
};