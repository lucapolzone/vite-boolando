<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    data() {
      return {
      }
    },

    components: {AppHeader, AppMain, AppFooter}
  }
</script>

<template>

  <app-header></app-header>
  <app-main></app-main>
  <app-footer></app-footer>


</template>

<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/_variables.scss';
</style>
