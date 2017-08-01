<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
        <template v-if="server != null">
            <p>Server ID: {{ server.id }}</p>
            <p>Status: {{ server.status }}</p>
            <button @click="changeStatus">Change status</button>
        </template>
    </div>
</template>

<script>

    import {eventBus} from '../../main';

    export default {
        props: {
            server: {
                type: Object
            }
        },
        methods: {
            changeStatus() {
                this.server.status = 'Normal*';
            }
        },
        created() {
            eventBus.$on('selectServer', (server) => {
                this.server = server;
            });
        }
    }

</script>

<style>

</style>
