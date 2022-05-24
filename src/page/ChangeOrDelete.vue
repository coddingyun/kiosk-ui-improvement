<template>
  <Layout :titles="title">
    <div class="content">
      <Button
        class="change-button"
        title="구성품 변경"
        color="light-blue"
        :customStyle="buttonStyle"
        @onClick="goToChange"
      />
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
      title: ['"'+this.store.chosenItem.name+'"에서', '사이드는 "'+this.store.chosenItem.menus[1].name+'"', '음료는 "'+this.store.chosenItem.menus[2].name+'"'],
    }
  },
  methods: {
    goToChange() {
      this.$router.push('/change-side');
    },
    goToComplete() {
      this.$router.push('/check-basket');
    },
    goToDelete() {
      //배열에서 정해진 값 빼기, 선택한 메뉴를 따로 저장해 두어야 함.
      for(let i = 0; i < this.store.menu.length; i++) {
        if(this.store.menu[i].id === this.store.chosenItem.id)  {
            this.store.menu.splice(i, 1);
            i--;
            break;
        }
      }
      console.log(this.store.chosenItem);
    //   let filtered = this.store.menu.filter((element) => element.id !== this.store.chosenItem.id);
    //   this.store.menu = filtered;
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