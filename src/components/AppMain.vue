<script>
  import AppCard from './AppCard.vue';

  export default {
    data() {
      return {
        index: 0,
        cards: [ 
          {
            id: 1,
            frontImage: '1.webp',
            backImage: '1b.webp',
            brand: "Levi's",
            modelItem: 'Relaxed fit tee unisex',
            discountedPrice: '14,99 €',
            fullPrice: '29,99 €',
            discountBadge: '-50%',
            ecoBadge: 'Sostenibilità',
          },
          {
            id: 2,
            frontImage: '2.webp',
            backImage: '2b.webp',
            brand: "Levi's",
            modelItem: 'Relaxed fit tee unisex',
            discountedPrice: '14,99 €',
            fullPrice: '29,99 €',
            discountBadge: '-50%',
            ecoBadge: 'Sostenibilità',
          },
          {
            id: 3,
            frontImage: '3.webp',
            backImage: '3b.webp',
            brand: "Levi's",
            modelItem: 'Relaxed fit tee unisex',
            discountedPrice: '14,99 €',
            fullPrice: '29,99 €',
            discountBadge: '-50%',
            ecoBadge: 'Sostenibilità',
          },
          {
            id: 4,
            frontImage: '4.webp',
            backImage: '4b.webp',
            brand: "Levi's",
            modelItem: 'Relaxed fit tee unisex',
            discountedPrice: '14,99 €',
            fullPrice: '29,99 €',
            discountBadge: '-50%',
            ecoBadge: 'Sostenibilità',
          }
        ] 
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
            :cards= "cards"
            :index="index"
            :id="cards[index].id" 
            :frontimage="cards[index].frontImage"
            :backimage="cards[index].backImage" 
            :brand="cards[index].brand"
            :model="cards[index].modelItem"
            :discountedprice="cards[index].discountedPrice"
            :fullprice="cards[index].fullPrice"
            :discountbadge="cards[index].discountBadge"
            :ecobadge="cards[index].ecoBadge"
          >
          </app-card>

        

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