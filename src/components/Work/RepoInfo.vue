<template>
  <transition
    enter-active-class="bouncein"
  >
    <div class="repo" v-if="Object.keys(this.repo).length > 0">
      <div id="reponame">
        <strong v-if="this.repo.name.length > 0">
          <a :href='this.repo.clone_url' target="_blank">{{this.repo.name}}</a>
        </strong>
      </div>
      {{this.repo.description}}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Repo',
  props: {
    repo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
  .repo {
    color: hsl(292, 38%, 92%);
    margin-top: 10px;
    padding: 0 15px;
    font-size: 18px;
    line-height: 1.2em;
  }

  #reponame {
    margin-bottom: 10px;
    line-height: 2em;
  }

  .repo a {
    text-decoration: none;
    color: hsl(335, 72%, 85%);
    border-bottom: 1px solid white
  }

  .repo a:hover {
    color: hsl(292, 38%, 92%);
  }

  .bouncein {
    animation: bouncein 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @keyframes bouncein {
    0% { opacity: 0; height: 0; }
    100% { opacity: 1; height: 50px; }
  }
</style>
