<template>
  <div class="details_wrapper">
    <div class="moviedetail_container">
      <div class="image_container"></div>
      <div class="details">
        <div class="title"></div>
        <div class="tagline"></div>
        <div class="vote_avarage"></div>
        <div class="genre">
          <div class="genredetail"></div>
        </div>
        <div class="overview">
          <div class="overview_title"></div>
          <div class="overview_value"></div>
        </div>
        <div class="cast">
          <div class="cast_avatar"></div>
        </div>
      </div>
    </div>
    <div class="recommended"></div>
  </div>
</template>

<script>
import { getMoviDetail } from "../../services/Sevices";

export default {
  data() {
    return {
      movieDetails: [],
    };
  },
  methods: {
    movieGetters() {
      try {
        getMoviDetail()
          .then((res) => res.json())
          .then((res) => {
            this.data = res;
            this.movieDetails = this.data;
            console.log("details=>", this.movieDetails);
            // this.$store.dispatch("actionsMovie", this.data);
          });
      } catch (e) {
        console.log("e", e);
      }
    },
  },
  created() {
    this.movieGetters();
  },
};
</script>

<style>
</style>