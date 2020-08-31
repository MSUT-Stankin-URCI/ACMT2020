<template>
  <main :key="this.$language.current">
    <app-header />
    <transition
      appear
      name="slide-fade"
      mode="out-in"
    >
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

.table_wrapper  {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  
  .table {
    border-collapse: collapse;
    margin: 20px 0;
    border: 1px solid #eee;

    thead td {
      padding: 10px;
      border-bottom: 2px solid #ccc;
      font-size: 18px;
      background-color: #f7f7f7;

      b {
        display: block;
        font-weight: 700;
        color: #666;
        font-size: 14px;
        margin: 15px 0px -15px 0px;
      }
    }

    tbody td {
      vertical-align: top;
      min-width: 200px;
      padding: 10px;

      b {
        display: block;
        font-weight: 700;
        color: #666;
        margin-bottom: -15px;
      }
    }

    tr:not(:last-child) td {
      border-bottom: 1px solid #ddd;
    }
  }
}
</style>
