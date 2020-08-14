<template>
  <div class="home">

    <div class="home__top">
      <img src="../assets/logo-main_blue.png" alt="Логотип rabota.today" role="presentation"/>
      <ul class="main-menu">
        <li>Найти резюме</li>
        <li>Найти резюме</li>
        <li>Найти резюме</li>
        <li>Найти резюме</li>
      </ul>
      <img class="exit-logo" src="../assets/icons/icon_exit.svg" alt="">
    </div>

    <div class="home__header-container">

      <div class="home__header">

        <div class="home__header-content">
            <div class="home__header-content-search">
                <span class="nhome__form-text">
                  Сейчас на сайте свыше
                  <a href="/resume" class="white-text"> 2398 вакансий </a>
                  <a href="/vacancy" class="white-text"> 3483 резюме </a>
                </span>
                <form class="home__form" action="/vacancy" method="get">                    
                  <input name="search_text" class="nhome__form-input" placeholder="Я ищу..." type="text">
                  <button type="submit" class="nhome__search btn-red"><i class="fa fa-search"></i></button>                    
                </form>                    
                <a class="btn btn-red mr20" href="/resume">разместить резюме</a>
                <a class="btn btn-red" href="/vacancy">найти вакансии</a>
            </div>
        </div>
        <h1 class="home__title">
          работа  
        </h1>      
        <div class="home__header-bottom">

        </div>
        <img class="nhome__main-gerb" src="../assets/gerb-doneck-z1.png" alt="Герб Донецка" role="presentation"/>
        <img class="nhome__main-big-circle" src="../assets/semicircle_bg.png" alt="Круг" role="presentation">
        <img class="nhome__main-bottom-img" src="../assets/img1.png" alt="Офисный стул" role="presentation">
        <img class="home__header-dots" src="../assets/bg-dots2.png" alt="" role="presentation">
              
      </div>

      <div class="slider-vertical">

        <hooper :settings="hooperSettings" style="height: 100%">
          <slide>
            <div class="slide">
              <img src="../assets/slider_vertical/1.png" alt="">
              <p>
                <a href="/vacancy">120 вакансий</a> 
                компании
              </p>
            </div>
          </slide>
          <slide>
            <div class="slide">
              <img src="../assets/slider_vertical/1.png" alt="">
              <p>
                <a href="/vacancy">120 вакансий</a> 
                компании
              </p>
            </div>
          </slide>
          <slide>
            <div class="slide">
              <img src="../assets/slider_vertical/1.png" alt="">
              <p>
                <a href="/vacancy">120 вакансий</a> 
                компании
              </p>
            </div>
          </slide>
        </hooper>

      </div>

    </div>

    <div class="home__daily-vacancies">

      <h3 class="title">
          Вакансии дня
      </h3>

      <div class="slider-container horizontal">

        <div class="slider-horizontal">

          <hooper :settings="hooperHorizontalSettings">
            <slide>
            <div class="single-card home-card">
              <div class="single-card__tr">
              </div>
              <div class="single-card__header">
                  <img src="../assets/categories/rabochie-specialnosti.svg" alt="Логотип " role="presentation">
                  <div class="single-card__top">
                      <div class="single-card__cat-city">
                          <a class="btn-card btn-card-small btn-gray" href="/vacancy/rabochie-specialnosti">
                              Рабочие специальности                                </a>
                                                              <a class="d-flex align-items-center home-city" href="/vacancy/makeevka">
                                  <img class="single-card__icon" src="../assets/arr-place.png" alt="Стрелка" role="presentation">
                                  <span class="ml5">Макеевка</span>
                              </a>
                                                      </div>
                      <a href="/vacancy/view/2808" class="single-card__title" title="Дозировщик компонентов бетонных смесей" >Дозировщик компонентов бетонных смесей</a>
                      <div class="single-card__info-second">
                          <span class="mr10">Добавлено: 20.07.2020, 11:51</span>
                                                              <div class="single-card__view">
                                  <img class="single-card__icon mr5" src="../assets/icon-eye.png" alt="иконка глаз" role="presentation">
                                  <span>281</span>
                              </div>
                      </div>
                  </div>
              </div>
              <div class="single-card__info">
                <p>Полная занятость.</p>
                <p>Государственному предприятию г. Макеевки (Советский район, пос. Объединенный) на...</p>
              </div>
              <div class="d-flex flex-wrap align-items-center justify-content-start">
                  <a class="btn-card btn-red jsVacancyModal">Откликнуться</a>
                  <button class="single-card__favourite"> 
                    <img src="../assets/icons/heart.png" alt="">
                    В избранное
                  </button>
              </div>
              <button class="single-card__close-btn">
                <div class="single-card__close-cross">
                <span></span>
                <span></span>
              </div>
              </button>
              
            </div>
            </slide>
          </hooper>

        </div>

      </div>
    </div>    

    

  </div>
</template>

<script>
  // @ is an alias to /src
  
  import { Hooper, Slide } from 'hooper';
  import 'hooper/dist/hooper.css';


  export default {
    name: 'Home',
    data() {
      return {
        hooperSettings: {
          itemsToShow: 4,
          itemsToSlide: 1,
          vertical: true,
          autoPlay: false,
          playSpeed: 3000,
          infiniteScroll: true
        },
        hooperHorizontalSettings: {
          itemsToShow: 3,
          itemsToSlide: 1,
          // vertical: true,
          autoPlay: false,
          playSpeed: 3000,
          infiniteScroll: true
        }
      }
    },
    mounted() {

    },
    components: {
      Hooper,
      Slide,
    },
    methods: {

    }
  }

</script>

<style scoped>
  .home{
    background-color: #f8f8f8;
  }
  a{
    text-decoration: none;
  }

  p{
    margin: 0;
  }

  ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  img{
    pointer-events: none;
  }

  button{
    outline: none;
    border: none;
    background-color: transparent;
    padding: 0;
  }

  button:hover{
    cursor: pointer;
  }

  .home__top{
    width: 55%;
    display: flex;
    align-items: center;
    margin-left: 16%;
    justify-content: space-between;
    padding-top: 36px;
    margin-bottom: 45px;
  }

  .main-menu{
    display: flex;
    width: 57.6%;
    justify-content: space-between;
    align-self: flex-end;
  }

  .main-menu li{
    color: #d43a30;
    font-size: 16px;
  }

  .exit-logo{
    align-self: flex-end;
  }

  .home__header{
    position: relative;
    width: 74%;
    /* height: 400px; */
    background-color: #0253a3;
    border-radius: 0 33px 0 0;
    padding-top: 80px;
  }

  .home__header-content{
    position: relative;
    margin-left: 15%;
  }

  .nhome__form-input {
    position: relative;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    padding-left: 25px;
    border: none;
    background-color: transparent;
  }

  @media (max-width: 400px) {
    .nhome__form-input {
      width: 120px;
    }
  }

  .home__form {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 40px;
    width: 540px;
    /* margin: 8px 70px 8px auto; */
    background-color: #fff;
    border-radius: 20px;
    margin-right: 68px;
  }

  .home__form:before {
    position: absolute;
    content: '';
    top: -8px;
    left: -8px;
    bottom: -8px;
    right: -8px;
    border: 1px solid #fff;
    border-radius: 28px;
    opacity: .1;
}

  .nhome__search {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 51px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }

  .nhome__search img{
    width: 15px;
    height: 15px;
  }

  .home__header-content-search{
    display: flex;
    align-items: center;
  }

  .nhome__form-text{
    position: absolute;
    left: 23px;
    top: -5px;
    transform: translateY(-100%);
    color: #ffffff;
    font-size: 17px;
  }

  .white-text{
    text-decoration: underline;
    font-weight: 700;
    color: #ffffff;
  }

  .home__title{
    color: #ffffff;
    font-size: 270px;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0;
    text-align: left;
    margin-left: 12.25%;
    margin-top: 15px;
  }

  .home__header-bottom{
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    height: 221px;
    width: calc(100% + 30px);
    /* margin-right: -30px; */
    color: #fff;
    background-color: #0253a3;
    border-radius: 0 0 33px 0;
    -webkit-box-shadow: -9px 10px 29px 6px rgba(105,105,105,.24);
    box-shadow: -9px 10px 29px 6px rgba(105,105,105,.24);
  }

  .nhome__main-big-circle {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 192px;
    min-height: 430px;
    z-index: 3;
}

.nhome__main-gerb {
    position: absolute;
    width: 228px;
    bottom: 0;
    left: -66px;
    z-index: 4;
}

.nhome__main-bottom-img {
    position: absolute;
    width: 315px;
    height: 255px;
    bottom: 10px;
    right: 0;
    z-index: 5;
    transform: translateX(30%);
}

.home__header-dots{
  position: absolute;
  left: -170px;
  bottom: -98px;
}

.home__header-container{
  display: flex;
}

.slider-vertical{
  /* width: 26%; */
  width: 19.5%;
  margin-left: 6.5%;
  max-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider-vertical .slide{
  max-width: 268px;
}

.slider-vertical .slide > img{
  max-width: 268px;
  height: 60px;
  object-fit: contain;
}

.slider-vertical p {
  text-align: right;
  font-size: 12px;
  margin-right: -20px;
}

.home__daily-vacancies{
  position: relative;
}

.home-card {
    width: 90%;
    max-width: 495px;
    min-height: 200px !important;
    margin: 15px 10px 0 !important;
    margin-left: 43px !important; }
@media (max-width: 1500px) {
    .home-card {
        margin-left: 33px !important; } }
@media (max-width: 575px) {
    .home-card {
        width: auto;
        margin-left: 0 !important;
        margin-right: 0 !important; } }
.home-card .single-card__tr {
    left: 50px; }
.home-card .single-card__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%; }
@media (max-width: 375px) {
    .home-card .single-card__header {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start; } }
.home-card .single-card__header > img {
    max-width: 70px;
    max-height: 40px;
    width: auto;
    height: auto;
    margin-right: 18px; }
@media (max-width: 375px) {
    .home-card .single-card__header > img {
        margin: 0 auto 10px; } }
.home-card .single-card__cat-city {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
.home-card .single-card__cat-city a:first-child {
    border-radius: 10px; }
.home-card .single-card__cat-city a:last-child {
    margin-left: 10px;
    font-size: 10px;
    text-decoration: none; }
.home-card .single-card__cat-city .home-city {
    color: #a8a8a8;
}
.home-card .single-card__title {
    display: block;
    width: 280px;
    margin: 15px 0 0;
    font-size: 16px;
    color: #2a2a2a;
    font-weight: 800;
    text-decoration: none; }
@media (max-width: 1500px) {
    .home-card .single-card__title {
        width: 210px; } }
.home-card .single-card__info {
    font-size: 12px;
    letter-spacing: 0.5px;
    margin: auto 0; }
.home-card .single-card__info p {
    color: #2a2a2a;
    font-weight: 400;
    line-height: 1.4; }
.home-card .btn-red {
    border-radius: 11px;
    padding: 6px 40px 5px; }
.home-card .single-card__like {
    margin-left: 16px; }

.single-card {
    position: relative;
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: calc(100% - 20px);
    min-height: 210px;
    margin: 15px 10px;
    padding: 20px 55px 10px 25px;
    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    background-color: #fff; }
@media (max-width: 993px) {
    .single-card {
        margin-left: 5px;
        margin-right: 0;
        padding: 20px; } }
@media (max-width: 575px) {
    .single-card {
        -webkit-box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.15);
        box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.15); } }
@media (max-width: 375px) {
    .single-card {
        padding: 20px 10px; } }
.single-card__title {
    max-width: 555px;
    font-size: 15px;
    font-weight: 700;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden; }
.single-card__info {
    font-size: 11px; }
.single-card__close-btn{
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 7px;
  height: 7px;
  padding: 0;
  right: 24px;
  top: 40px;
}
.single-card__close-btn:hover{
  cursor: pointer;
}
.single-card__close-cross{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.single-card__close-cross span{
  display: block;
  width: 100%;
  height: 1px;
  background-color: #a6a6a6;
}
.single-card__close-cross span:first-child{
  position: absolute;
  transform: rotate(45deg);
}
.single-card__close-cross span:last-child{
  transform: rotate(-45deg);
}
.single-card__info p {
    margin: 0;
    line-height: 1.8;
    text-align: left; }
.single-card__info-second {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #a8a8a8;
    letter-spacing: 0.33px;
    font-size: 10px;
    font-weight: 500; }
.single-card__info-second a {
    text-decoration: none;
    color: inherit; }
.single-card__like {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: auto;
    color: #a8a8a8;
    font-size: 11px;
    letter-spacing: 0.43px;
    font-weight: 500;
    text-decoration: none; }
.single-card__like:hover {
    color: #dd3d34; }
.single-card__like .fa-heart-o {
    margin-right: 5px;
    font-size: 13px; }
.single-card__view {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 5px 0; }
.single-card__icon {
    max-width: 13px; }
.single-card__tr {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 100%;
    right: 90px;
    overflow: hidden; }
.single-card__tr:before {
    width: 50%;
    height: 50%;
    position: absolute;
    bottom: 0;
    content: '';
    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    background-color: #fff;
    -webkit-transform: translateY(50%) rotate(45deg);
    -ms-transform: translateY(50%) rotate(45deg);
    transform: translateY(50%) rotate(45deg); }
.single-card__favourite{
  display: flex;
  align-items: center;
  font-size: 11px;
  color: #a6a6a6;
  font-weight: 400;
  margin-left: 20px;
}
.single-card__favourite img{
  margin-right: 5px;
}

.btn-card {
    display: inline-block;
    padding: 7px 15px 5px;
    font-weight: 500;
    font-size: 11px;
    color: white;
    text-decoration: none;
    letter-spacing: 0.43px;
    background-color: transparent;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease; }
.btn-card-small {
    padding: 4px 10px 3px; }
.btn-gray {
    color: #ffffff;
    background-color: #a8a8a8;
    border-radius: 10px; }
.btn-gray:hover {
    color: #ffffff;
    background-color: #757575; }

.slider-container{
  position: relative;
}
.slider-horizontal{
  margin: 0 4% 0 10%;
}
</style>
