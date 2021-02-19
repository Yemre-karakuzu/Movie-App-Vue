<template>
  <div id="app">
    <div class="slide">
      <SlideBar />
    </div>
    <div class="home">
      <Home />
    </div>
  </div>
</template>

<script>
import SlideBar from "./views/SlideBar";
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    SlideBar,
    Home,
  },
};
</script>

<style>
#app {
  display: flex;
}
.slide {
  width: 13%;
  height: 100vh;
  background: yellow;
}
.home {
  width: 87%;
  height: 100vh;
  background: violet;
}
</style>
