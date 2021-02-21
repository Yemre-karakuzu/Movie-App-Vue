<template>
  <div class="genre">
    <div class="genretitle">Genres</div>
    <div class="btn-conteiner" v-for="list in genreList" :key="list.id">
      <div class="btn">
        <i class="icon fa fa-dot-circle"></i>{{ list.name }}
      </div>
    </div>
  </div>
</template>

<script>
// import { getGenreResult } from "../../services/Sevices";
export default {
  props: {
    genreList: Array,
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
    text-align: left;
    padding: 0px 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }
  .btn-conteiner {
    width: 50%;
    margin-left: 0.9rem; // margin-left: 4.2rem;
    .btn {
      padding: 0px 5px;
      display: grid;
      display: flex;
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
        transform: translateX(15px);
        background: white;
      }
      .icon {
        padding: 5px 3px;
        font-size: 10px;
        color: grey;
      }
    }
  }
}
</style>