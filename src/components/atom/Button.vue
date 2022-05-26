<template>
  <div
    @click="click"
    :class="color"
    :style="{
      backgroundColor: color.background,
      ...customStyle,
    }"
    class="wrapper"
  >
    <div
      class="text"
      :style="{
        color: color.font,
      }"
    >
      {{ title }}
    </div>

  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: 'Button',
    },
    color: {
      type: String,
      default: 'blue',
    },
    customStyle: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    click() {
      this.$emit('onClick');
    }
  },
}
</script>

<style scoped lang="scss">
.wrapper {
  transition: 200ms ease;
  &:active:hover {
    transform: scale(1.05);
  }
  padding: 50px 50px;
  text-align: center;
  border-radius: 20px;

  .text {
    user-select: none;
    font-size: 45px;
    font-weight: 900;
  }
}
.white {
  &.wrapper {
    background: $color-white;
    .text {
      color: $color-black;
    }
  }
}

.blue {
  &.wrapper {
    background: $color-blue;
    .text {
      color: $color-white;
    }
  }
}

.light-blue {
  &.wrapper {
    background: $color-light-blue;
    .text {
      color: $color-white;
    }
  }
}

.light-gray {
  &.wrapper {
    background: $color-light-gray;
    .text {
      color: $color-white;
    }
  }
}
</style>