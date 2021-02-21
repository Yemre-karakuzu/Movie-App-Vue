<template>
  <div class="home_conteiner">
    <div class="header">
      <div class="header_title">
        <Header></Header>
      </div>
      <div class="header_search">
        <Search />
      </div>
    </div>
    <Card v-bind:movies="getmovie"></Card>
  </div>
</template>

<script>
import Header from "../components/HeaderCard/Header";
import Search from "../components/HeaderCard/Search";
import Card from "../components/MovieCard/Card";
// import imgsize from "../assets/imgBase/ImgSize";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Search,
    Card,
  },
  computed: {
    getmovie() {
      return this.$store.getters.gettterMovie;
    },
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
}
.home_conteiner {
  // display: grid;
  height: 100vh;
  overflow-y: scroll;
  background-color: #f5f5f5;
}
.home_wrapper {
  width: 100vh;
}
</style>