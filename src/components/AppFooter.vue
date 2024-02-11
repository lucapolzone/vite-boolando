<script>
  export default {};
</script>

<template>
  <footer>
    <div class="container d-flex">
      <div class="wrapper-legal-notes">
        <h2>
          Boolando s.r.l.
        </h2>
        <span>
          <a href="#">
            Informazioni legali
          </a>
        </span>
        <span>
          <a href="#">
            Informativa sulla privacy
          </a>
        </span>
        <span>
          <a href="#">
            Diritto di recesso
          </a>
        </span>
      </div>
      
      <div class="wrapper-social-icons">
        <h2>Trovaci anche su</h2>
        <ul>
          <li>
            <a href="#">
              <i class="fa-brands fa-square-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-square-pinterest"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-square-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @use '../styles/partials/_variables.scss' as *;

  footer {
    background-color: black;
    color: white;
    padding: $medium-size 0;

    h2 {
      margin-bottom: $xsmall-size;
    }

    span {
      font-size: 0.9rem;
      margin-right: $xsmall-size;
    }

    .wrapper-social-icons {
      li:first-of-type {
        margin-left: 0;
      }
    }

  }
</style>