<script>
 export default {
    data() {
      return {
      }
    }
  };
</script>
<template>

  <div class="card">
    <div class="wrapper-photo">
      <!-- Box favorite item -->
      <div class="favorite-item">
      </div>
      
      <!-- Badges -->
      <div class="badge-container d-flex">
        <div class="discount badge">-50%</div>
        <div class="eco badge">Sostenibilità</div>
      </div>
      
      <!-- Model photo -->
      <img src="/img/1.webp" alt="" class="default-image">
      <img src="/img/1b.webp" alt="" class="total-frame-image">
    </div>

    <!-- Caption -->
    <div class="wrapper-caption">
      <small>Levi's</small>
      <h2>RELAXED FIT TEE UNISEX</h2>
      <small class="discounted">14,99 €</small>
      <small class="full">29,99 €</small>
    </div>
  </div>

</template>


<style lang="scss" scoped>
  @use '../styles/partials/_variables.scss' as *;
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
