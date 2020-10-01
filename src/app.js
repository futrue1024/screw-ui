import Vue from 'vue'
import Button from './Button.vue'
import Icon from './icon.vue'

Vue.component('p-button', Button)
Vue.component('p-icon', Icon)
new Vue({
  el: '#app',
})