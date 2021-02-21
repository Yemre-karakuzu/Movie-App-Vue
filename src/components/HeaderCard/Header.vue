<template>
  <div class="header_title">
    <div class="title">
      {{ this.title.toUpperCase() }}
      <div class="titledetail">MOVIES</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    getTitle() {
      this.title = this.$store.getters.getterHeaderTitle;
    },
  },
  watch: {
    title() {
      this.title = this.$store.getters.getterHeaderTitle;
    },
  },

  created() {
    this.getTitle();
  },
};
</script>

<style lang="scss">
.header_title {
  margin: 20px 20px;
  .title {
    font-size: 24px;
    font-weight: 300;
    width: 600px;
    height: 140px;
    .titledetail {
      font-weight: bold;
      font-size: 12px;
    }
  }
}
</style>