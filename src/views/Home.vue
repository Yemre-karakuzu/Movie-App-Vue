<template>
  <div class="home_conteiner">
    <HeaderHome />
    <Card v-bind:movies="getmovie"></Card>
  </div>
</template>
<script>
import HeaderHome from "../components/HeaderCard/HeaderHome";
import Card from "../components/MovieCard/Card";
// import imgsize from "../assets/imgBase/ImgSize";
export default {
  data() {
    return {};
  },
  components: {
    HeaderHome,
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