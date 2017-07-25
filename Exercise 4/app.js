new Vue({
    el: '#exercise',
    data: {
        mushroom: true,
        className: 'bold',
        trueProp: 'false',
        styleInputBackground: 'blue',
        width: 0
    },
    methods: {
        startEffect: function () {
            var self = this;
            setInterval(function() {
                self.mushroom = !self.mushroom;
            }, 1000);
        },
        startProgress: function () {
            var self = this;
            setInterval(function() {
                self.width += 5;
            }, 500);
        }
    },
    computed: {
        mushroomEffect: function() {
            return {
                highlight: this.mushroom,
                shrink: !this.mushroom
            }
        },
        trueOrFalse: function() {
            return {
                true: this.trueProp == 'true'
            }
        },
        styleInput: function() {
            return {
                backgroundColor: this.styleInputBackground
            }
        },
        progressBarStyle: function() {
            return {
                width: (this.width >= 300 ? '300px' : this.width + 'px'),
                height: '20px',
                backgroundColor: 'green'
            }
        }
    }
});
