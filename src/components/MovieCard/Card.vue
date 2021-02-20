<template>
  <div class="card">
    <div class="card-movie" v-for="movie in movies" :key="movie.id">
      <CardImage v-bind:imgFolder="movie.poster_path"></CardImage>
      <div class="card-movie_details">
        <!-- <div class="card-movie_title">{{ movie.original_title }}</div>
        <div class="card-movie_range">{{ movie.vote_average }}</div> -->
        <CardTitle v-bind:title="movie.original_title"></CardTitle>
        <CardRange></CardRange>
      </div>
    </div>
  </div>
</template>

<script>
import CardImage from "./CardImage";
import CardTitle from "./CardImage";
import CardRange from "./CardImage";
export default {
  data() {
    return {};
  },
  props: {
    movies: Array,
  },
  components: {
    CardImage,
    CardTitle,
    CardRange,
  },
  watch: {
    movies() {
      console.log("img=>", this.$store.getters.gettterMovie);
    },
  },
  created() {
    console.log("selam");
  },
};
</script>

<style>
.card-movie_image {
  display: flex;
}
</style>