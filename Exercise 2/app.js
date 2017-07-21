new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function() {
            alert("This is an alert!");
        },
        keyDownEvent: function(e) {
            this.value = e.target.value;
        }
    }
});