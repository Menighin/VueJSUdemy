<template>
    <li class="list-group-item" @click="selectServer"> Server #{{ server.id }} ({{ server.status }})</li>
</template>

<script>
    export default {
        props: {
            server: {
                type: Object,
                required: true
            }
        },
        methods: {
            selectServer() {
                this.$emit('selectServer', this.server);
            }
        }
    }
</script>