<template>
  <Layout
    :titles="titles"
  >
    <div class="select-menu-page">
        <Button
        title="장바구니에 담기"
        color="blue"
        :customStyle="buttonStyle"
        @onClick="navigateNext"
      />
    </div>
  </Layout>
</template>

<script>
import { menu } from '@/classes/menus';
import { useOrderStore } from '@/store/order';

export default {
  name: 'FinalCheckPage',
  setup() {
    const store = useOrderStore();
    return {
      menu,
      store,
    }
  },
  data() {
    return {
      titles: ['"'+this.store.chosenItem.name+'"에서', '사이드는 '+'"'+this.store.side.name+'"', '음료는 '+'"'+this.store.beverage.name+'"'],
    }
  },
  
  methods: {
    navigateNext() {
      this.$router.push('/check-basket');
    }
  }
}
</script>

