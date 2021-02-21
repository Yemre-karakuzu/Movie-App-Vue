<template>
  <div class="discover">
    <div class="discovertitle">Discover</div>
    <div class="btn-conteiner">
      <div @click="movieGetters('popular')" class="btn">
        <i class="icon fa fa-heart"></i>{{ this.popular }}
      </div>
      <div @click="movieGetters('top_rated')" class="btn">
        <i class="icon fa fa-poll"></i>{{ this.topRated }}
      </div>
      <div @click="movieGetters('upcoming')" class="btn">
        <i class="fad fa-archive"></i>{{ this.upcoming }}
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
        if (keyword == "popular") {
          this.isPopuler = "true";
          console.log("populer");
          this.$store.dispatch("actionsHeaderTitle", this.popular);
        } else if (keyword == "top_rated") {
          console.log("toprated");
          this.isToRated = "true";
          this.$store.dispatch("actionsHeaderTitle", this.topRated);
        } else {
          console.log("upcoming");
          this.isUpComing = "true";
          this.$store.dispatch("actionsHeaderTitle", this.upcoming);
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
    text-align: left;
    padding: 0px 10px;
    font-weight: bold;
    font-size: 1.2rem;
  }
  .btn-conteiner {
    width: 50%;
    margin-left: 0.9rem;
    .btn {
      padding: 0px 5px;
      display: grid;
      display: flex;
      cursor: pointer;
      text-align: left;
      margin-top: 5px;
      border-radius: 15px;
      &:hover {
        transform: translateX(15px);
        background: cornflowerblue;
        border: 1px solid;
      }
      .icon {
        padding: 5px 3px;
        color: grey;
        font-size: 10px;
      }
    }
  }
}
</style>