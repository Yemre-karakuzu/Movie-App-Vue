<template>
  <div class="home_conteiner">
    <div class="header">
      <div class="header_title">
        <Header />
      </div>
      <div class="header_search">
        <Search />
      </div>
    </div>
    <div class="home_wrapper">
      <div class="card-movie" v-for="movie in movies" :key="movie.id">
        <div class="card-movie_image">
          <img
            src="https://image.tmdb.org/t/p/w500/"
            +{{movie.poster_path}}
            onerror="this.src='https://via.placeholder.com/92x138';"
            alt=""
          />
        </div>
        <div class="card-movie_details">
          <div class="card-movie_title"></div>
          <div class="card-movie_range"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Search from "../components/Search";
// import imgsize from "../assets/imgBase/ImgSize";
export default {
  data() {
    return {
      movies: [],
    };
  },
  components: {
    Header,
    Search,
  },
  methods: {
    getmovie() {
      this.movies.push(this.$store.getters.gettterMovie);
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
  background: tomato;
}
.home_wrapper {
  width: 100%;
  height: 75%;
}
</style>