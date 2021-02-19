<template>
  <div class="header">
    <div class="header_title">
      <Header />
    </div>
    <div class="header_search">
      <Search />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Search from "../components/Search";
export default {
  components: {
    Header,
    Search,
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  background: tomato;
}
</style>