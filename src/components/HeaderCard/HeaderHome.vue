<template>
  <div class="header">
    <div class="header_title">
      <Header></Header>
    </div>
    <div class="header_search">
      <Search />
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import Search from "./Search";
export default {
  components: {
    Header,
    Search,
  },
};
</script>

<style>
.header {
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
}
</style>