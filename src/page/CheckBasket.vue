<template>
  <Layout :titles="title"
          :descriptions="descriptions">
    <div class="basket">
      <Button
        class="basket-button"
        title="추가하기"
        color="light-blue"
        :customStyle="buttonStyle"
        @onClick="goToMenu"
      />
      <div class="chosen-menu-list">
        <MenuItem
          v-for="item in visibleItems"
          :item="item"
          :key="item.id"
          @select="onItemClick"
        />
      </div>
      <Button
        class="pay-button"
        :title= "totalPrice"
        color="blue"
        :customStyle="buttonStyle"
        @onClick="navigateNext"
      />
    </div>
  </Layout>
</template>

<script>
import {useOrderStore} from "@/store/order";
import MenuItem from "@/components/atom/MenuItemWithAmount";

export default {
  name: 'CheckBasketPage',
  components: {
    MenuItem,
  },
  setup() {
    const store = useOrderStore();
    return {
      store,
    }
  },
  data() {
    let total_price = 0;
    for(let i = 0; i < this.store.menu.length; i++) {
      let menu_price =0;
      menu_price += this.store.menu[i].price;
      if (Object.prototype.hasOwnProperty.call(this.store.menu[i], 'menus')){
        menu_price += this.store.menu[i].sideprice;
        menu_price += this.store.menu[i].cokeprice;
      }
      menu_price *= this.store.menu[i].amount;
      total_price += menu_price;
    }
    return {
      title: ['현재 장바구니를', '확인해주세요'],
      descriptions: ['변경 및 삭제를 하시려면', '해당 메뉴를 눌러주세요.'],
      buttonStyle: {
        padding: '50px 100px',
      },
      selectedCategory: Object.keys(this.store)[0],
      menuPage: 0,
      pageSize: 4,
      totalPrice: (total_price).toString() + "원 결제하기",
      //menuPrice: menu_price,
    }
  },
  computed: {
    items() {
      return this.store.menu;
    },
    visibleItems() {
      //const offset = this.pageSize * this.menuPage;
      return this.items.filter((_, index) => {
        return index >= 0 && index < 1000;
      });
    }
  },
  methods: {
    navigateNext() {
      this.$router.push('/pay');
    },
    goToMenu() {
      this.$router.push('/select-menu');
    },
    onItemClick(item) {
      console.log(item);
      console.log(typeof item);
      console.log(Object.prototype.hasOwnProperty.call(item, 'menus'));
      this.store.setChosenItem(item.clone());
      if (Object.prototype.hasOwnProperty.call(item, 'menus')){
        this.$router.push('/change-or-delete');
      }
      else {
        this.$router.push('/for-not-set');
      }
    }
  }
}
</script>
<style scoped>
.basket {
  padding-top: 100px;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.basket-button {
  margin-bottom: 100px;
}
.pay-button {
  margin-top: 100px;
}
</style>