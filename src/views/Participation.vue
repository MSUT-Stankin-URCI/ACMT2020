<template>
  <div class="page">
    <div class="container" style="margin-top: 50px; margin-bottom:100px">
      <div class="flex wrap flex-between">
        <div class="col-5 col-sm-12">
          <h2 style="margin-bottom:30px">
            <div class="red-text">
              <translate>Принять</translate>
            </div>
            <div>
              <translate>Участие</translate>
            </div>
          </h2>
          <p>
            <translate>
              Авторам предлагается представить расширенный абстракт объемом не более 400 слов на английском языке. Рисунки не могут быть прикреплены к абстракту.
            </translate>
          </p>
          <p>
            <translate>
              Абстракт должен быть представлен до 20 февраля 2020 г. по электронной почте:
            </translate>&nbsp;
            <a href="mailTo:acmt2020@stankin.ru">acmt2020@stankin.ru</a>
          </p>
        </div>
        <div class="col-6 col-sm-12">
          <div style="margin-bottom:50px">
            <h3 style="margin-bottom:15px">
              <div class="red-text">
                <translate>ПРАВИЛА</translate>
              </div>
              <div>
                <translate>ПУБЛИКАЦИЙ</translate>
              </div>
            </h3>
            <p>
              <translate>
                Все принятые доклады конференции будут опубликованы в изданиях, индексируемых в базах Web of Science и Scopus.
              </translate>
            </p>
          </div>
          <div>
            <h3 style="margin-bottom:15px">
              <div class="red-text">
                <translate>РЕГИСТРАЦИОННЫЙ</translate>
              </div>
              <div>
                <translate>ВЗНОС</translate>
              </div>
            </h3>
            <p>
              <translate
                >Регистрация (ранняя) (срок оплаты до 30 июня 2020 г.)
                –</translate
              >&nbsp;
              <strong>
                <translate>28400 руб.</translate>
              </strong>
            </p>
            <p>
              <translate>Полная регистрация (после 30 июня 2020 г.) –</translate
              >&nbsp;
              <strong>
                <translate>35500 руб.</translate>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
p {
  text-align: left;
  font: 400 12px/16px "Gotham Pro";
  letter-spacing: 0;
  color: #1a1a1a;
  a {
    color: #9c1022;
  }
  strong {
    font: 600 12px/16px "Gotham Pro";
    letter-spacing: 0;
    color: #9c1022;
  }
}
</style>
