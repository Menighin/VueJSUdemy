<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <app-server v-for="s in servers" :server="s" :key="s.id"></app-server>
        </ul>
    </div>
</template>

<script>

    import Server from './Server.vue';

    export default {
        data() {
            return {
                servers: [
                    {id: 1, status: 'Normal'},
                    {id: 2, status: 'Critical'},
                    {id: 3, status: 'Unknown'},
                    {id: 4, status: 'Normal'},
                    {id: 5, status: 'Locked'},
                ]
            }
        },
        components: {
            'app-server': Server
        }
    }

</script>

<style>

</style>
