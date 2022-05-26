<template>
  <div class="h-select">
    <div
      class="item"
      :class="{'active': isActive(option)}"
      v-for="option in options.slice(0,4)"
      :key="option.value"
      @click="onClickOption(option.value)"
    >
      <p>
        {{ option.name }}
      </p>
    </div>
    <div
      class="indicator"
      :style="{
        transform: `translateX(${activeIndex * 100}%)`
      }"
    ></div>
  </div>
</template>

<script>
export default {
  name: "HSelect",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: [String, Number],
      required: true,
    }
  },
  data() {
    return {

    }
  },
  computed: {
    activeIndex() {
      return this.options.findIndex((i) => i.value === this.selected);
    }
  },
  methods: {
    onClickOption(value) {
      this.$emit('select', value);
    },
    isActive(item) {
      return item.value === this.$props.selected;
    }
  }
}
</script>

<style scoped lang="scss">
$transition-timing: 200ms;

.h-select {
  display: flex;
  background-color: $color-light-gray;
  padding: 10px;
  border-radius: 15px;
  position: relative;
  .indicator {
    flex: 1;
    position: absolute;
    top: 10px;
    left: 10px;
    height: -webkit-calc(100% - 20px);
    width: -webkit-calc((100% - 20px)/4);
    background: $color-white;
    border-radius: 15px;
    box-shadow: 1px 1px 6px $color-gray;
    transition: $transition-timing;
    &:before {
      content: '';
    }
  }
  .item {
    flex: 1;
    text-align: center;
    padding: 20px;
    p {
      font-size: 24px;
      color: $color-gray;
      font-weight: 700;
      transition: $transition-timing;
    }
    &.active {
      color: $color-black;
      z-index: 10;
      p {
        color: $color-black;
      }
    }
  }
}
</style>