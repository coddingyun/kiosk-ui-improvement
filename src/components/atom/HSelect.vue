<template>
  <div class="h-select">
    <div
      class="item"
      :class="{'active': isActive(option)}"
      v-for="option in options.slice(0,4)"
      :key="option.value"
      @click="onClickOption(option.value)"
    >
      {{ option.name }}
    </div>
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
.h-select {
  display: flex;
  background-color: $color-light-gray;
  padding: 10px;
  border-radius: 15px;

  .item {
    flex: 1;
    text-align: center;
    color: $color-gray;
    font-weight: 700;
    font-size: 24px;
    padding: 20px;
    &.active {
      border-radius: 15px;
      background: $color-white;
      color: $color-black;
      box-shadow: 1px 1px 6px $color-gray;
    }
  }
}
</style>