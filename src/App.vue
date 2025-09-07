<template><div>
  <div
    id="app"
    v-bind:class="{
      pinkGradient: $route.name === 'Home',
      blueGradient: $route.name === 'Books',
      greenGradient: $route.name === 'Projects' || $route.name === 'AoC',
    }"
  >
    <Header
      id="header"
      :tabs="tabs"
    />
    <hr :style="{ margin: '0px' }"/>
    <transition name="fade" mode="out-in">
      <router-view
        :apiKey="this.apiKey"
      />
    </transition>
  </div>
  <footer
    v-bind:class="{
      bluefooter: $route.name === 'Books',
      brownfooter: $route.name === 'Projects',
      brownfooter: $route.name === 'AoC',
    }"
  >
    <p>Designed & developed by <a href="https://twitter.com/kavisherlock" target="_blank">Kavish</a></p>
    <p class="credit">
      Glitchy buttons in the header based on <a href="https://codepen.io/jh3y/pen/PoGbxLp" target="_blank">
        https://codepen.io/jh3y/pen/PoGbxLp
      </a>
    </p>
  </footer></div>
</template>

<script>

import Header from './components/Header.vue';

export default {
  name: 'app',
  data() {
    return {
      tabs: ['Books', 'Projects'],
      apiKey: 'AIzaSyBj6pwMyPi8NVKBybSPJ3WWwGfx3__Nr4I',
    };
  },
  components: {
    Header,
  },
};
</script>

<style>
  body {
    margin: 0;
    font-family: 'Cairo', 'Helvetica', sans-serif;
  }

  #app {
    min-height: 90vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: hsl(335, 99%, 68%);
    padding-bottom: 2%;
  }

  .pinkGradient {
    background: linear-gradient(to bottom right, hsl(355, 35%, 78%) 10%, hsl(355, 55%, 94%));
  }

  .blueGradient {
    background: linear-gradient(to bottom right, hsl(212, 51%, 31%) 10%, hsl(204, 36%, 47%));
  }

  .greenGradient {
    background: linear-gradient(to top right, hsl(101, 38%, 79%) 50%, hsl(101, 78%, 79%));
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: 0.3s opacity ease-in-out;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  footer {
    text-align: center;
    padding: 10px 0 50px 0;
    width: 100%;
    height: 70px;
    background: hsla(292, 38%, 92%, 50%);
    color: hsl(331, 86%, 75%);
  }

  footer a {
    color: hsl(335, 99%, 68%);
  }

  .bluefooter {
    background: hsl(202, 20%, 92%);
    color: hsl(204, 39%, 55%)
  }

  .bluefooter a {
    color: hsl(208, 100%, 37%);
  }

  .brownfooter {
    background: hsl(37, 55%, 76%);
    color: hsl(11, 84%, 7%)
  }

  .brownfooter a {
    color: hsl(12, 40%, 24%);
  }

  footer .credit {
    font-size: 80%;
  }
</style>
