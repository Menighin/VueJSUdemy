import Vue from 'vue'
import App from './App.vue'
import MyOn from './Directives.js'

Vue.directive('myOn', MyOn);

new Vue({
  el: '#app',
  render: h => h(App)
})
