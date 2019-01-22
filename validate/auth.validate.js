module.exports.login = function (req, res, next) {
    var errors = [];
    if (! req.body.email) {
        errors.push('Email is required.');
    }
    if (! req.body.password) {
        errors.push('Password is required.');
    }
    if (errors.length > 0) {
        res.render('auths/login', {
            errors:errors,
            values:req.body
        });
        return;
    }
    next();
};