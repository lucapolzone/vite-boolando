<script>
import AppCard from './AppCard.vue';
import { store } from '../store';

export default {
  props: { 
    cards: Array,
  },
  components: { AppCard },
  methods: {
    //funzione che apre la modal cliccando la card 
    handleCardOpen(cardIndex) {
      const selectedProduct = this.cards[cardIndex];
      store.modal.frontImg = selectedProduct.frontImage;
      store.modal.fashionBrand = selectedProduct.brand;
      store.modal.modelArticle = selectedProduct.name;
      store.modal.discountedPr = selectedProduct.discountedPrice;
      store.modal.totalPr = selectedProduct.price;
      store.modal.show = true;
    }
  }
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row d-flex">

        <!-- Componente AppCard -->
        <app-card 
        :cards="cards"
        @card-open="handleCardOpen"
        />

      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables.scss' as *;


main {
  margin: $medium-size 0;
}

.row {
  margin: 0 calc($small-size * -1);
  flex-wrap: wrap;
}
</style>