<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>

                <p>{{ text }} | {{ text | reverse }} </p>
                <p>{{ textLength | length }} </p>

                <hr />
                
                <p> {{ text }} | {{ reversedText }} </p>
                <p> {{ countLetters }} </p>
                
            </div>
        </div>
    </div>
</template>

<script>

    import { CountLettersMixin } from './CountLettersMixin';

    export default {
        mixins: [ CountLettersMixin ],
        data() {
            return {
                text: 'To be reversed',
                textLength: 'Length filter applied'
            }
        },
        computed: {
            reversedText() {
                return this.text.split('').reverse().join('');
            }
        },
        filters: {
            reverse(value) {
                return value.split('').reverse().join('');
            }
        }
    }
</script>

<style>
</style>
