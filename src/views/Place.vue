<template>
  <div class="page">
    <div class="container">
      <section style="margin-bottom: 72px">
        <h2 style="margin:50px auto">
          <div class="red-text">
            <translate>Место</translate>
          </div>
          <div>
            <translate>Проведения</translate>
          </div>
        </h2>
        <div class="flex wrap flex-between">
          <div class="col-6 col-sm-12">
            <p class="text">
              <translate>Столица России с населением в около 13 миллионов человек и является знаковым, всемирно известным городом с почти 1000-летней историей. Москва, известная своими архитектурными чудесами, в том числе Кремлевским комплексом, Красной площадью и собором Василия Блаженного, имеет огромный образовательный, культурный и промышленный центр. Москва является крупнейшим научным центром России и входит в двадцатку крупнейших городов мира. Штаб-квартира Российской академии наук находится в Москве, а также другие научно-исследовательские и прикладные научные учреждения.</translate><br>
              <translate>В 1930 году Московский Государственный Станкостроительный Институт был основан как школа для инженеров в области станкостроения и технологии производства. В 1992 году он стал Московским Государственным Технологическим Университетом «СТАНКИН». За свою историю МГТУ «СТАНКИН» выпустил многих известных ученых и инженеров. На сегодняшний день около 5 000 студентов обучаются в 4 институтах. Это Институт машиностроения и инжиниринга, Институт информационных систем и технологий, Институт автоматизации и робототехники, Институт экономики и технологического менеджмента.</translate>
            </p>
          </div>
          <div class="col-5 col-sm-12">
            <div class="border-image">
              <img src="@/assets/images/places/Image 2.png">
            </div>
          </div>
        </div>
      </section>
      <section style="margin-bottom:100px">
        <div class="flex wrap flex-between">
          <div class="col-5 col-sm-12">
            <div class="border-image">
              <img src="@/assets/images/places/Image 6.jpg">
            </div>
          </div>
          <div class="col-7 col-sm-12">
            <h4 style="margin:0 auto 20px">
              <div>
                <translate>Станкин</translate>
              </div>
            </h4>
            <p
              class="text"
              style="margin-bottom:70px"
            >
              <translate>
                Московский государственный технологический университет «СТАНКИН» (МГТУ «СТАНКИН») — российский машиностроительный вуз, один из девяти системообразующих университетов в России. Полное наименование — Федеральное государственное бюджетное образовательное учреждение высшего образования «Московский государственный технологический университет «СТАНКИН». Основан в 1930 году как Московский станкоинструментальный институт.
              </translate>
            </p>
            <p
              v-if="this.$parent.$language.current == 'ru_RU'"
              class="text"
            >
              <translate>Адрес: Вадковский переулок, д.1, Москва, 127055</translate><br>
            </p>
            <p
              v-if="this.$parent.$language.current == 'en_GB'"
              class="text"
            >
              Location: The Moscow State Technological University STANKIN<br>
              Address: Vadkovskiy Pereulok, 1, Moscow, 127055<br>
              Address (cyrillic): Вадковский переулок, д.1, Москва, 127055
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
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
  margin: 0;
  padding: 0;
  font: 300 12px/22px "Gotham Pro";
}
.border-image img {
  width: 394px;
  height: 286px;
  object-fit: cover;
  transform: translate(-5px, -5px);
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    margin: 20px;
  }
}
.border-image {
  width: 394px;
  height: 286px;
  display: block;
  position: relative;
  border: 1px solid #9c1022;
  @media (max-width: 600px) {
    width: 80%;
    height: auto;
    margin: 20px;
  }
}
a {
  color: #9c1022;
}
</style>
