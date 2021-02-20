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

<style>
#app {
  display: flex;
}
.slide {
  width: 20%;
  height: 100vh;
  border: 0.1px solid;
}
.home {
  width: 80%;
  height: 100vh;
  background: violet;
}
</style>
