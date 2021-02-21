<template>
  <div class="header_title">
    <div class="title">{{ this.title }}</div>
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
.title {
  width: 600px;
  height: 140px;
}
</style>