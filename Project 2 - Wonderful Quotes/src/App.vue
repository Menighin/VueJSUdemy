<template>
    <div class="container">

        <h1>Wonderful Quotes</h1>

        <div class="row">
            <div class="quotes-bar">
                <div class="text-center quotes-bar-fill" :style="progressBarStyle">
                    {{ quotes.length }} / {{ maxQuotes }}
                </div>
            </div>
        </div>

        <app-add-quote @addQuote="addQuote"> </app-add-quote>

        <app-quotes-container :quotes="quotes"> </app-quotes-container>
    </div>
</template>

<script>

    import QuotesContainer from './components/QuotesContainer.vue';
    import AddQuote from './components/AddQuote.vue'

    export default {
        data() {
            return {
                quotes: [
                    'I put the "HOT" in "psycHOTic"',
                    'Better safe than dead'
                ],
                maxQuotes: 10
            }
        },
        methods: {
            addQuote(quote) {
                if (this.quotes.length < 10) 
                    this.quotes.push(quote);
                else
                    alert('You reached the maximum number of quotes');
            }
        },
        components: {
            appQuotesContainer: QuotesContainer,
            appAddQuote: AddQuote
        },
        computed: {
            progressBarStyle() {
                return {
                    width: (this.quotes.length * 10) + '%'
                }
            }
        }
    }
</script>

<style>

.quotes-bar {
    height: 20px;
    background-color: #eee;
    margin: 20px auto;
    transition: width 500ms;
    border: 1px solid #888;
}

.quotes-bar-fill {
    background-color: #5ccaff;
    height: 18px;
    color: black;
}

</style>
