<template>
  <div class="header" v-bind:class="{
      pinkGradient: $route.name === 'Home',
      blueGradient: $route.name === 'Books',
      greenGradient: $route.name === 'Projects' || $route.name === 'AoC',
    }">
    <h1 id="title">
      <router-link :to="'/'">
        Kavish
      </router-link>
    </h1>
    <ul id="main-menu">
      <li
        v-for="tab in tabs"
        :key="tabs.indexOf(tab)"
      >
        <router-link
          v-bind:class="{ selected: $route.name === tab }"
          :to="`/${tab.toLowerCase()}`"
        >
          <Button :text="tab" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Header',
  props: {
    tabs: Array,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
.header {
  padding: 0 2%;
  padding-bottom: 20px;
  background: hsl(291, 37%, 25%);
}

.pinkGradient {
  background: linear-gradient(to bottom right, hsl(355, 35%, 28%) 10%, hsl(355, 51%, 48%));
}

.blueGradient {
  background: linear-gradient(to bottom right, hsl(212, 51%, 11%) 10%, hsl(204, 36%, 31%));
}

.greenGradient {
  background: linear-gradient(to top right, hsl(101, 38%, 29%) 50%, hsl(101, 78%, 39%));
}

#title {
  font-family: 'Homemade Apple';
  font-size: 2.5em;
  margin: 0;
  display: inline;
  padding: 20px;
  padding-left: 10px;
}

#title a {
  text-decoration: none;
  color: hsl(292, 38%, 92%);
  text-shadow:  4px 4px 3px hsl(292, 38%, 52%);
  transition: color 0.5s ease-in-out;
  -moz-transition: color 0.5s ease-in-out;
  -webkit-transition: color 0.5s ease-in-out;
  position: absolute;
  margin-top: 20px;
}

#title a:hover {
  cursor: pointer;
  text-decoration: none;
  text-shadow:  4px 4px 3px hsl(292, 38%, 42%);
}

ul, ol {
  list-style: none;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#main-menu {
  margin-top: 30px;
  float: right;
  overflow: hidden;
}

#main-menu li {
  display: inline;
  font-size: 1.25em;
}

#main-menu li a {
  font-family: 'Homemade Apple', cursive, sans-serif;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  padding: 5px 0;
  height: 55px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  color: hsl(292, 38%, 92%);
  transition: color 0.25s ease-in-out, background-color 0.5s ease-in-out;
  -moz-transition: color 0.25s ease-in-out, background-color 0.5s ease-in-out;
  -webkit-transition: color 0.25s ease-in-out, background-color 0.5s ease-in-out;
}

#main-menu li a.selected {
  color: hsl(255, 100%, 91%);
}

#main-menu li a:hover {
  cursor: pointer;
}

@media screen and (max-width: 450px) {
  .header {
    padding-bottom: 30px;
  }

  #title {
    font-size: 2em;
  }

  #main-menu li a {
    padding: 0;
  }
}

</style>
