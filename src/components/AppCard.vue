<script>
 export default {
    data() {
      return {
        newindex: 0,
      }
    },

    props: {
      cards: Array,
      index: Number,
      id: Number,
      frontimage: String,
      backimage: String,
      brand: String,
      model: String,
      discountedprice: String,
      fullprice: String,
      discountbadge: String,
      ecobadge: String
    }
  }

</script>
<template>

  <div v-for="card in cards" class="col">
    <div class="card">
      <div class="wrapper-photo">
        <!-- Box favorite item -->
        <div class="favorite-item">
        </div>
        
        <!-- Badges -->
        <div class="badge-container d-flex">
          <div class="discount badge">{{ discountbadge }}</div>
          <div class="eco badge">{{ ecobadge }}</div>
        </div>
        
        <!-- Model photo -->
        <img :src="`/img/${frontimage}`" :alt="`img-${id}`" class="default-image">
        <img :src="`/img/${backimage}`" :alt="`img-${id}b`" class="total-frame-image">
      </div>

      <!-- Caption -->
      <div class="wrapper-caption">
        <small>{{ brand }}</small>
        <h2>{{ model }}</h2>
        <small class="discounted">{{ discountedprice }}</small>
        <small class="full">{{ fullprice }}</small>
      </div>
    </div>
  </div>

</template>


<style lang="scss" scoped>
  @use '../styles/partials/_variables.scss' as *;
      
  .col {
      padding: $small-size;
      width: calc(100% / 3);

    }
  
  .card {
        padding: $small-size;
        border: 2px solid rgb(236, 236, 236);

        .wrapper-photo {
          position: relative;

          .favorite-item {
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

          .favorite-item:hover {
            color: deeppink;
          } 

          .badge-container {
            position: absolute;
            bottom: $medium-size;
          }

          .badge {
            background-color: rgb(221, 221, 221);
            padding: $xxsmall-size $xsmall-size;
            color: white;
            font-weight: bold;              
          }

          .discount {
            background-color: red;
            margin-right: $xsmall-size;
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
