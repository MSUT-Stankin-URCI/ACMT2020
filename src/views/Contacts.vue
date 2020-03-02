<template>
  <div class="page">
    <div class="container" style="margin-bottom: 100px">
      <h2 style="margin:50px auto">
        <translate>Контакты</translate>
      </h2>

      <div style="margin-bottom: 36px">
        <h5 style="margin-bottom: 15px">
          <translate>Секретариат конференции:</translate>
        </h5>
        <div class="text">
          <i>
            <img src="@/assets/images/icons/call.svg" alt />
          </i>
          <translate>Телефон</translate>: 
          <a href="tel:+74999729567">+7 (499) 972-95-67</a>
        </div>
        <div class="text">
          <i>
            <img src="@/assets/images/icons/email.svg" alt />
          </i>
          <translate>E-mail:</translate>&nbsp;
          <a href="mailTo:acmt2020@stankin.ru">acmt2020@stankin.ru</a>
        </div>
      </div>
      
      <div style="margin-bottom: 36px">
        <h5 style="margin-bottom: 15px">
          <translate>Визовая поддержка:</translate>
        </h5>
        <div class="text">
          <i>
            <img src="@/assets/images/icons/call.svg" alt />
          </i>
          <translate>Телефон</translate>: 
          <a href="tel:+74999729411">+7 (499) 972-94-11</a>
        </div>
        <div class="text">
          <i>
            <img src="@/assets/images/icons/email.svg" alt />
          </i>
          <translate>E-mail:</translate>&nbsp;
          <a href="mailto:n.popova@stankin.ru">n.popova@stankin.ru</a>
        </div>
      </div>

      <div>
        <h5 style="margin-bottom: 15px">
          <translate>Адрес проведения:</translate>
        </h5>
        <div class="text">
          <i>
            <img src="@/assets/images/icons/placeholder.svg" alt />
          </i>
          <translate>
            Россия, 143025, Московская область, Одинцовский район, дер.
            Сколково, ул. Новая, д.100
          </translate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "place",
  data() {
    return {
      images: [
        require("../assets/images/gallery/Image 5.png"),
        require("../assets/images/english.png")
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.text {
  margin: 0 0 5px;
  padding: 0;
  font: 400 16px/44px "Gotham Pro";
  letter-spacing: 0;
  color: #1a1a1a;
  i {
    margin-right: 8px;
    img {
      height: 24px;
      width: 24px;
      transform: translate(0, 5px);
    }
  }
  a {
    text-decoration: none;
    color: #1a1a1a;
    cursor: pointer;
  }
}
</style>
