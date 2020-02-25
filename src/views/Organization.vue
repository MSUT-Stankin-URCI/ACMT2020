<template>
  <div class="page">
    <div>
      <section class="relative gray-bg container">
        <h1 class="jumble">
          <translate>ОРГАНИЗАЦИЯ</translate>
        </h1>
        <gallery :images="images" style="margin-bottom: 50px"></gallery>
        <div class="flex wrap flex-between" style="margin-bottom:100px">
          <div class="col-4 col-sm-12">
            <div style="margin-bottom: 20px">
              <h5>
                <translate>Председатель конференции:</translate>
              </h5>
              <p class="text">
                <translate>Елена Катаева - ректор МГТУ "СТАНКИН"</translate>
              </p>
            </div>
            <div>
              <h5>
                <translate>Сопредседатели конференции:</translate>
              </h5>
              <p class="text">
                <translate>Проф. Андрей Кутин, МГТУ «СТАНКИН», Россия</translate><br />
                <translate>Проф. Конрад Вегенер, ETH Zürich, Швейцария</translate>
              </p>
            </div>
          </div>
          <div class="col-8 col-sm-12">
            <h5>
              <translate>Международный совет конференции:</translate>
            </h5>
            <p class="text">
              <translate>
                Prof. M. Bambach (Germany), Prof. F. Bleicher (Austria), Prof.
                A. Borovkov (Russia), Prof. Christian Brecher (Germany), Prof.
                E. Budak (Turkey), Prof. G. Byrne (Ireland), Prof. P.Dasic
                (Serbia), Prof. K. Droeder (Germany), Prof.W-G. Drossel
                (Germany), Prof. Ekorkmaz (Canada), Prof. K.Jemielniak (Poland),
                Prof. F.Grechnikov (Russia), Prof. F.Haas (Austria), Prof.
                B.Karpuschewski (Germany), Prof. B.Katalinic (Austria), Dr.
                M.Klyuev (Russia), Dr.J. Koriath (Germany), Prof. P. Krajnik
                (Sweden), Prof. L. Kroll (Germany), Prof. B. Lauwers (Belgium),
                Prof. G.Martinov (Bulgaria/Russia), Prof. A. Matsubara (Japan),
                Prof. S. Melkote (USA), Prof. M.Monno (Italy), Prof.
                R.Neugebauer (Germany), Prof. J. Rech (France), Prof. M.Schenk
                (Germany), Prof. R. Schröter (Brasil), Prof. I.Smurov
                (Russia/France), Prof. R.Teti (Italy), Prof. A. Vasiliev
                (Russia), Prof. T.Zaborowski (Poland)
              </translate>
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
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
