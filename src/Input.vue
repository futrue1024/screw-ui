<template>
  <div class="wrapper" :class="{error}">
    <label>
      <input type="text" :value="value" :disabled="disabled"/>
    </label>
    <template v-if="error">
      <icon name="error" class="icon-error"></icon>
      <span class="errorMsg">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon.vue'

export default {
  components: {Icon},
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang='scss' scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #41B884;
$font-size: 12px;
$red: #F1453D;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;

  > :not(:last-child) {
    margin-right: .5em;
  }

  > label {
    > input {
      height: $height;
      border: 1px solid $border-color;
      border-radius: 4px;
      padding: 0 8px;
      font-size: inherit;

      &:hover {
        border-color: $border-color-hover;
      }

      &:focus {
        box-shadow: 0 0 3px rgba(65, 184, 132, 0.6);
        outline: none;
      }

      &[disabled], &[readonly] {
        border-color: #bbb;
        color: #bbb;
        cursor: not-allowed;
      }
    }
  }

  &.error {
    > label {
      > input {
        border-color: $red;
      }
    }
  }

  .icon-error, span {
    fill: $red;
  }

  .errorMsg {
    color: $red;
  }
}
</style>