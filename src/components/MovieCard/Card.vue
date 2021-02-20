<template>
  <div class="card">
    <div class="card-movie" v-for="movie in movies" :key="movie.id">
      <CardImage v-bind:imgFolder="movie.poster_path"></CardImage>
      <div class="card-movie_details">
        <CardTitle v-bind:title="movie.title"></CardTitle>
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
};
</script>

<style lang="scss">
.card-movie_image {
  display: flex;
}
.card-movie_details {
  text-align: center;
  background: white;
  background: rgba($color: #000000, $alpha: 0.5);
}
.card-movie {
  cursor: pointer;
  box-sizing: inherit;
  margin-right: 45px;
  margin-left: 20px;
  box-shadow: 0rem 2rem 5rem rgba($color: #000000, $alpha: 0.5);
  border-radius: 1rem;
  &:hover {
    transform: translateY(-20px);
  }
}
.card {
  display: grid;
  grid-template-columns: 250px 250px 250px 250px;
  grid-gap: 30px;
  margin: 40px 10px;
  height: 278px;
  width: 185px;
}
</style>