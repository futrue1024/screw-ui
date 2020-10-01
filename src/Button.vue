<template>
  <button class="p-button" :class="{[`icon-${iconPosition}`]:true}">
    <p-icon class="icon" v-if="icon" :name="icon"></p-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script lang='js'>
export default {

  name: 'Button',
  props: {
    icon: {},
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



  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
}
</style>