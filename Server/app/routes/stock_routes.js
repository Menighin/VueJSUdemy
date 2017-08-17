module.exports = function(app, db) {

    let lastStocks = null;

    app.get('/stocks', (req, res) => {

        var values = [];

        if (lastStocks === null) {
            for (var i = 0; i < 4; i++) {
                var random = Math.floor(Math.random() * 50);
                var signal = Math.floor(Math.random() * 10);
                if (signal >= 5) values.push(random);
                else values.push(-random);
            }

            lastStocks = [
                { name: 'Google', price: 120 + values[0]},
                { name: 'Facebook', price: 100 + values[1]},
                { name: 'Amazon', price: 90 + values[2]},
                { name: 'Twitter', price: 60 + values[3]},
            ];

        } else {
            for (var i = 0; i < lastStocks.length; i++) {
                let stock = lastStocks[i];
                var random = Math.floor(Math.random() * 10);
                var signal = Math.floor(Math.random() * 10);
                
                // Big swing factor
                var xFactor = Math.floor(Math.random() * 100);

                if (signal < 4) random = -random;
                if (xFactor > 40 && xFactor < 60) random *= 4;

                stock.price = stock.price + random;

                values.push(stock);
            }
        }
        
        res.send(lastStocks);
    });

}