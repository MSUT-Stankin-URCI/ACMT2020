<template>
  <div class="page">
    <div class="flex wrap">
      <section class="col-6 col-sm-12">
        <div class="content-left">
          <h3 style="margin-bottom:50px">
            <div class="red-text">
              <translate>Темы*</translate>
            </div>
            <div>
              <translate>Конференции</translate>
            </div>
          </h3>
          <div class="themes">
            <ul style="margin-bottom: 25px">
              <li>
                <translate>Additive and hybrid technologies</translate>
              </li>
              <li>
                <translate>High-Performance and Hard Machining</translate>
              </li>
              <li>
                <translate>
                  Digital Twins of Machine Tools, Processes and Manufacturing
                  Systems
                </translate>
              </li>
              <li>
                <translate>
                  Precision, Ultra-Precision and Micro-Machining Processes
                </translate>
              </li>
              <li>
                <translate
                  >Non-Conventional Processes (Laser, EDM, ECM)</translate
                >
              </li>
              <li>
                <translate>Multiphysics and Multiscale Modelling</translate>
              </li>
              <li>
                <translate>CAD/CAM/CAE - systems</translate>
              </li>
              <li>
                <translate>Sensors and robotics</translate>
              </li>
              <li>
                <translate>Optimisation of Machining</translate>
              </li>
              <li>
                <translate>High-Precision Measurement</translate>
              </li>
              <li>
                <translate>Cyber-physical production systems</translate>
              </li>
              <li>
                <translate>Vision of the new manufacturing</translate>
              </li>
            </ul>
            <div class="hint">
              <translate
                >*Темы не ограничиваются перечисленным выше списком.</translate
              >
            </div>
          </div>
        </div>
      </section>
      <section class="col-6 col-sm-12 content-right">
        <div>
          <h3 style="margin-bottom:26px">
            <div class="light-text">
              <translate>Ключевые</translate>
            </div>
            <div>
              <translate>Спикеры</translate>
            </div>
          </h3>
          <div class="portraits">
            <div>
              <img
                class="face"
                src="../assets/images/program/neugebauer.jpg"
                alt="neugebauer"
              />
              <div>R. Neugebauer</div>
            </div>
            
            <div>
              <img
                class="face"
                src="../assets/images/program/rudskoy.jpg"
                alt="rudskoy"
              />
              <div>A. Rudskoy</div>
            </div>

            <div>
              <img
                class="face"
                src="../assets/images/program/wegеner.jpg"
                alt="wegеner"
              />
              <div>K. Wegener</div>
            </div>
          </div>
          <div class="themes">
            <p>
              <translate>Ключевыми спикерами конференции планируются:</translate>
            </p>
            <ul>
              <li>
                <translate>
                  Президент Фраунгоферского общества (Германия) проф. Р.Нойгебауер
                </translate>
              </li>

              <li>
                <translate>
                  Ректор Санкт-Петербургского политехнического университета Петра Великого академик РАН Рудской А.И.
                </translate>
              </li>

              <li>
                <translate>
                  Директор Института станков и технологий Высшей технической школы Цюриха проф. К.Вегенер
                </translate>
              </li>

              <li>
                <translate>
                  Руководители ведущих российских корпораций и предприятий (Роскосмос, Газпром, КАМАЗ).
                </translate>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "organization",
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
.jumble {
  text-align: left;
  font: 600 64px/74px "Gotham Pro";
  letter-spacing: 0;
  color: #1a1a1a;
  opacity: 1;
  margin-top: 50px;
  margin-bottom: 50px;
}
h5 {
  margin-bottom: 5px;
}
.text {
  font: 400 12px/22px Gotham Pro;
  letter-spacing: 0;
  margin: 0;
}
.content-left {
  margin-left: 130px;
  padding-top: 66px;
  padding-right: 20px;
  box-sizing: border-box;
  padding-bottom: 100px;
  @media (max-width: 600px) {
    margin-left: 0;
    padding: 66px 10px 0;
  }

  li {
    list-style: none;
    position: relative;
  }

  li::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 0.5em;
    width: 8px;
    height: 8px;
    background: #9c1022;
    border-radius: 50%;
    margin-right: 5px;
  }
}
.content-right {
  padding-left: 87px;
  padding-top: 150px;
  background: #1a1a1a;
  color: white;
  @media (max-width: 600px) {
    padding: 60px 10px 20px;
  }

  ul {
    width: 405px;
    @media (max-width: 600px) {
      width: auto;
    }
  }
  li {
    position: relative;
    margin-bottom: 20px;
    list-style: none;
  }
  li::before {
    content: "";
    position: absolute;
    left: -15px;
    top: 0.5em;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    margin-right: 5px;
  }
}
ul {
  margin: 0;
  padding: 0 0 0 18px;
}
li {
  margin: 0;
  padding: 0;
  font: 400 16px/26px "Gotham Pro";
  letter-spacing: 0;
}
.hint {
  text-align: left;
  font: 300 12px/26px "Gotham Pro";
  font-style: italic;
  letter-spacing: 0;
  color: #1a1a1a;
}
.portraits {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  max-width: 600px;
}
.portraits > div {
  padding-left: 20px;
  margin-left: -20px;
}
.face {
  display: block;
  overflow: hidden;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  padding: 20px;
}
</style>
