<template>
  <div class="back-button">
    <svg
      :width="width"
      :height="height"
      :stroke-width="strokeWidth"
      viewBox="0 0 24 24"
      :style="{
        width: width,
        height: height,
        strokeColor: strokeColor,
      }"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        v-bind:stroke="strokeColor"
        d="M18.5 12H6M6 12L12 6M6 12L12 18"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>

export default {
  name: 'BackButton',
  props: {
    width: {
      type: Number,
      default: 70,
    },
    height: {
      type: Number,
      default: 70,
    },
    strokeWidth: {
      type: Number,
      default: 1,
    },
    strokeColor: {
      type: String,
      default: "#272727",
    }

  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.back-button {

}
</style>