/* Cách 1 */
// module.exports.a = 1;
// module.exports.b = 2;
/* Cách 2 */
// module.exports = {
//     a:1,
//     b:2
// };

const shortid = require('shortid');
var db = require('../db');
/** ************************************************************************************************** */
module.exports.list = function (req, res) {
    res.render('users/index', {
        users: db.get('users').value()
    });
};

module.exports.search = function (req, res) {   
    // console.log(req.query);
    let q = req.query.q; 
    // var q = req.param('q');//     

    const matchedUsers = db.get('users').value().filter(function (user) {
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users: matchedUsers
    });   
};

module.exports.getCreate = function (req, res) {
    res.render('users/create', {
        users: db.get('users').value()
    });
};

module.exports.detail = function (req, res) {
    // Neu kieu INT id = parseInt(req.param.id);
    // console.log(typeof id);    
    res.render('users/detail', {
        user: db.get('users').find({id: req.params.id}).value()
    });
};

module.exports.postCreate = function (req, res) {   
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/user');
};