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

    export default {
        props: {
            server: {
                type: Object
            }
        },
        methods: {
            changeStatus() {
                this.server.status = 'Normal*';
                this.$emit('statusChanged', this.server);
            }
        }
    }

</script>

<style>

</style>
