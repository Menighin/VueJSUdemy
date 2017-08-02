<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">

                    <h1>Form exercise</h1>
                    <hr />
                    <div class="form-group col-md-6">
                        <label for="firstName">First Name</label>
                        <input type="text" class="form-control" v-model="firstName" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastName">Last Name</label>
                        <input type="text" class="form-control" v-model="lastName" />
                    </div>
                    <div class="form-group">
                        <label for="mail">Mail</label>
                        <input type="text" class="form-control" v-model="mail" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" v-model="password" />
                    </div>
                    <div class="form-group">
                        Store Data? <label for="yes">
                            <input type="radio" value="yes" v-model="yesno" /> Yes
                        </label>
                        <label for="no">
                            <input type="radio" value="no" v-model="yesno" /> No
                        </label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->

                    <button class="btn btn-success" @click.prevent="submited = true"> Submit</button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submited">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ firstName + ' ' + lastName }} </p>
                        <p>Mail: {{ mail }} </p>
                        <p>Password: {{ password }} </p>
                        <p>Store in Database?: {{yesno}} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                firstName: '',
                lastName: '',
                mail: '',
                password: '',
                yesno: '',
                submited: false
            }
        }
    }
</script>

<style>
</style>
