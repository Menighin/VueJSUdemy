<template>
    <li style="cursor: pointer" class="list-group-item" @click="selectServer"> Server #{{ server.id }} ({{ server.status }})</li>
</template>

<script>

    import {eventBus} from '../../main';

    export default {
        props: {
            server: {
                type: Object,
                required: true
            }
        },
        methods: {
            selectServer() {
                eventBus.selectServer(this.server);
            }
        }
    }
</script>