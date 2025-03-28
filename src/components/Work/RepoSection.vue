<template>
  <div>
    <section>
      <h3>{{this.title}}</h3>
      <slot />
    </section>
    <br /><hr />
  </div>
</template>

<script>
export default {
  name: 'RepoSection',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
  h3 {
    color: hsl(292, 38%, 92%);
    margin-bottom: 0px;
  }
</style>
