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
      isPopular: "false",
      topRated: "Top Rated",
      isToRated: "false",
      upcoming: "Upcoming",
      isUpComing: "false",
    };
  },
  methods: {
    movieGetters(keyword) {
      try {
        if (keyword == "populer") {
          this.isPopuler = "true";
        } else if (keyword == "to_rated") {
          this.isToRated = "true";
        } else {
          this.isUpComing = "true";
        }
        getDiscover(keyword)
          .then((res) => res.json())
          .then((res) => {
            this.data = res.results;
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
    this.movieGetters("popular");
  },
};
</script>

<style lang="scss">
.discover {
  //margin: 2rem 6rem;
  margin-top: 5rem;
  .discovertitle {
    text-align: center;
    font-size: 1.2rem;
  }
  .btn-conteiner {
    width: 50%;
    margin-left: 0.9rem;
    .btn {
      padding: 0px 5px;
      display: grid;
      cursor: pointer;
      text-align: left;
      margin-top: 5px;
      border-radius: 15px;
      &[isPopuler="true"] {
        background: cadetblue;
      }
      &:hover {
        background: cornflowerblue;
        border: 1px solid;
      }
    }
  }
}
</style>