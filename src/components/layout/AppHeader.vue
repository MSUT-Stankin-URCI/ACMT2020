<template>
  <header class="header">
    <div class="pull-right">
      <change-language-btn class="change-lang"></change-language-btn>
    </div>
    <div class="flex flex-between vertical-center">
      <div class="logo">АСМТ2020</div>
      <div class="menu only-screen">
        <div ref="underscore" class="underscore"></div>
        <ul ref="menu" class="flex flex-between" @click="update_underscore">
          <li v-for="(menu_item, id) in menu_items" :key="id" class="menu-link">
            <router-link
              :to="{ name: menu_item.link }"
              :class="{ 'item-active': menu_item.link === $route.name }"
              >{{ menu_item.title }}</router-link
            >
          </li>
          <li class="menu-link participation">
            <router-link
              :to="{ name: 'participation' }"
              :class="{ participation_active: 'participation' === $route.name }"
            >
              <translate>Участие</translate>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="only-mobile">
        <div ref="mobile_menu" class="mobile-menu mobile-menu_hidden">
          <div class="menu-btn" @click.stop.prevent="open_menu">&#9776;</div>
          <ul>
            <li class="menu-mobile-link participation">
              <router-link
                :to="{ name: 'participation' }"
                :class="{
                  participation_active: 'participation' === $route.name
                }"
              >
                <translate>Участие</translate>
              </router-link>
            </li>
            <li
              v-for="(menu_item, id) in menu_items"
              :key="id"
              class="menu-mobile-link"
            >
              <router-link
                :to="{ name: menu_item.link }"
                :class="{ 'item-active': menu_item.link === $route.name }"
                >{{ menu_item.title }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ChangeLanguageBtn from "@/components/libs/languages/ChangeLanguageBtn.vue";
export default {
  name: "AppHeader",
  components: { ChangeLanguageBtn },
  data() {
    let menu_items = [
      { title: this.$gettext("Главная"), link: "home" },
      { title: this.$gettext("Организация"), link: "organization" },
      { title: this.$gettext("Программа"), link: "program" },
      { title: this.$gettext("Место проведения"), link: "place" },
      { title: this.$gettext("Контакты"), link: "contacts" }
    ];
    return {
      menu_items
    };
  },
  mounted() {
    this.update_underscore();
    document.addEventListener("click", this.close_menu);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.close_menu);
  },
  methods: {
    open_menu() {
      this.$refs.mobile_menu.classList.toggle("mobile-menu_hidden");
    },
    close_menu() {
      this.$refs.mobile_menu.classList.add("mobile-menu_hidden");
    },
    update_underscore() {
      let underscore = this.$refs.underscore;
      let target = this.$refs.menu.querySelector(".item-active");
      if (!target) {
        underscore.style.width = "0";
        return;
      }
      let menu_rect = this.$refs.menu.getBoundingClientRect();
      let rect = target.getBoundingClientRect();
      underscore.style.left = rect.left - menu_rect.left + "px";
      underscore.style.top = rect.bottom - menu_rect.top + "px";
      underscore.style.width = rect.width + "px";
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  padding: 29px 130px;
  box-sizing: border-box;
  height: 126px;
  background: #ffffff;
  @media (max-width: 600px) {
    padding: 29px 10px;
  }
}

.menu {
  width: 796px;
  position: relative;
}

.menu-link {
  list-style: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  a {
    font: 400 12px/14px "Gotham Pro";
    text-align: left;
    letter-spacing: 0;
    color: #1a1a1a;
    text-transform: uppercase;
    opacity: 1;
    text-decoration: none;
    padding: 5px 15px;
    transition: 0.3s;
    display: inline-block;

    &:hover {
      color: #9c1022;
    }
  }
}
.logo {
  font: 600 32px/36px "Gotham Pro";
  letter-spacing: 0;
  opacity: 1;
  flex-grow: 0;
  cursor: default;
  user-select: none;
}

.change-lang {
  text-align: left;
  text-decoration: underline;
  font: 600 12px/14px "Gotham Pro";
  letter-spacing: 0;
  color: #9c1022;
  opacity: 1;
  margin-bottom: 29px;
  cursor: pointer;
  display: inline-block;
}

.participation {
  border: 1px solid #9c1022;
  &:hover {
    background: #9c1022;
    a {
      color: white;
    }
  }
  a {
    color: #9c1022;
  }
  .participation_active {
    background: #9c1022;
    color: white;
  }
}

.underscore {
  display: block;
  position: absolute;
  width: 0;
  height: 3px;
  background: #1a1a1a;
  transition: 0.4s;
}

.mobile-menu {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  z-index: 1000;
  transition: 0.4s;
  &_hidden {
    transform: translate(-102%, 0);
  }

  .menu-btn {
    position: absolute;
    right: -40px;
    top: 10px;
    font-size: 30px;
    font-family: monospace;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 1px 30px;
    height: 100%;
    margin: 0;
    box-sizing: border-box;
    li {
      list-style: none;
      margin: 0 0 20px;
      padding: 0;
      a {
        display: block;
        padding: 15px;
        border: 1px solid #1a1a1a;
        color: #1a1a1a;
        font-size: 14px;
        text-decoration: none;
      }
      .item-active {
        text-decoration: underline;
      }
    }
  }
}
</style>
