const user_model = require('../models/user-model');
const auth_views = require('../views/auth-views');

const get_login = (req, res, next) => {
    console.log('user: ', req.session.user)
    res.send(auth_views.login_view());
};

module.exports.get_login = get_login;