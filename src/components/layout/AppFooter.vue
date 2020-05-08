<template>
  <footer class="footer">
    <div class="flex flex-between vertical-center" style="margin-bottom: 37px">
      <div class="logo"></div>
      <div class="menu only-screen">
        <ul class="flex flex-between">
          <li v-for="(menu_item, id) in menu_items" :key="id" class="menu-link">
            <router-link :to="{ name: menu_item.link }">
              {{ menu_item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-between vertical-center">
      <p class="dates">
        <translate
          >31 мая - 2 июня 2021 г. - МГТУ «СТАНКИН», Москва, Россия</translate
        >
      </p>
      <div class="contacts">
        <div>
          <a href="tel:+7 (499) 972-95-67">+7 (499) 972-95-67</a>
        </div>
        <div>
          <a href="mailTo:acmt2020@stankin.ru">acmt2020@stankin.ru</a>
        </div>
      </div>
    </div>
    <div class="rights text-center">
      <div>
        <translate>@ All rights reserved ©</translate>
      </div>
      <div>
        2012 - {{(new Date()).getFullYear()}} ФГБОУ ВО «МГТУ «СТАНКИН»
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppHeader",
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
  }
};
</script>

<style lang="scss" scope>
.footer {
  padding: 70px 130px 30px;
  height: 294px;
  background: #1a1a1a 0% 0% no-repeat padding-box;
  color: #ffffff;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 70px 10px 30px;
    height: auto;
  }
}

.menu {
  width: 796px;
}

.menu-link {
  list-style: none;
  margin: 0;
  padding: 0;

  a {
    font: 400 12px/14px "Gotham Pro";
    text-align: left;
    letter-spacing: 0;
    color: white;
    text-transform: uppercase;
    opacity: 1;
    text-decoration: none;
  }
}
.logo {
  font: 600 32px/36px "Gotham Pro";
  letter-spacing: 0;
  opacity: 1;
  flex-grow: 0;
  margin-right: 10px;

  width: 213px;
  height: 27px;
  background-image: url('../../assets/images/logo-white.png');
}

.change-lang {
  text-align: left;
  text-decoration: underline;
  font: Black 12px/14px "Gotham Pro";
  letter-spacing: 0;
  opacity: 1;
  margin-bottom: 29px;
  cursor: pointer;
}

.contacts {
  text-align: right;
  a {
    text-align: right;
    font: 400 12px/14px "Gotham Pro";
    letter-spacing: 0;
    color: #ffffff;
    text-decoration: none;
  }
}
.rights {
  margin-top: 50px;
  opacity: 0.5;
  font: 400 12px/18px "Gotham Pro";
  letter-spacing: 0;
}

.dates {
  font: 400 12px/14px "Gotham Pro";
  letter-spacing: 0;
}
</style>
