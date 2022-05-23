<template>
  <Layout :titles="title">
    <div class="content">
      <Button
        title="주문하기"
        color="light-gray"
        :customStyle="buttonStyle"
        @onClick="navigateNext"
      />
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
      title: ['안녕하세요,', '아래 시작하기를 눌러주세요'],
      buttonStyle: {
        padding: '50px 100px',
      },
    }
  },
  methods: {
    navigateNext() {
      this.$router.push('/place');
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
}
</style>
