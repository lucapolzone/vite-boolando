<script>
import { store } from '../store';

  export default {
    data() {
      return {
        store
      }
    },
    
    methods: {
        closeModal() {
          store.modal.show = false;
        }
      }
    }
</script>

<template>
  <div class="layover">
    <div class="modal">
      <i class="fa-solid fa-xmark close-element" @click="closeModal()"></i>
      <!-- <img :src="store.modal.frontImg" alt=""> -->
      <h3>MARCA: {{ store.modal.fashionBrand }}</h3>
      <p><b>Modello: {{ store.modal.modelArticle.toUpperCase() }}</b></p>
      <p class="discounted-price">Prezzo scontato: {{ store.modal.discountedPr }}</p>
      <p class="old-price" v-if="store.modal.totalPr">Vecchio prezzo: {{ store.modal.totalPr }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .modal {
    width: 80%;
    max-width: 500px;
    background-color: white;
    padding: 2rem;
    color: #333;
    position: relative;
    line-height: 1.6rem;

    .close-element {
      position: absolute;
      top: 10px;
      right: 10px;
    }

    .discounted-price {
      color: red;
      font-weight: bold;
    }

    .old-price {
      text-decoration: line-through;
      font-weight: bold;
    }

  }

</style>