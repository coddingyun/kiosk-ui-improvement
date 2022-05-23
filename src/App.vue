<template>
  <router-view />
</template>

<script>


export default {
  name: 'App',
  components: {
  },
}
</script>

<style lang="scss">
@import './styles/_normalize.scss';
@import './styles/_basics.scss';

#app {
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
