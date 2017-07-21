new Vue({
    el: '#exercise',
    data: {
        value: 0,
        seconds: 5
    },
    computed: {
        result: function() {
            return this.value >= 37 ? "Done" : "Not there yet";
        }
    },
    watch: {
        value: function(val) {
            var self = this;
            setTimeout(function() {
                self.value = 0;
            }, this.seconds * 1000);
        }
    }
});