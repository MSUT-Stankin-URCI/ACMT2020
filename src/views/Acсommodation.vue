<template>
  <div class="page">
    <div class="container">
      <h4 class="accommodation-header">
        <translate>Уважаемые гости!</translate>
      </h4>

      <p><translate>Для участников конференции предусмотрен спецтариф при размещении на территории Кампуса бизнес-школы СКОЛКОВО.</translate></p>

      <p class="accommodation_text">
        <span><translate>Размещение в гостиничных одноместных номерах отелей 4* «Тянь-Шань», «Памир» - 7500 руб. (вместо 9800 руб.) вкл. НДС, фитнесс клуб с бассейном.</translate></span>
        <span><translate>Завтрак: 990 руб. по желанию.</translate></span>
        <span><translate>Данная цена предоставляется по промокоду "STANKIN", количество номеров ограничено.</translate></span>
      </p>

      <p><translate>За более подробной информацией и заявкой на размещение необходимо обращаться в службу бронирования гостиниц:</translate></p>

      <p>
        <translate>Телефон</translate>: <a
          href="tel:+74993460108"
          style="color: rgb(156, 16, 34); text-decoration: none;"
        >+7 (499) 346 0108</a>
      </p>

      <p>
        Е-mail: <a
          href="mailto:hotelreservation@skolkovo.ru"
          style="color: rgb(156, 16, 34); text-decoration: none;"
        >hotelreservation@skolkovo.ru</a>
      </p>

      <h4 class="accommodation-header">
        <translate>Гостиница "Тянь-Шань"</translate>
      </h4>

      <div class="accommodation-images">
        <img
          class="accommodation-images_img"
          src="../assets/images/hotels/hotel_1_1.png"
        >
        <img
          class="accommodation-images_img"
          src="../assets/images/hotels/hotel_1_2.png"
        >
      </div>
            
      <h4 class="accommodation-header">
        <translate>Гостиница "Памир"</translate>
      </h4>

      <div class="accommodation-images">
        <img
          class="accommodation-images_img"
          src="../assets/images/hotels/hotel_2_1.png"
        >
        <img
          class="accommodation-images_img"
          src="../assets/images/hotels/hotel_2_2.png"
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
    .accommodation {
        &-header {
            margin-bottom: 20px;
        }
        &_text {
            span {
                display: block;
                margin-bottom: 5px;
            }
        }

        &-images {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 20px;

            &_img {
                margin: 0px 20px 20px 0px;
                border-radius: 3px;
                max-width: 100%;
            }
        }

    }
</style>