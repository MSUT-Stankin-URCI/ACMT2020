<template>
  <div class="page">
    <div>
      <section class="relative gray-bg container">
        <h1 class="jumble">
          <translate>ОРГАНИЗАЦИЯ</translate>
        </h1>
        <gallery
          :images="images"
          style="margin-bottom: 50px"
        />
        <div
          class="flex wrap flex-between"
          style="margin-bottom:100px"
        >
          <div class="col-4 col-sm-12">
            <img
              v-if="this.$parent.$language.current == 'ru_RU'"
              src="../assets/images/org_rus.svg"
              alt="Organizational structure"
              width="100%"
            >
            <img
              v-if="this.$parent.$language.current == 'en_GB'"
              src="../assets/images/org_eng.svg"
              alt="Organizational structure"
              width="100%"
            >
          </div>

          <div class="col-3 col-sm-12">
            <div style="margin-bottom: 20px">
              <h5>
                <translate>Исполнительный совет</translate>
              </h5>
              <ul>
                <li class="text">
                  Chairman: Prof Kapitanov
                </li>
                <li class="text">
                  Co-chairman: Prof Kutin
                </li>
                <li class="text">
                  Co-chairman: Prof Wegener
                </li>
              </ul>
            </div>
            <div>
              <h5><translate>Генеральный секретариат</translate></h5>

              <ul>
                <li class="text">
                  Secretary General Scientific Coordination (SGS): Dr Kliuev
                </li>
                <li class="text">
                  Secretary General Conference Organisation (SGO): Mr Kneubühler
                </li>
              </ul>
            </div>
          </div>

          <div class="col-4 col-sm-12">
            <h5>
              <translate>Международный совет конференции:</translate>
            </h5>
            <p
              class="text"
              style="display: flex; flex-wrap: wrap;"
            >
              <span style="margin-right: 5px"><translate>Prof. M. Bambach (Germany), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. F. Bleicher (Austria), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. A. Borovkov (Russia), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. Christian Brecher (Germany), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. E. Budak (Turkey), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. G. Byrne (Ireland), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. P. Dasic (Serbia), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. K. Droeder (Germany), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. W-G. Drossel (Germany), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. Ekorkmaz (Canada), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. K. Jemielniak (Poland),</translate></span>
              <span style="margin-right: 5px"><translate>Prof. F. Grechnikov (Russia), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. F. Haas (Austria), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. B. Karpuschewski (Germany), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. B. Katalinic (Austria), </translate></span>
              <span style="margin-right: 5px"><translate>Dr. M. Kliuev (Russia), </translate></span>
              <span style="margin-right: 5px"><translate>Dr. J. Koriath (Germany), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. P. Krajnik (Sweden), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. L. Kroll (Germany), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. B. Lauwers (Belgium),</translate></span>
              <span style="margin-right: 5px"><translate>Prof. G. Martinov (Bulgaria/Russia), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. A. Matsubara (Japan),</translate></span>
              <span style="margin-right: 5px"><translate>Prof. S. Melkote (USA), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. M. Monno (Italy), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. R. Neugebauer (Germany), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. J. Rech (France), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. M. Schenk (Germany), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. R. Schröter (Brasil), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. I. Smurov (Russia/France), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. R. Teti (Italy), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. A. Vasiliev (Russia), </translate></span>
              <span style="margin-right: 5px"><translate>Prof. T. Zaborowski (Poland)</translate></span>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Gallery from "@/components/gallery/Gallery";
export default {
  name: "organization",
  components: { Gallery },
  data() {
    return {
      images: [
        require("../assets/images/gallery/Image 5.png")
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.jumble {
  text-align: left;
  font: 600 64px/74px "Gotham Pro";
  letter-spacing: 0;
  color: #1a1a1a;
  opacity: 1;
  margin-top: 50px;
  margin-bottom: 50px;
  @media (max-width: 600px) {
    font-size: 40px;
  }
}
h5 {
  margin-bottom: 5px;
}
.text {
  font: 400 12px/22px Gotham Pro;
  letter-spacing: 0;
  margin: 0;
}
</style>
