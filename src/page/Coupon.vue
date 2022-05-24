<template>
  <Layout :titles="title">
    <div class="content">
    <img class="image" src="@/assets/barcord.png" :onClick="goToNext"/>  
    <Button
        title="없습니다"
        @click="goToNext"
      />
    </div>
  </Layout>
</template>

<script>
import {useOrderStore} from "@/store/order";

export default {
  name: 'CouponPage',
  setup() {
    const store = useOrderStore();
    return {
      store
    }
  },
  data() {
    return {
      title: ['쿠폰을 사용하시려면', '바코드를 찍어주세요'],
    }
  },
  methods: {
    goToNext() {
      this.$router.push('/select-menu');
    }
  }
}
</script>
<style scoped>
.content {
  padding-top: 100px;
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 100px;

}
.image {
    margin-bottom: 100px;
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>