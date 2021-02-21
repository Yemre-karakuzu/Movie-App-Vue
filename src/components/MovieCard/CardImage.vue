<template>
  <div class="card-movie_image">
    <img
      class="card-movie_image_img"
      :src="imgUrl"
      onerror="this.src='https://via.placeholder.com/185x278';"
      alt=""
    />
    <div class="movie_range">{{ range }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  props: {
    range: Number,
    imgFolder: String,
  },
  methods: {
    imagUrlUnit() {
      this.imgUrl = "https://image.tmdb.org/t/p/w342" + this.imgFolder;
    },
  },
  created() {
    this.imagUrlUnit();
  },
};
</script>

<style>
</style>