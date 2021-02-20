<template>
  <div class="genre">
    <div class="genretitle">Genres</div>
    <div class="btn-conteiner" v-for="list in genreList" :key="list.id">
      <div class="btn">
        {{ list.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    genreList: [],
  },
  created() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};
</script>

<style lang="scss">
.genre {
  //margin: 2rem 6rem;
  margin-top: 3rem;
  .genretitle {
    text-align: center;
    font-size: 1.2rem;
  }
  .btn-conteiner {
    width: 50%;
    margin-left: 0.9rem; // margin-left: 4.2rem;
    .btn {
      padding: 0px 5px;
      display: grid;
      cursor: pointer;
      text-align: left;
      margin-top: 5px;
      border-radius: 15px;
      &[isPopuler="true"] {
        background: cadetblue;
      }
      &:hover {
        //background: cornflowerblue;
        border: 1px solid;
        background: white;
      }
    }
  }
}
</style>