import Vue from 'vue'
import Button from './Button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './Input.vue'

Vue.component('p-button', Button)
Vue.component('p-icon', Icon)
Vue.component('p-button-group', ButtonGroup)
Vue.component('p-input', Input)
new Vue({
  el: '#app',
  data() {
    return {
      loading1: false,
      loading2: false,
      loading3: false,
    }
  }
})
