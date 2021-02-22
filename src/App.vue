<template>
  <div id="app">
    <SlideBar />
    <div class="home">
      <router-view>
        <Home />
      </router-view>
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
  font-family: candara;
}
.home {
  width: 87%;
  height: 100vh;
}
</style>
