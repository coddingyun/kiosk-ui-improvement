<template>
  <Layout
    :titles="title"
    :descriptions="descriptions"
  >
    <div class="place-page">
      <div class="button"
         @click="selectGo"
      >
        <div class="icon">
          <svg width="100" height="100" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4409 9.12717L11.0322 14.7618L15.9626 21.1008" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10.3278 18.2835L8.21484 21.1008" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.21484 13.3532C8.21484 9.40889 11.0323 9.12714 12.4409 9.12717L13.8494 9.12714C14.0842 10.301 15.1172 12.7897 17.3711 13.3531" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M13 7C14.1046 7 15 6.10457 15 5C15 3.89543 14.1046 3 13 3C11.8954 3 11 3.89543 11 5C11 6.10457 11.8954 7 13 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <p class="text">
          포장하기
        </p>
        <div class="description">
          주문하신 메뉴가 포장이 되어 나와요
        </div>
      </div>
      <div class="button"
         @click="selectHere"
      >
        <div class="icon">
          <svg width="100" height="100" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 9.5L12 4L21 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <p class="text">
          매장에서 먹기
        </p>
        <div class="description">
          쟁반에 메뉴가 담겨서 나와요
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { useOrderStore } from '@/store/order';

export default {
  name: 'PlacePage',
  setup() {
    const store = useOrderStore();

    return {
      store
    }
  },
  data() {
    return {
      title: ['드시고', '가시겠어요?'],
      descriptions: ['아래에서 음식을 먹을', '장소를 선택해주세요'],
    }
  },
  methods: {
    goToCoupon() {
      this.$router.push('/coupon');
    },
    selectHere() {
      this.store.setPlace('here');
      this.goToCoupon();
    },
    selectGo() {
      this.store.setPlace('go');
      this.goToCoupon();
    }
  }
}
</script>

<style scoped lang="scss">
.place-page {
  padding-top: 20px;
  > * {
    margin-bottom: 50px;
  }
}
.button {
  transition: 200ms ease;
  &:active:hover {
    transform: scale(1.05);
  }
  $content-color: $color-blue;
  width: 100%;
  border-radius: 40px;
  //background-color: $color-blue;
  border: 1px solid $color-light-gray;
  text-align: center;
  padding: 40px 50px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px 0px, rgba(17, 17, 26, 0.05) 0px 8px 32px 0px;
  //box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px 0px, rgba(17, 17, 26, 0.05) 0px 8px 32px 0px;
  //box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  .icon {
    margin-bottom: 10px;
    svg path {
      stroke: $content-color;
    }
  }
  .text {
    font-size: 70px;
    font-weight: 700;
    color: $content-color;
    margin-bottom: 20px;
  }
  .description {
    font-size: 32px;
    font-weight: 700;
    color: $content-color;

  }
}
</style>
