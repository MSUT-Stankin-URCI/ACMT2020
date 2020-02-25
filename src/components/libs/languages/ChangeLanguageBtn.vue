<template>
  <span @click="change">
    <span v-if="$language.current === 'ru_RU'">
      <img src="@/assets/images/english.png" alt />
      <span>English version</span>
    </span>
    <span v-else>Русская версия</span>
  </span>
</template>

<script>
export default {
  name: "ChangeLanguageBtn",
  methods: {
    change() {
      if (this.$language.current === "ru_RU") {
        this.$language.current = "en_GB";
      } else {
        this.$language.current = "ru_RU";
      }
    }
  }
};
</script>

<style scoped>
img {
  margin-right: 5px;
}
</style>
