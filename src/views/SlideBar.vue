<template>
  <div class="slide" data-state="state">
    <i class="fa fa-search" aria-hidden="true" @click="isShowMethods"></i>
    <div class="show-hide" v-show="isShow">
      <Discover></Discover>
      <Genres v-bind:genreList="getGenreList"></Genres>
    </div>
  </div>
</template>

<script>
import Discover from "../components/SliderCard/Discover";
import Genres from "../components/SliderCard/Genres";
import { getGenre } from "../services/Sevices";
export default {
  data() {
    return {
      isShow: true,
      state: false,
    };
  },
  components: {
    Discover,
    Genres,
  },
  methods: {
    isShowMethods() {
      this.isShow = !this.isShow;
    },
    movieGetters() {
      try {
        getGenre()
          .then((res) => res.json())
          .then((res) => {
            this.data = res.genres;
            console.log("ddd", this.data);
            this.$store.dispatch("actionsGenreList", this.data);
          });
      } catch (e) {
        console.log("e", e);
      }
    },
  },
  computed: {
    getGenreList() {
      return this.$store.getters.gettterGenreList;
    },
  },
  created() {
    this.movieGetters();
  },
};
</script>

<style lang="scss">
.slide {
  width: 15%;
  height: 100vh;
  border: 0.1px solid;
  background: rgba($color: #e8e9e9, $alpha: 0.5);
  label {
    position: relative;
    display: inline-block;
    background-color: #fff;
    padding: 5px 12px;
    transition: all 1s ease;
    border-radius: 0;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    &::after {
      content: "";
      display: block;
      height: 2px;
      width: 80%;
      background-color: #f0ad4e;
      transition: all 1s ease 0.5s;
    }
    input {
      transition: width 1s ease, opacity 0.5s ease 0.5s;
      opacity: 1;
      width: 180px;
      height: 25px;
      border: 0;
      outline: none;
      color: darken(#f0ad4e, 25);
    }
    i {
      position: absolute;
      top: 11px;
      right: 11px;
      color: #333;
      cursor: pointer;
    }
    &[data-state="close"] {
      border-radius: 30px;
      padding: 5px 5px;
      transition: all 1s ease;
      &::after {
        width: 0%;
        transition: all 0.3s ease;
      }
      i {
        pointer-events: none;
      }
      input {
        width: 28px;
        height: 25px;
        opacity: 0;
        cursor: pointer;
        transition: opacity 0.5s ease, width 1s ease;
        -webkit-appearance: none;
      }
    }
  }
}
</style>