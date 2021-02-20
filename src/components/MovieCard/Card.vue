<template>
  <div class="card">
    <div class="card-movie" v-for="movie in movies" :key="movie.id">
      <CardImage v-bind:imgFolder="movie.poster_path"></CardImage>
      <div class="card-movie_details">
        <CardTitle v-bind:title="movie.original_title"></CardTitle>
        <CardRange v-bind:range="movie.vote_average"></CardRange>
      </div>
    </div>
  </div>
</template>

<script>
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardRange from "./CardRange";
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

<style lang="scss">
.card-movie_image {
  display: flex;
}
.card-movie_details {
  text-align: center;
  background: white;
}
.card-movie {
  cursor: pointer;
  box-sizing: inherit;
  margin-right: 20px;
  border-radius: 1rem;
  &:hover {
    transform: translateY(-20px);
  }
}
.card {
  margin: 40px 10px;
  display: flex;
  height: 278px;
  width: 185px;
}
</style>