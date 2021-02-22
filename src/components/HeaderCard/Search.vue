<template>
  <div class="search">
    <form id="app" action="#">
      <label :data-state="state" for="search">
        <input
          v-model="search"
          type="text"
          placeholder="Search"
          @mouseover="state = 'opan'"
          @blur="state = 'close'"
          @mouseleave="state = 'close'"
          @keyup.enter="searchDatas"
        />
        <i @click="searchDatas" class="fa fa-search" aria-hidden="true"></i>
      </label>
    </form>
  </div>
</template>

<script>
import { getResults } from "../../services/Sevices";
export default {
  data() {
    return {
      search: "",
      state: "close",
      data: [],
    };
  },
  methods: {
    searchDatas(event) {
      this.search = event.target.value;
      this.state = "close";
      this.movieGetters(this.search);
      this.search = "";
    },
    movieGetters(keyword) {
      try {
        getResults(keyword)
          .then((res) => res.json())
          .then((res) => {
            this.data = res.results;
            this.$store.dispatch("actionsMovie", this.data);
          });
      } catch (e) {
        console.log("e", e);
      }
    },
  },
};
</script>

<style lang="scss">
.search {
  width: 230px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css");

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
</style>