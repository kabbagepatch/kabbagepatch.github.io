<template>
  <div>
    <section>
      <h3>{{this.title}}</h3>
      <slot />
    </section>
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
    color: hsl(330, 31%, 42%);
    margin-bottom: 0px;
    margin-left: 10px;
    font-size: 24px;
  }
</style>
