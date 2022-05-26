<template>
  <Layout :titles="title">
    <div class="content">
      <div class="amount">
        <h4 class="text">수량:</h4>
        <button class="amountButtonMinus" v-on:click="minusone">-</button>
        <h4>{{amount}}</h4>
        <button class="amountButtonPlus" v-on:click="plusone">+</button>
      </div>
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
      amount: this.store.chosenItem.amount,
    }
  },
  methods: {
    goToComplete() {
      this.$router.push('/check-basket');
    },
    goToDelete() {
      for(let i = 0; i < this.store.menu.length; i++) {
        if(this.store.menu[i].id === this.store.chosenItem.id)  {
            //this.store.menu[i].price/=this.store.menu[i].amount;
            this.store.menu[i].amount=1;
            this.store.menu.splice(i, 1);
            i--;
            break;
        }
      }
      console.log(this.store.chosenItem);
      console.log(this.store.menu[0]);
      this.$router.push('/check-basket');
    },
    plusone() {
      this.amount++;
      console.log(this.amount);
      this.store.chosenItem.amount = this.amount;
      for(let i = 0; i < this.store.menu.length; i++) {
        if(this.store.menu[i].id === this.store.chosenItem.id)  {
            this.store.menu[i].amount = this.amount;
            break;
        }
      }
    },
    minusone() {
      if(this.amount > 1) {
        this.amount--;
        this.store.chosenItem.amount = this.amount;
        for(let i = 0; i < this.store.menu.length; i++) {
          if(this.store.menu[i].id === this.store.chosenItem.id)  {
              this.store.menu[i].amount = this.amount;
              break;
          }
      }
      }
    },
  }
}
</script>
<style scoped lang="scss">
.content {
  padding-top: 160px;
  .amount {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    .text {
      margin-right: 10px;
      padding-right: 10px;
    }
    .amountButtonMinus{
      border-radius: 50%;
      font-size:30px; 
      padding-left: 10px;
      padding-right: 10px;
      margin-right: 10px;
    }
    .amountButtonPlus{
      border-radius: 50%;
      font-size:30px; 
      margin-left: 10px;
    }
    h4 {
      margin-right: 10px;
    }
  }
  > * {
    margin-bottom: 50px;
  }
}
</style>