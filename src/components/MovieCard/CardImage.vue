<template>
  <div class="card-movie_image">
    <img
      @click="cardDetail"
      class="card-movie_image_img"
      :src="imgUrl"
      onerror="this.src='https://via.placeholder.com/342x513';"
      alt=""
    />
    <CardRange v-bind:Range="range"></CardRange>
  </div>
</template>

<script>
import CardRange from "./CardRange";
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  components: {
    CardRange,
  },
  props: {
    range: Number,
    imgFolder: String,
    movieId: Number,
  },
  methods: {
    imagUrlUnit() {
      this.imgUrl = "https://image.tmdb.org/t/p/w342" + this.imgFolder;
    },
    cardDetail() {
      this.$router.push({ name: "details", params: { movieId: this.movieId } });
      // this.$router.push("details");
    },
  },
  created() {
    this.imagUrlUnit();
  },
};
</script>

<style lang="scss">
.card-movie_image {
  position: relative;
  display: flex;

  .card-movie_image_img {
    border-radius: 2rem;
    &:hover {
      box-shadow: 0rem 2rem 5rem rgba($color: #640707, $alpha: 1);
      border-radius: 5rem;
    }
  }
  .movie_range {
    border-radius: 70%;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 15px;
    left: 30px;

    // background: black;
    .movie_range-detail {
      border-radius: 64%;
      width: 30px;
      padding-top: 4px;
      text-align: center;
      background: yellow;
      color: black;
      font-weight: bold;
      height: 30px;
    }
  }
}
</style>