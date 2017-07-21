var app = new Vue({
  el: '#exercise',
  data: {
    name: 'Joao Menighin',
    age: 26,
    img: 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/083/full/EGH_VueJS_Final.png'
  },
  methods: {
    random: function() {
      return parseInt(Math.random() * 100);
    }
  }
})