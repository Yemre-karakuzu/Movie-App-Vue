<template>
  <div class="genres"></div>
</template>

<script>
import { getGenre } from "../../services/Sevices";
export default {
  methods: {
    movieGetters() {
      //console.log("Discover");
      try {
        getGenre()
          .then((res) => res.json())
          .then((res) => {
            //console.log("dicoverget");

            this.data = res.genres;
            //this.$store.dispatch("actionsMovie", this.data);
          });
      } catch (e) {
        console.log("e", e);
      }
      //console.log("getters=>", this.$store.getters.gettterMovie);
    },
  },
  created() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.movieGetters();
  },
};
</script>

<style>
</style>