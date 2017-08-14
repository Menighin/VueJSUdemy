<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading stock-title">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price }}) (Quantity: {{ stock.quantity }}) </small>
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
                quantity: ''
            }
        },
        computed: {
            canSell() {
                return this.quantity.length > 0 && this.quantity <= this.stock.quantity;
            }
        },
        methods: {
            sell() {
                
            }
        },
        props: {
            stock: Object
        }
    }

</script>

<style>

</style>