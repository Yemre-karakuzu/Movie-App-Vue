<template>
  <div id="app">
    <SlideBar />
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

<style lang="scss">
#app {
  display: flex;
}
.slide {
  width: 15%;
  height: 100vh;
  border: 0.1px solid;
  background: rgba($color: #e8e9e9, $alpha: 0.5);
}
.home {
  width: 85%;
  height: 100vh;
  background: violet;
}
</style>
