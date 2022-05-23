<template>
  <Layout :titles="title">
    <div class="place-page">
      <Button
        title="For Here"
        color="light-blue"
        @click="selectHere"
      />
      <Button
        title="To Go"
        @click="selectGo"
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
      title: ['드시고', '가시겠어요?'],
    }
  },
  methods: {
    goToMenu() {
      this.$router.push('/select-menu');
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
