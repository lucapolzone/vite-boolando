<script>
  import { apiUri } from './store';
  import axios from 'axios';

  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {
    data() {
      return {
        apiUri,
        cards: [], 
      }
    },

    components: {AppHeader, AppMain, AppFooter},
    
    created() {
      axios.get(this.apiUri.uri).then((res) => {
        this.cards = res.data;
      });
    }
  }
</script>

<template>

  <app-header></app-header>
  <app-main :cards="cards"></app-main>
  <app-footer></app-footer>


</template>

<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/_variables.scss';
</style>
