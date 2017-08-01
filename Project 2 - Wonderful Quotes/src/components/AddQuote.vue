<template>

    <div class="row">
        <input type="text" v-model="quote">
        <button @click="addQuote">Add Quote</button>
    </div>

</template>

<script>

    export default {
        data() {
            return {
                quote: ''
            }
        },
        methods: {
            addQuote() {
                this.$emit('addQuote', this.quote);
                this.quote = '';
            }
        }
    }

</script>

<style scoped>

    .row {
        margin: 20px auto;
    }

</style>