<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-body></app-body>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    
    import Header from './Header.vue';
    import Body from './Body.vue';
    import Footer from './Footer.vue';

    export default {
        components: {
            'app-header': Header,
            'app-body':  Body,
            'app-footer':  Footer,
        }
    }

</script>

<style>

</style>
