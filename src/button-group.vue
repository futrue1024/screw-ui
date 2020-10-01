<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script lang='js'>
export default {
  name: 'button-group'
}
</script>

<style lang='scss' scoped>
.button-group {
  display: inline-flex;
  vertical-align: middle;

  > .p-button {
    border-radius: 0;

    &:first-child {
      border-bottom-left-radius: var(--border-radius);
      border-top-left-radius: var(--border-radius);
      margin-right: -1px;
    }
    &:last-child {
      border-bottom-right-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
      margin-left: -1px;
    }
  }
}
</style>