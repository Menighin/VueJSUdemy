<template>
    <div>
        <app-stock v-for="stock in portfolio" v-if="stock.quantity > 0" :stock="stock"></app-stock>
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
                    result[stock.name] = { price: stock.price, status: stock.status };
                    return result;
                }, {});

                return portfolio.map(stock => {
                    stock.price = stocksMap[stock.name].price;
                    stock.status = stocksMap[stock.name].status;
                    return stock;
                });
            }
        },
        components: {
            appStock: Stock
        }
    }

</script>