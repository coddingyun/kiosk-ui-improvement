/* eslint-env node */
<template>
  <div class="item" @click="onItemClick(item)">
    <div class="img-wrapper">
      <img :src="imgSrc"/>
    </div>
    <div class="content">
      <h5>{{item.name}}</h5>
      <div class="tags">
        <div class="tag"
             :key="`${menuItem.key}-sub`"
             v-for="menuItem in item.menus">
          {{ menuItem.name }}
        </div>
      </div>
      <h6 style="margin-top:5px;">수량: {{item.amount}}개</h6>
    </div>
    <div class="price-tag">
      <h5>{{totalPrice}}원</h5>
    </div>
  </div>
</template>

<script>
//import { require } from 'module';
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true,
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
      imgSrc: require("@/assets/"+this.item.id+".jpg"),
      totalPrice: total_price,
    }
  },
  // computed: {
  //   descriptions() {
  //     this.menudescription = this.menudescription.replace(/\n/g, '<br>');
  //     return this.menudescription;
  //   }
  // },
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
  .price-tag{
    margin-top:50px;
    margin-left:auto;
    text-align: right;
  }
}
</style>