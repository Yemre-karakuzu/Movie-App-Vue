<template>
  <div class="card-movie_image">
    <img
      class="card-movie_image_img"
      :src="imgUrl"
      onerror="this.src='https://via.placeholder.com/185x278';"
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
      this.imgUrl = "https://image.tmdb.org/t/p/w342" + this.imgFolder;
    },
  },
  watch: {
    imgFolder() {
      console.log("sss=>", this.imgFolder);
    },
  },
  created() {
    this.imagUrlUnit();
    // console.log("sss=>", this.imgUrl);
  },
};
</script>

<style>
</style>