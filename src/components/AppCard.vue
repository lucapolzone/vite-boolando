<script>
 export default {
    data() {
      return {
      }
    },

    props: {
      cards: Array,
    }
  }

</script>
<template>

  <div v-for="card in cards" class="col">
    <div class="card">
      <div class="wrapper-photo">
        <!-- Box favorite item -->
        <div class="box-favorite-item">
          <span class="favorite-item" v-show="card.isInFavorites == false"></span>
          <span class="favorite-item selected" v-show="card.isInFavorites == true"></span>
        </div>
        
        <!-- Badges -->
        <div v-for="badge in card.badges" class="badge-container d-flex">
          <div class="discount badge" v-if="badge.type == 'discount' ? badge.value : ''">{{ badge.value }}</div>
          <div class="eco badge" v-if="badge.type == 'tag' ? badge.value : ''">{{ badge.value }}</div>
        </div>
        
        <!-- Model photo -->
        <img :src="`/img/${card.frontImage}`" :alt="`img-${id}`" class="default-image">
        <img :src="`/img/${card.backImage}`" :alt="`img-${id}b`" class="total-frame-image">
      </div>

      <!-- Caption -->
      <div class="wrapper-caption">
        <small>{{ card.brand }}</small>
        <h2>{{ card.name.toUpperCase() }}</h2>
        <small class="discounted">{{ card.discountedPrice }}</small>
        <small class="full">{{ card.price }}</small>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
  @use '../styles/partials/_variables.scss' as *;
      
  .col {
      padding: $small-size 0;
      width: calc(100% / 3);
    }


  
  .card {
        padding: $small-size;
        

        .wrapper-photo {
          position: relative;

          .box-favorite-item {
            position: absolute;
            top: $small-size;
            right: 0;
            padding: 0.5rem $small-size;
            background-color: white;
          }

          .favorite-item::after {
            content: "\2665";
            font-size: $medium-size;
          }

          .favorite-item.selected {
            color: deeppink;
          } 

          .badge-container {
            position: absolute;
            left: $xlarge-size;
            bottom: $medium-size;
          }

          .badge-container:last-of-type {
            left: 0;
          }


          .badge {
            background-color: rgb(221, 221, 221);
            padding: $xxsmall-size $xsmall-size;
            color: white;
            font-weight: bold;              
          }

          .discount {
            background-color: red;
          }

          .eco {
            background-color: green;
          }
        }

        .wrapper-photo:hover .default-image {
          display: none;
        }
        
        .total-frame-image {
          display: none;
        }
        .wrapper-photo:hover .total-frame-image {
          display: block;
        }

        .wrapper-caption {
          margin-top: $xxsmall-size;
          
          .discounted {
            color: red;
            font-weight: bold;
            margin-right: $xsmall-size;
          }
          
          .full {
            text-decoration: line-through;
          }
        }
      }
</style>