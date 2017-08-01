<template>
    <div class="col-sm-6 col-md-4 col-lg-3"  >
        <div class="panel panel-default">
            <div class="panel-body quote" @click="removeQuote">
                <slot> </slot>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['id'],
        methods: {
            removeQuote() {
                this.$emit('removeQuote', this.id);
            }
        }
    }

</script>

<style>

    .quote {
        font-family: cursive;
        font-size: 18px;
    }

    .quote:hover {
        background-color: coral;
        cursor: pointer;
    }

</style>
