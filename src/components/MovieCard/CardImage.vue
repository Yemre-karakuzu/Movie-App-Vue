<template>
  <div class="card-movie_image">
    <img
      class="card-movie_image_img"
      :src="imgUrl"
      onerror="this.src='https://via.placeholder.com/185x278';"
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
  },
  methods: {
    imagUrlUnit() {
      this.imgUrl = "https://image.tmdb.org/t/p/w342" + this.imgFolder;
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
  .movie_range {
    border-radius: 70%;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 8px;
    left: 16px;
    // background: black;
    .movie_range-detail {
      box-shadow: 0rem 2rem 5rem rgba($color: #611818, $alpha: 1);
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