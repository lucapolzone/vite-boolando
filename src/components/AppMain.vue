<script>
  import AppCard from './AppCard.vue';

  export default {
    data() {
      return {
        id: 1,
        frontImage: '1.webp',
        backImage: '1b.webp',
        brand: "Levi's",
        modelItem: 'Relaxed fit tee unisex',
        discountedPrice: '14,99 €',
        fullPrice: '29,99 €',
        discountBadge: '-50%',
        ecoBadge: 'Sostenibilità',
      }
    },

    components: {AppCard}

  };
</script>

<template>
  <main>
    <div class="container">
      <div class="row d-flex">
          
          <!-- Componente AppCard -->
          <app-card
            :id="id" 
            :frontimage="frontImage"
            :backimage="backImage" 
            :brand="brand"
            :model="modelItem"
            :discountedprice="discountedPrice"
            :fullprice="fullPrice"
            :discountbadge="discountBadge"
            :ecobadge="ecoBadge"
          >
          </app-card>

        <div class="col">
          <div class="card">
            card-content
          </div>
        </div>

        <div class="col">
          <div class="card">
            card-content
          </div>
        </div>

        <div class="col">
          <div class="card">
            card-content
          </div>
        </div>

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