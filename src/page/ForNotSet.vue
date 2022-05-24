<template>
  <Layout :titles="title">
    <div class="content">
      <Button
        class="complete-button"
        title="완료"
        color="blue"
        :customStyle="buttonStyle"
        @onClick="goToComplete"
      />
      <Button
        class="delete-button"
        title="장바구니에서 삭제"
        color= "red"
        :customStyle="buttonStyle"
        @onClick="goToDelete"
      />
    </div>
  </Layout>
</template>

<script>
import {useOrderStore} from "@/store/order";

export default {
  name: 'ChangeorDeletePage',
  setup() {
    const store = useOrderStore();
    return {
      store
    }
  },
  data() {
    return {
      title: ['"'+this.store.chosenItem.name+'"'],
    }
  },
  methods: {
    goToComplete() {
      this.$router.push('/check-basket');
    },
    goToDelete() {
      for(let i = 0; i < this.store.menu.length; i++) {
        if(this.store.menu[i].id === this.store.chosenItem.id)  {
            this.store.menu.splice(i, 1);
            i--;
            break;
        }
      }
      console.log(this.store.chosenItem);
      console.log(this.store.menu[0]);
      this.$router.push('/check-basket');
    }
  }
}
</script>
<style scoped lang="scss">
.content {
  padding-top: 160px;
  > * {
    margin-bottom: 50px;
  }
}
</style>