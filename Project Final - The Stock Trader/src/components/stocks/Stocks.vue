<template>
    <div class="row">
        <div v-for="stock in stocks">
            <app-stock :stock="stock"></app-stock>
        </div>
    </div>
</template>

<script>

    import Stock from './Stock.vue';

    export default {
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        },
        components: {
            appStock: Stock
        }
    }

</script>