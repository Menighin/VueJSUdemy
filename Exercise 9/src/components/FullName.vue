<template>
    <div class="row">
        <div class="form-group col-md-6">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" @input="inputEvt" v-model="value.first" />
        </div>
        <div class="form-group col-md-6">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" @input="inputEvt" v-model="value.last" />
        </div>
    </div>
</template>

<script>
    export default {
        props: ['value'],
        methods: {
            inputEvt() {
                this.$emit('input', this.value);
            }
        }
    }
</script>