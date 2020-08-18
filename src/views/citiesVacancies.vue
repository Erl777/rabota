<template>

  <div class="root">
    <secondHeader></secondHeader>
    <main>
        <div class="container">
        <h1 class="cities_main_title">Вакансии по городам</h1>
        <img src="../assets/dotted_line.png" class="title__underline" alt="Пунктирная линия">

        <div class="container__parts">

            <div class="part jsCitiesBtn">
                <div class="part__head">
                    <div class="part__head-logo">
                        <img class="part__head-logo-circle" src="../assets/cities_circle.png" alt="">
                        <img class="part__head-logo-blazon" src="../assets/cities_dnr.png" alt="">
                    </div>
                    <p class="part__head-text"><a href="/vacancy/dnr">Вакансии ДНР</a> <span>(Донецкая Народная Республика)</span></p>
                </div>
                <div class="cities">

                    <ul >
                        <li v-for="(item, index) in cities.dnr" :key="index">
                            <a class="city" href="/vacancy/gorlovka"> {{item}} </a>
                        </li>
                    </ul>

                </div>

                <img src="../assets/dotted_line.png" class="left__underline" alt="Пунктирная линия">

            </div>

            <div class="part jsCitiesBtn">
                <div class="part__head">
                    <div class="part__head-logo">
                        <img class="part__head-logo-circle" src="../assets/cities_circle.png" alt="">
                        <img class="part__head-logo-blazon" src="../assets/cities_lnr.png" alt="">
                    </div>
                    <p class="part__head-text"><a href="/vacancy/lnr">Вакансии ЛНР</a> <span>(Луганская Народная Республика)</span></p>
                </div>
                <div class="cities">

                    <ul>
                        <li v-for="(item, index) in cities.lnr" :key="index">
                            <a class="city" href="#"> {{item}} </a>
                        </li>
                    </ul>

                </div>

                <img src="../assets/dotted_line.png" class="right__underline" alt="Пунктирная линия">

            </div>

        </div>


    </div>


    </main>
    <AppFooter></AppFooter>
  </div>

</template>

<script>
import secondHeader from '@/components/secondHeader.vue'
import AppFooter from '@/components/appFooter.vue'
  export default {
    name: "singleVacancy",
    components: {
      secondHeader,
      AppFooter
    },
     data() {
      return {
         cities: {
             dnr: [
                "Горловка", "Дебальцево", "Донецк", "Енакиево", "Макеевка", "Снежное", "Торез", "Харцызк", "Шахтерск", "Ясиноватая", "Амвросиевка", "Седово", "Ждановка", "Новоазовск"
             ],
             lnr: [
                 "Алчевск", "Антрацит", "Брянка", "Луганск", "Свердловск", "Стаханов"
             ]
         }
      }
    },
  }
</script>

<style scoped>
.cities_main_title{
    color: #060c3e;
    font-family: Montserrat, sans-serif;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 15px;
    text-align: center;
    margin-bottom: 0;
}
.title__underline{
    display: block;
    margin: 5px auto 20px;
}
.container__parts{
    display: flex;
    margin-top: 10px;
}
.container__parts .part{
    width: 48%;
}

.container__parts .part:last-child{
    margin-left: 4%;
}

.container__parts .part__head {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.container__parts .part__head-logo {
    position: relative;
}

.container__parts .part__head-logo-circle {
    position: relative;
    z-index: 1;
}

.container__parts .part__head-logo-blazon {
    position: absolute;
    top: 29px;
    left: 40px;
    width: 60px;
    height: auto;
    z-index: 2;
}

.container__parts .part__head-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0 0 29px;
    color: #0f0000;
    font-size: 15px;
}

.container__parts .part__head-text a {
    font-weight: 700;
}

.container__parts .part__head-text span {
    font-weight: 500;
}

.cities{
    display: flex;
    text-align: left;
}

.cities ul {
    list-style-type: none;
    padding-left: 17px;
    margin: 0;
    box-sizing: border-box;
    /*width: calc(100% / 3);*/
    width: 100%;
    column-count: 3;
}

.cities ul li {
    margin-bottom: 5%;
}

.city{
    text-decoration: none;
    color: black;
    font-family: "Muller-Medium", sans-serif;
    font-size: 14px;
    font-weight: 400;
}

.city:hover{
    text-decoration: underline;
}

.left__underline{
    margin-left: auto;
    margin-top: 10%;
    display: block;
    margin-right: 10%;
}

.right__underline{
    margin-left: 0;
    margin-top: 10%;
    display: block;
}
</style>
