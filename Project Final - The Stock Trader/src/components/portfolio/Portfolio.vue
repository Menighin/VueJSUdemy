<template>
    <div>
        <div v-for="stock in portfolio">
            <app-stock :stock="stock"></app-stock>
        </div>
    </div>
</template>

<script>

    import Stock from './Stock.vue';

    export default {
        data() {
            return {

            }
        },
        computed: {
            portfolio() {
                var portfolio = this.$store.getters.portfolio;
                var stocks = this.$store.getters.stocks;

                var stocksMap = stocks.reduce((result, stock) => {
                    result[stock.name] = stock.price;
                    return result;
                }, {});

                return portfolio.map(stock => {
                    stock.price = stocksMap[stock.name];
                    return stock;
                });
            }
        },
        components: {
            appStock: Stock
        }
    }

</script>