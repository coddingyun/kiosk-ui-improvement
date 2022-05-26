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
      <transition name="pop">
        <div class="prev-page" v-if="hasPrev" @click="goPrevPage">
          이전 페이지 보기
        </div>
      </transition>

      <transition-group
        tag="div"
        class="menu-list"
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
        @select="onItemClick"
      >
        <MenuItem
          v-for="item in visibleItems"
          :item="item"
          :key="item.id"
        />
      </transition-group>
      <transition name="pop">
        <div class="next-page" v-if="hasNext" @click="goNextPage">
          다음 페이지 보기
        </div>
      </transition>
    </div>
  </Layout>
</template>

<script>
import HSelect from "@/components/atom/HSelect";
import { menu } from '@/classes/menus';
import MenuItem from "@/components/atom/MenuItem";
import { useOrderStore } from '@/store/order';
import Velocity from 'velocity-animate';

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
      this.store.setMenu(item.clone());
    },


    beforeEnter: function (el) {
      el.style.opacity = 0
      // el.style.top = '30px';
      el.style.transform = 'translateY(30px)'
    },
    enter: function (el, done) {
      const index = [...el.parentElement.children].indexOf(el);
      const delay = index * 30 + 600;
      setTimeout(function () {
        Velocity(
            el,
            { opacity: 1, transform: ['translateY(0px)'] },
            { complete: done }
        )
      }, delay)
    },
    beforeLeave: function () {
    },
    leave: function (el, done) {
      const index = [...el.parentElement.children].indexOf(el);
      const delay = index * 30;

      setTimeout(function () {
        Velocity(
            el,
            { opacity: 0, translate: [0, 0]},
            { complete: done }
        )
      }, delay)
    }
  }
}
</script>

<style scoped lang="scss">
.pop-enter-from, .pop-leave-to {
  opacity: 0;
  transform: scale(0.7);
}
.pop-enter-active, .pop-leave-active {
  transition: 200ms;
}

.pop-enter-to, .pop-leave {
  opacity: 1;
  transform: scale(1);
}

.select-menu-page {
  position: relative;
}
.category {
  margin-bottom: 20px;
}
.menu-list {
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  flex: 1;
}
.next-page, .prev-page {
  background: $color-blue;
  color: $color-white;
  text-align: center;
  padding: 25px;
  font-size: 24px;
  font-weight: 700;
  border-radius: 20px;
}
.prev-page {
  transition-delay: 100ms;
  width: 100%;
  margin-bottom: 20px;

}
.next-page {
  position: sticky;
  bottom: -10px;
  width: inherit;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>