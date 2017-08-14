module.exports = function(app, db) {

    app.get('/stocks', (req, res) => {
        res.send([
            { name: 'Google', price: 100},
            { name: 'Facebook', price: 80},
            { name: 'Amazon', price: 90},
            { name: 'Twitter', price: 60},
        ]);
    });

}