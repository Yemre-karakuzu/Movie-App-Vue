<template>
  <div class="discover">
    <div class="discovertitle">Discover</div>
    <div class="btn-conteiner">
      <div @click="movieGetters('popular')" class="btn">{{ this.popular }}</div>
      <div @click="movieGetters('top_rated')" class="btn">
        {{ this.topRated }}
      </div>
      <div @click="movieGetters('upcoming')" class="btn">
        {{ this.upcoming }}
      </div>
    </div>
  </div>
</template>

<script>
import { getDiscover } from "../../services/Sevices";
export default {
  data() {
    return {
      popular: "Popular",
      topRated: "Top Rated",
      upcoming: "Upcoming",
    };
  },
  methods: {
    movieGetters(keyword) {
      //console.log("Discover");
      try {
        getDiscover(keyword)
          .then((res) => res.json())
          .then((res) => {
            //console.log("dicoverget");

            this.data = res.results;
            console.log("discovergetdata", this.data);
            this.$store.dispatch("actionsMovie", this.data);
          });
      } catch (e) {
        console.log("e", e);
      }
      console.log("getters=>", this.$store.getters.gettterMovie);
    },
  },
  created() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.movieGetters();
  },
};
</script>

<style lang="scss">
.discover {
  margin-top: 2rem 6rem;

  .discovertitle {
    text-align: center;
    font-size: 1.2rem;
  }
  .btn-conteiner {
    .btn {
      padding: 0px 5px;
      display: grid;
      cursor: pointer;
      text-align: center;
      margin-top: 5px;
      border-radius: 15px;
      border: 1px solid;
      &:hover {
        background: cornflowerblue;
      }
    }
  }
}
</style>