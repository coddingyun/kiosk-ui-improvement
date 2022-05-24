<template>
  <Layout :titles="title">
    <div class="place-page">
      <Button
        title="포장하기"
        @click="selectGo"
      />
      <Button
        title="매장에서 먹기"
        color="light-blue"
        @click="selectHere"
      />
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
      title: ['식사하실 장소를', '선택해주세요'],
    }
  },
  methods: {
    goToMenu() {
      this.$router.push('/coupon');
    },
    selectHere() {
      this.store.setPlace('here');
      this.goToMenu();
    },
    selectGo() {
      this.store.setPlace('go');
      this.goToMenu();
    }
  }
}
</script>

<style scoped lang="scss">
.place-page {
  padding-top: 160px;
  > * {
    margin-bottom: 50px;
  }
}
</style>
