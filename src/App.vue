<template>
  <div id="app">
    <header-menu></header-menu>
    <div class="body-wrapper">
    <router-view></router-view>
    </div>
    <footer-base></footer-base>
  </div>
</template>

<script>
import headerMenu from './components/headerMenu.vue'
import footerBase from './components/footerBase.vue'

export default {
  name: 'App',
  components:{
    'header-menu': headerMenu,
    'footer-base': footerBase,
  },
}
</script>

<style lang="scss" scoped>
  .body-wrapper {
    min-height: 100vh;
    height: auto;
    max-width: 900px;
    margin: auto;
    padding: 100px;
  }
</style>