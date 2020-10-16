<template>
  <svg class="p-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
import './svg.js'
export default {
  name: 'icon',
  props: ['name']
}
</script>

<style lang='scss'>
.p-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>