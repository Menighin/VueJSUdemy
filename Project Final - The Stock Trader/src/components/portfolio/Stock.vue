<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading stock-title" :style="sellAnimating">
                <h3 class="panel-title">
                    <small>
                        <span style="color:#21d621" class="fa fa-long-arrow-up" v-if="stock.status === 'up'"></span>
                        <span style="color: red" class="fa fa-long-arrow-down" v-else-if="stock.status === 'down'"></span>
                        <span class="fa fa-circle" v-else></span>
                    </small>
                    {{ stock.name }}
                    <small>(Price: {{ stock.price | currency }} | Quantity: {{ stock.quantity }}) </small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Quantity" v-model="quantity"  />
                    <span class="input-group-btn">
                        <button class="btn btn-danger" type="button" :disabled="!canSell" @click="sell">Sell</button>
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
                sellAnimation: false
            }
        },
        computed: {
            sellAnimating() {
                if (this.sellAnimation === true) {
                    setTimeout( () => this.sellAnimation = false, 400);
                    return { backgroundColor: '#baff9d' };
                }

                return {};
            },
            canSell() {
                return this.quantity.length > 0 && this.quantity <= this.stock.quantity;
            }
        },
        methods: {
            sell() {
                this.$store.dispatch("sellStock", { salesOrder: {name: this.stock.name, price: this.stock.price, quantity: parseInt(this.quantity)} });
                this.quantity = '';
                this.sellAnimation = true;
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