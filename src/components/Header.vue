<template>
  <div class="header" v-bind:class="{
      pinkGradient: $route.name === 'Home',
      blueGradient: $route.name === 'Books',
      warmGradient: $route.name === 'Projects' || $route.name === 'AoC',
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
  --header-text: hsl(292, 38%, 92%);
  --header-text-shadow: hsl(292, 38%, 52%);
  --header-text-shadow-hover: hsl(292, 38%, 42%);
  --header-selected: hsl(255, 100%, 91%);
  --theme-button-primary-hue: 335;
  --theme-button-primary-lightness: 99;
  --theme-button-shadow-primary-hue: 320;
  --theme-button-shadow-secondary-hue: 60;
  padding: 0 2%;
  padding-bottom: 20px;
  background: hsl(291, 37%, 25%);
}

.pinkGradient {
  background: linear-gradient(to bottom right, hsl(355, 35%, 28%) 10%, hsl(355, 51%, 48%));
  --header-text: hsl(292, 38%, 92%);
  --header-text-shadow: hsl(292, 38%, 52%);
  --header-text-shadow-hover: hsl(292, 38%, 42%);
  --header-selected: hsl(255, 100%, 91%);
  --theme-button-primary-hue: 335;
  --theme-button-primary-lightness: 99;
  --theme-button-shadow-primary-hue: 320;
  --theme-button-shadow-secondary-hue: 60;
}

.blueGradient {
  background: linear-gradient(to bottom right, hsl(212, 51%, 11%) 10%, hsl(204, 36%, 31%));
  --header-text: hsl(196, 73%, 92%);
  --header-text-shadow: hsl(210, 56%, 44%);
  --header-text-shadow-hover: hsl(212, 61%, 34%);
  --header-selected: hsl(191, 100%, 82%);
  --theme-button-primary-hue: 204;
  --theme-button-primary-lightness: 79;
  --theme-button-shadow-primary-hue: 196;
  --theme-button-shadow-secondary-hue: 48;
}

.warmGradient {
  background: linear-gradient(120deg, hsl(12, 37%, 18%) 0%, hsl(21, 44%, 25%) 48%, hsl(30, 54%, 36%) 100%);
  --header-text: hsl(33, 77%, 90%);
  --header-text-shadow: hsl(18, 47%, 30%);
  --header-text-shadow-hover: hsl(16, 54%, 24%);
  --header-selected: hsl(40, 94%, 80%);
  --theme-button-primary-hue: 31;
  --theme-button-primary-lightness: 78;
  --theme-button-shadow-primary-hue: 18;
  --theme-button-shadow-secondary-hue: 46;
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
  color: var(--header-text);
  text-shadow: 4px 4px 3px var(--header-text-shadow);
  transition: color 0.5s ease-in-out;
  -moz-transition: color 0.5s ease-in-out;
  -webkit-transition: color 0.5s ease-in-out;
  position: absolute;
  margin-top: 20px;
}

#title a:hover {
  cursor: pointer;
  text-decoration: none;
  text-shadow: 4px 4px 3px var(--header-text-shadow-hover);
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
  color: var(--header-text);
  transition: color 0.25s ease-in-out, background-color 0.5s ease-in-out;
  -moz-transition: color 0.25s ease-in-out, background-color 0.5s ease-in-out;
  -webkit-transition: color 0.25s ease-in-out, background-color 0.5s ease-in-out;
}

#main-menu li a.selected {
  color: var(--header-selected);
}

#main-menu li a {
  --button-primary-hue: var(--theme-button-primary-hue);
  --button-primary-lightness: var(--theme-button-primary-lightness);
  --button-color: var(--header-text);
  --button-shadow-primary-hue: var(--theme-button-shadow-primary-hue);
  --button-shadow-secondary-hue: var(--theme-button-shadow-secondary-hue);
  --button-text-shadow: var(--header-text-shadow);
}

#main-menu li a.selected {
  --button-color: var(--header-selected);
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
