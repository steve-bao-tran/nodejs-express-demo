const db = require('../db');
const md5 = require('md5');

module.exports.login = function (req, res) {
    res.render('auths/login');
};

module.exports.postLogin = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    const user = db.get('users').find({email:email}).value();

    if (!user) {
        res.render('auths/login', {
            errors:[
                'User does not exist.'
            ],
            values: req.body
        });
        return;
    }

    var hashPassword = md5(password); // Giai ma nguoc Google "md5 rainbow table"
    if (user.password !== hashPassword) {
        res.render('auths/login', {
            errors:[
                'Wrong password.'
            ],
            values:req.body
        });
        return;
    }
    res.cookie('userId', user.id, {
        signed:true
    }); // use demo, not real 
    res.redirect('/user');
};