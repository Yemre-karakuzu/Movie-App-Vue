<template>
  <div class="slide">
    <img class="img" src="https://via.placeholder.com/140x160" alt="" />
    <Discover></Discover>
    <Genres></Genres>
  </div>
</template>

<script>
import Discover from "../components/SliderCard/Discover";
import Genres from "../components/SliderCard/Genres";
export default {
  components: {
    Discover,
    Genres,
  },
};
</script>

<style>
.img {
  margin: 2rem;
}
</style>