<template>
  <div class="item" @click="onItemClick(item)">
    <div class="img-wrapper">
      <img src="@/assets/bulgogi-set-white.jpeg"/>
    </div>
    <div class="content">
      <h5>{{item.name}}</h5>
      <h6>{{item.description}}</h6>
      <div class="tags">
        <div class="tag"
             :key="`${menuItem.key}-sub`"
             v-for="menuItem in item.menus">
          {{ menuItem.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
  methods: {
    onItemClick(item) {
      this.$emit('select', item);
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  display: flex;
  .img-wrapper {
    flex-basis: 250px;
    padding-right: 20px;
    img {
      width: 100%;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    h5 {
      margin-bottom: 5px;
    }
    h6 {
      color: $color-gray;
      margin-bottom: 10px;
    }
  }
  .tags {
    display: flex;
    .tag {
      padding: 7px 15px;
      border-radius: 20px;
      font-size: 18px;
      background-color: $color-light-blue;
      color: $color-blue;
      font-weight: 700;
      margin-right: 15px;
    }
  }
}
</style>