const stockRoutes = require('./stock_routes');
const stateRoutes = require('./state_routes');

module.exports = function(app, db) {
    stockRoutes(app, db);
    stateRoutes(app, db);
}