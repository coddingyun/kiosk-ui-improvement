<template>
  <Layout :titles="title">
    <div class="content">
      <div class = "subtitle">
          대기번호
      </div>
      <div class="waiting-number">
          003
      </div>
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
      title: ['감사합니다', '영수증의 대기번호를', '확인해주세요'],
    }
  },

}
</script>
<style scoped>
.content {
  padding-top: 100px;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.subtitle {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 20px;
}
.waiting-number {
  font-size: 500px;
  font-weight: bold;
  color: black;
  text-align: center;
  margin-bottom: 100px;
}
</style>