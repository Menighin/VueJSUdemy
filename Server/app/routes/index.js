const stockRoutes = require('./stock_routes');

module.exports = function(app, db) {
    stockRoutes(app, db);
}