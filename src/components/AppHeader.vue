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
          <li>
            <h3>
              <a href="#">
                Donna
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#">
                Uomo
              </a>
            </h3>
          </li>
          <li>
            <h3>
              <a href="#">
                Bambini
              </a>
            </h3>
          </li>
        </ul>
      </nav>
      <h1>
        <a href="">
         <img src="/img/boolean-logo.png" alt="logo boolando" class="logo">
        </a>
      </h1>

      <ul class="list-icons d-flex">
        <li>
          <a href="#">
            <i class="fa-regular fa-user"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-regular fa-heart"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-bag-shopping"></i>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables.scss' as *;

header {
  background-color: $topbar-color;
  padding: $xsmall-size 0;
  color: white;

  ul {
    margin: 20px 0;
    
  }
  .logo {
    height: 30px;
  }
}
</style>