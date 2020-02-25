<template>
  <main :key="this.$language.current">
    <app-header />
    <transition appear name="slide-fade" mode="out-in">
      <router-view />
    </transition>
    <app-footer />
  </main>
</template>

<script>
import AppHeader from "./components/layout/AppHeader";
import AppFooter from "./components/layout/AppFooter";
export default {
  name: "App",
  components: { AppHeader, AppFooter }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}
</style>
