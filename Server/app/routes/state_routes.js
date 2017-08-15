module.exports = function(app, db) {

    let state = {};

    app.post('/state', (req, res) => {
        state = req.body;
        res.end();
    });

    app.get('/state', (req, res) => {
        res.send(state);
    });

}