<template>
  <div class="card-movie_range">
    <button class="detail">{{ range }}</button>
  </div>
</template>

<script>
export default {
  props: {
    range: Number,
  },
};
</script>

<style>
.detail {
  background: blueviolet;
}
</style>