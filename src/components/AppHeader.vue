<script>
  export default {
    data() {
      return {
      }
    }
  };
</script>

<template>
  <header>
    <div class="container d-flex">
      <nav>
        <ul class="d-flex">
          <li>Donne</li>
          <li>Uomo</li>
          <li>Bambini</li>
        </ul>
      </nav>

      <img src="/img/boolean-logo.png" alt="" class="logo">

      <ul class="list-icons d-flex">
        <li>
          <i class="fa-regular fa-user"></i>
        </li>
        <li>
          <i class="fa-regular fa-heart"></i>
        </li>
        <li>
          <i class="fa-solid fa-bag-shopping"></i>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables.scss' as *;

header {
  background-color: $topbar-color;
  padding: 5px 0;
  color: white;
  .container {
    justify-content: space-between;
    align-items: center;
  }

  ul {
    margin: 20px 0;
    
    li {
      margin: 0 $xsmall-size;
      
      &.active {
        background-color: rgb(165, 190, 194);
      }
    }
    
  }
  .logo {
    height: 40px;
  }
}
</style>