const contactsRoutes = require('./contacts_routes');

module.exports = function (app, db) {
    contactsRoutes(app, db);
};