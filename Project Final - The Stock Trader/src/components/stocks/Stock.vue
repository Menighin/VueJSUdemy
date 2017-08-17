<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-primary">
            <div class="panel-heading stock-title" :style="buyAnimating">
                <h3 class="panel-title">
                    <small>
                        <span style="color: #82ff82" class="fa fa-long-arrow-up" v-if="stock.status === 'up'"></span>
                        <span style="color: #ff5e5e" class="fa fa-long-arrow-down" v-else-if="stock.status === 'down'"></span>
                        <span class="fa fa-circle" v-else></span>
                    </small>
                    {{ stock.name }}
                    <small>(Price: {{ stock.price | currency }}) </small>
                    <small class="pull-right" v-if="quantity.length > 0" :style="{ color: canBuy ? 'white' : '#ff9898'}">Total: {{ total | currency }}</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Quantity" v-model="quantity" />
                    <span class="input-group-btn">
                        <button class="btn btn-success" type="button" @click="buyStock" :disabled="!canBuy">Buy</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                quantity: '',
                buyAnimation: false,
            }
        },
        computed: {
            buyAnimating() {
                if (this.buyAnimation === true) {
                    setTimeout( () => this.buyAnimation = false, 400);
                    return { backgroundColor: '#82c5ff' };
                }

                return {};
            },
            money() {
                return this.$store.getters.getMoney;
            },
            total() {
                return parseInt(this.quantity) * parseInt(this.stock.price);
            },
            canBuy() {
                return this.quantity.length > 0 && this.money >= this.total;
            }
        },
        methods: {
            buyStock() {
                if (this.quantity.length > 0) {
                    this.$store.dispatch("buyStock", { buyOrder: {name: this.stock.name, price: this.stock.price, quantity: parseInt(this.quantity)} });
                    this.quantity = '';
                    this.buyAnimation = true;
                }
            }
        },
        props: {
            stock: Object
        }
    }

</script>

<style>
    .stock-title {
        transition: background-color 0.3s ease;
    }
</style>