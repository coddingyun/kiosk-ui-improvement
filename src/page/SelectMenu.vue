<template>
  <Layout
    :titles="titles"
    :descriptions="descriptions"
  >
    <div class="select-menu-page">
      <div class="category">
        <HSelect
            :options="categories"
            @select="onCategoryChange"
            :selected="selectedCategory"
        />
      </div>
      <div class="prev-page" v-if="hasPrev" @click="goPrevPage">
        이전 페이지 보기
      </div>
      <div class="menu-list">
        <MenuItem
          v-for="item in visibleItems"
          :item="item"
          :key="item.id"
          @select="onItemClick"
        />
      </div>
      <div class="next-page" v-if="hasNext" @click="goNextPage">
        다음 페이지 보기
      </div>
    </div>
  </Layout>
</template>

<script>
import HSelect from "@/components/atom/HSelect";
import { menu } from '@/classes/menus';
import MenuItem from "@/components/atom/MenuItem";
import { useOrderStore } from '@/store/order';

export default {
  name: 'SelectMenuPage',
  components: {
    MenuItem,
    HSelect
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
      titles: ['메뉴를', '선택해주세요.'],
      descriptions: ['원하는 메뉴를 찾기 힘들다면', '음성검색을 눌러주세요.'],
      selectedCategory: Object.keys(this.menu)[0],
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
    hasPrev() {
      return this.menuPage !== 0;
    },
    hasNext() {
      return this.items.length > this.pageSize * (this.menuPage + 1);
    },
    visibleItems() {
      const offset = this.pageSize * this.menuPage;
      return this.items.filter((_, index) => {
        return index >= offset && index < offset + this.pageSize;
      });
    }

  },
  methods: {
    onCategoryChange(value) {
      this.menuPage = 0;
      this.selectedCategory = value;
    },
    goPrevPage() {
      this.menuPage--;
    },
    goNextPage() {
      this.menuPage++;
    },
    onItemClick(item) {
      console.log('--')

      console.log(item)
      console.log('--')
      this.store.setMenu(item.clone());
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