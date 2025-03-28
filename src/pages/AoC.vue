<template>
  <div>
    <h1>Advent of Code</h1>
    <div class='wip'><h2>Work in progress</h2></div>
    <ul>
      <li
        class="repo"
        v-for="n in 7"
        :key="'advent' + n"
      >
        <div>
          <h3>
            <a :href="'https://github.com/kabbagepatch/AdventOfCode' + (2017 + n)" target="_blank">
              Advent of Code {{2017 + n}}
            </a>
          </h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AoC',
};
</script>

<style scoped>
  .wip {
    text-align: center;
    width: 100%;
  }

  a {
    color: hsl(292, 38%, 92%);
  }

  a:hover {
    color: hsl(293, 26%, 75%);
  }
</style>
