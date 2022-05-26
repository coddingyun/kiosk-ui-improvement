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
    <div class="price">
      <p>
        {{ priceText }}
      </p>
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
  computed: {
    priceText() {
      return `₩ ${this.item.price.toLocaleString()}`;
    }
  },
  data() {
    let total_price = 0;
    total_price += this.item.price;
    if (Object.prototype.hasOwnProperty.call(this.item, 'menus')){
      total_price += this.item.sideprice;
      total_price += this.item.cokeprice;
    }
    total_price *= this.item.amount;
    return {
      menudescription: this.item.description.replace(/\n/g, '<br />'),
      totalPrice: total_price,
    }
  },
  watch: {
    menudescription() {
      this.menudescription = this.item.description.replace(/\n/g, '<br/>');
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
  border: 1px solid $color-light-gray;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px 0px, rgba(17, 17, 26, 0.05) 0px 8px 32px 0px;
  background: $color-white;
  border-radius: 15px;
  margin-bottom: 15px;
  display: flex;
  padding: 15px 0;
  position: relative;
  flex: 1;
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
  .price {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding-right: 50px;
    p {
      font-size: 40px;
      font-weight: 700;
    }
  }
}
</style>