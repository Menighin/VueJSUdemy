module.exports = function(app, db) {

    app.get('/stocks', (req, res) => {

        var values = [];

        for (var i = 0; i < 4; i++) {
            var random = Math.floor(Math.random() * 50);
            var signal = Math.floor(Math.random() * 10);
            if (signal >= 5) values.push(random);
            else values.push(-random);
        }

        res.send([
            { name: 'Google', price: 120 + values[0]},
            { name: 'Facebook', price: 100 + values[1]},
            { name: 'Amazon', price: 90 + values[2]},
            { name: 'Twitter', price: 60 + values[3]},
        ]);
    });

}