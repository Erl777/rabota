<template>
  <div class="root">
    <SecondHeader></SecondHeader>
    <main>
    <div class="container">
        <h1 class="cities_main_title">Поиск вакансий по Профессиям</h1>
        <form class="search search-form" action="/professions" method="get">
            <input type="text" class="home__form-input" name="search_text" value="">            <button type="submit" class="btn-red">
              <img class="search-img" src="../assets/icons/search.svg" alt="">
              </button>        
              </form>
        <img src="../assets/dotted_line.png" class="title__underline" alt="Пунктирная линия">
        <div class="container__parts">
            <div class="part">
                <div class="cities">
                    <ul>
                        <li v-for="(item, index) in professions" :key="index">
                          <a class="city" href="/vacancy/aviadispetcher"> {{item}} </a>
                        </li>
                            
                    </ul>
                </div>
                <img src="../assets/dotted_line.png" class="left__underline" alt="Пунктирная линия">
            </div>
            <div class="part">
                <div class="cities">
                    <ul>
                        <li v-for="(item, index) in professions" :key="index">
                          <a class="city" href="/vacancy/aviadispetcher"> {{item}} </a>
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
import SecondHeader from '@/components/secondHeader.vue'
import AppFooter from '@/components/appFooter.vue'
  export default {
    name: "professions",
    components: {
      SecondHeader,
      AppFooter
    },
     data() {
      return {
         professions: [
           'Авиадиспетчер',"Авиатехник", "Автослесарь", "Автоэлектрик", "Агроном", "Адвокат", "Администратор базы данных"
         ]
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
.home__form-input {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding-left: 25px;
    border: none;
    background-color: transparent; }
@media (max-width: 400px) {
    .home__form-input {
        width: 120px; } }

.search {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: 100px; }
@media (max-width: 998px) {
    .search {
        margin: 20px 0 0; } }
.search input {
    width: 300px;
    padding: 7px 40px 7px 10px;
    border: 1px solid #000000;
    border-radius: 15px; }
.search button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 0;
    border: none;
    border-radius: 15px;
    width: 32px;
    height: 32px;}
.search button:hover{
  cursor: pointer;
}
.search-form{
  width: 230px;
  margin-left: 0;
}
.search-img{
  width: 15px;
  height: 15px;
}
</style>