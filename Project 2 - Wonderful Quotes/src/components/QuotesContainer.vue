<template>
    <div class="row">
        <app-quote v-for="(q, i) in quotes" :key="i" :id="i" @removeQuote="removeQuote">{{ q }}</app-quote>
    </div>
</template>

<script>
    
    import Quote from './Quote.vue';

    export default {
        props: ['quotes'],
        components: {
            appQuote: Quote
        },
        methods: {
            removeQuote(id) {
                this.quotes.splice(id, 1);
            }
        }
    }

</script>