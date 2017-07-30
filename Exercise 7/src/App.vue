<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers @selectServer="server = $event"></servers>
            <app-server-details :server="server" @statusChanged="server = $event"></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        },
        data() {
            return {
                server: null
            }
        }
    }
</script>

<style>

</style>
