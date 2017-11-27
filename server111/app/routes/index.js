const contactsRoutes = require('./app_routes');

module.exports = function (app, db) {
    contactsRoutes(app, db);
};