<template>
  <div class="genre">
    <div class="genretitle">Genres</div>
    <div class="btn-conteiner" v-for="list in genreList" :key="list.id">
      <div class="btn">{{ list.name }}/{{ list.id }}</div>
    </div>
  </div>
</template>

<script>
import { getGenreResult } from "../../services/Sevices";
export default {
  props: {
    genreList: [],
  },
  methods: {
    movieGetters() {
      try {
        getGenreResult()
          .then((res) => res.json())
          .then((res) => {
            this.data = res.results;
            console.log("datassssssssssssssss=>", this.data);
            this.$store.dispatch("actionsMovie", this.data);
          });
      } catch (e) {
        console.log("e", e);
      }
      console.log("getters=>", this.$store.getters.gettterMovie);
    },
  },
  created() {
    this.movieGetters();
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style lang="scss">
.genre {
  //margin: 2rem 6rem;
  margin-top: 3rem;
  .genretitle {
    text-align: center;
    font-size: 1.2rem;
  }
  .btn-conteiner {
    width: 50%;
    margin-left: 0.9rem; // margin-left: 4.2rem;
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
        //background: cornflowerblue;
        border: 1px solid;
        background: white;
      }
    }
  }
}
</style>