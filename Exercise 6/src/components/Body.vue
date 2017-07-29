<template>
    <div class="row">
        <div class="col-xs-12 col-sm-6">
            <servers-list></servers-list>
        </div>
        <div class="col-xs-12 col-sm-6">
            <p>Server Details are currently not updated</p>
        </div>
    </div>
</template>

<script>

    import ServersList from './ServersList.vue';

    export default {
        components: {
            'servers-list': ServersList
        }
    }
</script>
