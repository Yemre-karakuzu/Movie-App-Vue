<template>
  <div class="card-movie_image">
    <img
      class="card-movie_image_img"
      :src="imgUrl"
      onerror="this.src='https://via.placeholder.com/300x400';"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: "",
    };
  },
  props: {
    imgFolder: String,
  },
  methods: {
    imagUrlUnit() {
      this.imgFolder = "https://image.tmdb.org/t/p/w500/" + this.imgFolder;
    },
  },
  watch: {
    imgFolder() {
      console.log("sss=>", this.imgUrl);
    },
  },
};
</script>

<style>
.card-movie_image_img {
  margin-top: 20px;
  margin-left: 30px;
}
</style>