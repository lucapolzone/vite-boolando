<script>

export default {
    data() {
      return {
        links: [
          {
            text: 'Donna',
            url: '#'
          },
          {
            text: 'Uomo',
            url: '#'
          },
          {
            text: 'Bambini',
            url: '#'
          }
        ],
        icons: [
          {
            snippet: 'fa-regular fa-user',
            url: '#'
          },
          {
            snippet: 'fa-regular fa-heart',
            url: '#'
          },
          {
            snippet: 'fa-solid fa-bag-shopping',
            url: '#'
          },
        ]
      }
    }
  };
</script>

<template>
  <header>
    <div class="container d-flex">

      <!-- Nav sx -->
      <nav>
        <ul class="d-flex">

          <li v-for="link in links">
            <h3>
              <a :href="link.url">
                {{ link.text }}
              </a>
            </h3>
          </li>
          
        </ul>
      </nav>

      <!-- Logo Boolean -->
      <h1>
        <a href="">
         <img src="/img/boolean-logo.png" alt="logo boolando" class="logo">
        </a>
      </h1>

      <!-- List icon dx -->
      <ul class="list-icons d-flex">
        
        <li v-for="icon in icons">
          <a :href="icon.url">
            <i :class="icon.snippet"></i>
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

  .list-icons li:last-child {
    margin-right: 0;
  }
}
</style>