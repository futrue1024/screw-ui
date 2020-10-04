<template>
  <button class="p-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <p-icon class="icon" v-if="icon && !loading" :name="icon"></p-icon>
    <p-icon class="loading icon" v-if="loading" name="loading"></p-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script lang='js'>

import icon from './icon.vue'

export default {
components:{
  'p-icon':icon
},
  name: 'Button',
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return !(value !== 'left' && value !== 'right')
      }
    }
  },
}
</script>

<style lang='scss'>


.p-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;


  &.icon-left {
    > .icon {
      order: 1;
      margin-right: 0.2em;
    }

    > .content {
      order: 2;
    }
  }

  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.2em
    }

    > .content {
      order: 1;
    }
  }

  > .loading {
    animation: spin 1s infinite linear;
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg)
  }
  100% {
    transform: rotate(360deg)
  }
}
</style>