<template>
  <div class="slide">
    <Discover></Discover>
    <Genres v-bind:genreList="getGenreList"></Genres>
  </div>
</template>

<script>
import Discover from "../components/SliderCard/Discover";
import Genres from "../components/SliderCard/Genres";
import { getGenre } from "../services/Sevices";
export default {
  components: {
    Discover,
    Genres,
  },
  methods: {
    movieGetters() {
      try {
        getGenre()
          .then((res) => res.json())
          .then((res) => {
            this.data = res.genres;
            console.log("ddd", this.data);
            this.$store.dispatch("actionsGenreList", this.data);
          });
      } catch (e) {
        console.log("e", e);
      }
    },
  },
  computed: {
    getGenreList() {
      return this.$store.getters.gettterGenreList;
    },
  },
  created() {
    this.movieGetters();
  },
};
</script>

<style>
.img {
  margin: 2rem;
}
</style>