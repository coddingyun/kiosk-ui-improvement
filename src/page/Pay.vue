<template>
  <Layout :titles="title">
    <div class="content">
    <img class="image" src="@/assets/card.jpg" :onClick="goToFinal"/>  
    </div>
  </Layout>
</template>

<script>
import {useOrderStore} from "@/store/order";

export default {
  name: 'StartPage',
  setup() {
    const store = useOrderStore();
    return {
      store
    }
  },
  data() {
    return {
      title: ['아래 카드 투입구에', '카드를 넣어주세요'],
    }
  },
  methods: {
    goToFinal() {
      this.$router.push('/final');
    }
  }
}
</script>
<style scoped>
.content {
  padding-top: 100px;
  display: flex;
  flex: 1;
  text-align: center;

}
.image {
    width: 80%;
    height: 80%;
    object-fit: contain;
}
</style>