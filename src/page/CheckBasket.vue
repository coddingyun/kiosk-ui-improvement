<template>
  <Layout :titles="title"
          :descriptions="descriptions">
    <div class="basket">
      <Button
        class="basket-button"
        title="추가하기"
        color="white"
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
        title="결제하기"
        color="blue"
        :customStyle="buttonStyle"
        @onClick="navigateNext"
      />
    </div>
  </Layout>
</template>

<script>
import {useOrderStore} from "@/store/order";
import MenuItem from "@/components/atom/MenuItem";

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
    return {
      title: ['현재 장바구니를', '확인해주세요'],
      descriptions: ['변경 및 삭제를 하시려면', '해당 메뉴를 눌러주세요.'],
      buttonStyle: {
        padding: '50px 100px',
      },
      selectedCategory: Object.keys(this.store)[0],
      menuPage: 0,
      pageSize: 4,
    }
  },
  computed: {
    items() {
      return this.store.menu;
    },
    visibleItems() {
      const offset = this.pageSize * this.menuPage;
      return this.items.filter((_, index) => {
        return index >= offset && index < offset + this.pageSize;
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
      this.store.setChosenItem(item.clone());
      this.$router.push('/change-or-delete');
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
  border-style: dashed;
  border-color: #0080ff;
  margin-bottom: 100px;
}
.pay-button {
  margin-top: 100px;
}
</style>