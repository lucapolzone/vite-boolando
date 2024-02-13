<script>
import AppCard from './AppCard.vue';


export default {
  data() {
    return {
    }
  },
  props: { cards: Array },
  components: { AppCard },

};
</script>

<template>
  <main>
    <div class="container">
      <div class="row d-flex">

        <!-- Componente AppCard -->
        <app-card :cards="cards">
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