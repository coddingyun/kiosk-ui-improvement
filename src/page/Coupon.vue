<template>
  <Layout
      :titles="titles"
      :descriptions="descriptions"
  >
    <div class="coupon-page">
      <div class="icon">
        <svg width="240" height="240" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12L10 6L11 6" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 12L11 12L11 6" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 18L10 15L11 15" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11 15L11 18H10" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 6L7 12" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7 15L7 18" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 6L14 12" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 15L14 18" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17 6L17 12" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17 15L17 18" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 3H3V6" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 12H12L22 12" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18 3H21V6" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 21H3V18" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M18 21H21V18" stroke="currentColor"   stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <Button
          :title="'없습니다'"
          @click="goToMenu"
      />
    </div>
  </Layout>
</template>

<script>
export default {
  name: 'CouponPage',
  data() {
    return {
      titles: ['쿠폰이 있다면', '바코드를 찍어주세요'],
      descriptions: ['사용할 쿠폰이 없다면', '아래의 "없습니다" 버튼을 눌러주세요'],
    }
  },
  methods: {
    goToMenu() {
      this.$router.push('/select-menu');
    }
  }
}
</script>

<style scoped lang="scss">
.coupon-page {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-bottom: 30px;
}
.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  > svg {

  }
}
</style>