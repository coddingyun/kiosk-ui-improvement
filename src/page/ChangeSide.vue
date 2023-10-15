<template>
  <Layout
    :titles="titles"
  >
    <div class="select-menu-page">
      <div class="menu-list">
        <MenuItem
          v-for="item in visibleItems"
          :item="item"
          :key="item.id"
          @select="onItemClick"
        />
      </div>
    </div>
  </Layout>
</template>

<script>
import { menu } from '@/classes/menus';
import MenuItem from "@/components/atom/MenuItem";
import { useOrderStore } from '@/store/order';

export default {
  name: 'ChangeSidePage',
  components: {
    MenuItem,
  },
  setup() {
    const store = useOrderStore();
    return {
      menu,
      store,
    }
  },
  data() {
    return {
      titles: ['"'+this.store.chosenItem.name+'"에서', '사이드를 선택해주세요'],
      selectedCategory: Object.keys(this.menu)[4],
      menuPage: 0,
      pageSize: 4,
    }
  },
  computed: {
    categories() {
      return Object.keys(menu).map((name) => {
        return {
          name: name,
          value: name,
        }
      });
    },
    items() {
      return this.menu[this.selectedCategory];
    },
    visibleItems() {
      const offset = this.pageSize * this.menuPage;
      return this.items.filter((_, index) => {
        return index >= offset && index < offset + this.pageSize;
      });
    }

  },
  methods: {
    onItemClick(item) {
      console.log('--')

      console.log(item)
      console.log('--')
      // this.store.setMenu(item.clone());
      // console.log(this.store.menu[0]);
      //this.store.commit('addItem', item);
      for(let i = 0; i < this.store.menu.length; i++) {
        if(this.store.menu[i].id === this.store.chosenItem.id)  {
            this.store.menu[i].menus[1] = item.clone();
            //this.store.menu[i].price += item.price;
            this.store.menu[i].sideprice = item.price;
            break;
        }
      }
      this.store.setSide(item.clone());
      console.log(this.store.menu[0]);
      this.$router.push('/change-coke');
    }
  }
}
</script>

<style scoped lang="scss">
.category {
  margin-bottom: 20px;
}
.menu-list {
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 20px;
  //box-shadow: 1px 1px 4px $color-light-blue;
}
.next-page, .prev-page {
  background: $color-light-gray;
  color: $color-gray;
  text-align: center;
  padding: 25px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 20px;
}
</style>