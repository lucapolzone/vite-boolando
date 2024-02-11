<script>
  import AppCard from './AppCard.vue';

  export default {
    data() {
      return {
      }
    },

    components: {AppCard}

  };
</script>

<template>
  <main>
    <div class="container">
      <div class="row d-flex">
        <div class="col">
          
          <!-- Componente AppCard -->
          <app-card></app-card>
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
  
    .col {
      padding: $small-size;
      width: calc(100% / 3);

    }
  }
  


</style>