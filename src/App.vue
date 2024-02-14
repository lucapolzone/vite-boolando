<script>
  import { store } from './store';
  import axios from 'axios';

  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import AppFooter from './components/AppFooter.vue';
  import AppModal from './components/AppModal.vue';

  export default {
    data() {
      return {
        store,
        cards: [],
      }
    },

    components: {AppHeader, AppMain, AppFooter, AppModal},
    
    created() {
      axios.get(this.store.uri).then((res) => {
        this.cards = res.data;
      });
    }
  }
</script>

<template>

  <app-modal v-if="store.modal.show"/>
  <app-header />
  <app-main :cards="cards"/>
  <app-footer />


</template>

<style lang="scss">
  @use './styles/general.scss';
  @use './styles/partials/_variables.scss';
</style>
