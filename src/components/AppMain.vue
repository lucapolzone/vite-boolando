<script>
  import AppCard from './AppCard.vue';

  export default {
    data() {
      return {
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
            brand: 'Guess',
            modelItem: 'Relaxed fit tee unisex',
            discountedPrice: '20,99 €',
            fullPrice: '29,99 €',
            discountBadge: '-50%',
            ecoBadge: false,
          },
          {
            id: 3,
            frontImage: '3.webp',
            backImage: '3b.webp',
            brand: "Come Zucchero filato",
            modelItem: 'Voglia di colori pastello',
            discountedPrice: '129,99 €',
            fullPrice: '184,99 €',
            discountBadge: '-30%',
            ecoBadge: false,
          },
          {
            id: 4,
            frontImage: '4.webp',
            backImage: '4b.webp',
            brand: "Levi's",
            modelItem: 'Tee unisex',
            discountedPrice: '14,99 €',
            fullPrice: '29,99 €',
            discountBadge: '-50%',
            ecoBadge: 'Sostenibilità',
          },
          {
            id: 5,
            frontImage: '5.webp',
            backImage: '5b.webp',
            brand: "Maya Deluxe",
            modelItem: 'Stripe Bodice',
            discountedPrice: '99,99 €',
            fullPrice: false,
            discountBadge: false,
            ecoBadge: false,
          },
          {
            id: 6,
            frontImage: '6.webp',
            backImage: '6b.webp',
            brand: "Esprit",
            modelItem: 'Maglione - black',
            discountedPrice: '29,99 €',
            fullPrice: false,
            discountBadge: false,
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