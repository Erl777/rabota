<template>
  <div class="root">

    <header class="header-wrap jsHeaderIndex">
      <img class="header-wrap__bg" src="../assets/bg_header_vacancies.jpeg" alt="Фоновое изображение">
      <img class="header-wrap__emblem" src="../assets/img2.png" alt="Фоновая эмблема" role="presentation">
      <div class="container">
        <div class="header">
          <div class="home__main-top">
            <div class="home__main-header">
              <button class="mobile-nav-btn jsOpenNavMenu">
                <img src="../assets/menu.png" alt="Мобильное меню" role="presentation">
              </button>
              <div class="filter-overlay nav-overlay jsNavOverlay">
              </div>
              <nav class="home__nav jsNavMenu">
                <a class="home__nav-item home__nav-item_logo" href="/">
                  <img src="../assets/logo-main.png" alt="Логотип rabota.today" role="presentation">
                  <img src="../assets/logo_mob.png" alt="Логотип rabota.today" role="presentation">
                </a>
                <a class="home__nav-item border-top-header" href="/resume">Резюме</a>
                <a class="home__nav-item border-top-header" href="/vacancy">Вакансии</a>
                <button class="home__nav-item jsLogin">
                  Вход
                </button>

              </nav>
              <div class="home__main-email align-items-center"><span class="home__main-ico">@</span><a href="mailto:info@rabota.today">info@rabota.today</a>
              </div>
              <a class="home__mobile-logo" href="/">
                <img src="../assets/logo-main.png" alt="Логотип rabota.today" role="presentation">
              </a>
            </div>
            <div class="home__main-content">
              <form class="home__form" action="/vacancy" method="get">                    <input name="search_text" class="home__form-input" placeholder="Я ищу..." type="text">
                <button type="submit" class="home__search btn-red">
                  <img src="../assets/icons/search.svg" alt="">
                </button>
              </form>
              <a class="btn btn-red mr20" href="/personal-area/add-resume">разместить резюме</a>
              <a class="btn btn-red" href="/personal-area/add-vacancy">создать вакансию</a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="all-block all-resume">
      <img class="all-block__dots2" src="../assets/bg-dots.png" alt="Точки" role="presentation">
      <div class="all-block__circle">
      </div>
      <div class="all-block__content">
        <button class="filter-btn jsShowFilter">Фильтр
        </button>
        <div class="container">
          <div class="v-content-top">
            <div class="home__aside-header">
              <h1 class="resume__title">Резюме соискателей - Подбор персонала </h1>
              <div class="search"><input type="text" placeholder="Поиск" name="resume_search_text">
                <button id="search" class="btn-red"><img src="../assets/icons/search.svg" alt="">
                </button>
              </div>
            </div>
          </div>
          <div class="v-content-bottom container-for-sidebar" style="position: relative;">
            <div class="filter-overlay jsFilterOverlay">
            </div>
            <div class="v-content-bottom__left sidebar jsOpenFilter" id="sidebar" style="">
              <button class="vl-btn btn-card btn-red jsAccept btn-accept jsAcceptScrollFixed" style="">Применить</button>
              <div class="filter-close jsHideFilter"><span></span><span></span>
              </div>
              <div class="sidebar-inner" style="position: relative; transform: translate3d(0px, 0px, 0px);">
                <div class="vl-block">

                  <multiselect
                    v-model="multiSelectValue"
                    tag-placeholder="Add this as new tag"
                    placeholder="Выберите навыки"
                    label="name" track-by="code"
                    :options="multiSelectOptions"
                    :multiple="true"
                    :taggable="true"
                    @tag="addTag">
                  </multiselect>

                </div>
                <div class="vl-block">

                  <multiselect
                    v-model="singleSelectValue"
                    :options="singleSelectOptions"
                    :searchable="true"
                    :close-on-select="false"
                    :show-labels="false"
                    placeholder="Выберите город"></multiselect>

                </div>

                <div class="vl-block">
                  <div class="vl-block__head jsOpenCheck open-services-mob"
                            @click="experienceShow = !experienceShow"
                  >
                    <p>Требуемый опыт
                    </p>
                    <span class="jsBtnPlus" v-show="!experienceShow">+</span>
                    <span class="jsBtnMinus btn-active" v-show="experienceShow">-</span>
                  </div>
                  <div class="vl-block__check jsCheckBlock" v-show="experienceShow">

                    <label class="checkbox" v-for="(item, index) in experience" :key="'exp' + index">
                      <input type="checkbox" name="experience"
                             :data-id="index"
                             :value="item.value"
                             v-model="checkedElements"
                      >
                      <span class="checkbox__text">{{item.value}}</span>
                    </label>

                  </div>
                </div>

                <div class="vl-block">
                  <div class="vl-block__head jsOpenCheck open-services-mob"
                       @click="categoriesShow = !categoriesShow"
                  >
                    <p>Категория
                    </p>
                    <span class="jsBtnPlus" v-show="!categoriesShow">+</span>
                    <span class="jsBtnMinus btn-active" v-show="categoriesShow">-</span>
                  </div>
                  <div class="vl-block__check jsCheckBlock" v-show="categoriesShow">

                    <label class="checkbox" v-for="(item, index) in categories" :key="'category' + index">
                      <input type="checkbox" name="experience"
                             :data-id="index"
                             :value="item.value"
                             v-model="checkedElements"
                      >
                      <span class="checkbox__text">{{item.value}}</span>
                    </label>

                  </div>
                </div>

                <div class="vl-block">
                  <div class="vl-block__head open-services-mob"
                       @click="employmentTypeShow = !employmentTypeShow"
                  >
                    <p>Вид занятости
                    </p>
                    <span class="jsBtnPlus" v-show="!employmentTypeShow">+</span>
                    <span class="jsBtnMinus btn-active" v-show="employmentTypeShow">-</span>
                  </div>
                  <div class="vl-block__check jsCheckBlock" v-show="employmentTypeShow">

                    <label class="checkbox" v-for="(item, index) in employmentType" :key="'employmentType' + index">
                      <input type="checkbox" name="experience"
                             :data-id="index"
                             :value="item.value"
                             v-model="checkedElements"
                      >
                      <span class="checkbox__text">{{item.value}}</span>
                    </label>

                  </div>
                </div>

                <div class="vl-block no-border">
                  <div class="vl-block__head open-services-mob"
                       @click="paymentShow = !paymentShow"
                  >
                    <p>Зарплата</p>
                    <span class="jsBtnPlus" v-show="!paymentShow">+</span>
                    <span class="jsBtnMinus btn-active" v-show="paymentShow">-</span>
                  </div>
                  <div class="vl-block__inputs jsCheckBlock" v-show="paymentShow">
                    <input type="text" name="min_salary" value="" v-model="minSalary">
                    <input type="text" name="max_salary" value="" v-model="maxSalary">
                  </div>
                </div>

                <button class="vl-btn btn-card btn-red jsAccept jsAcceptScroll">Применить
                </button>
                <div dir="ltr" class="resize-sensor" style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div class="resize-sensor-expand" style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 285px; height: 459px;"></div></div><div class="resize-sensor-shrink" style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 200%; height: 200%;"></div></div></div></div>
            </div>
            <div class="v-content-bottom__center scroll">

              <div class="single-card-resume" v-for="(item, index) in resume" :key="'resume' + index">
                <div class="single-card-resume__top">
                  <img class="single-card-resume__left-img" :src="item.imgSrc" alt="Фото Филипсонов Дмитрий" role="presentation">
                  <div class="single-card-resume__top-left">
                    <div class="single-card-resume__head">
                      <h3>
                        <a href="/resume/view/190">
                          {{item.head}}
                        </a>
                      </h3>
                    </div>
                    <span class="single-card-resume__price">
                        {{item.price}}
                    </span>
                    <p class="single-card-resume__name">
                      {{item.name}}                                                                                                                                  · Донецк                                                                                    </p>
                    <p class="single-card-resume__last-work">
                      Последнее место работы
                    </p>
                    <p class="single-card-resume__name-work">
                      {{item.lastWork}}
                    </p>
                    <p class="single-card-resume__date-work">
                      {{item.dateWork}}                                                                                                                              </p>
                    <p class="single-card-resume__last-check">
                      {{item.lastCheck}}
                    </p>
                  </div>
                </div>
                <div class="single-card-resume__bottom">
                </div>
              </div>

              <ul class="search-pagination"><li class="first disabled"><span>&lt;&lt;</span></li>
                <li class="prev disabled"><span>&lt;</span></li>
                <li class="active"><a href="/resume?page=1" data-page="0">1</a></li>
                <li><a href="/resume?page=2" data-page="1">2</a></li>
                <li><a href="/resume?page=3" data-page="2">3</a></li>
                <li><a href="/resume?page=4" data-page="3">4</a></li>
                <li><a href="/resume?page=5" data-page="4">5</a></li>
                <li class="next"><a href="/resume?page=2" data-page="1">&gt;</a></li>
                <li class="last"><a href="/resume?page=16" data-page="15">&gt;&gt;</a></li></ul>                                    </div>
            <div dir="ltr" class="resize-sensor" style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div class="resize-sensor-expand" style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 1120px; height: 2731px;"></div></div><div class="resize-sensor-shrink" style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 200%; height: 200%;"></div></div></div></div>
        </div>
      </div>
    </section>    <footer class="footer">
    <a class="footer__craft-link" href="https://web-artcraft.com/" target="_blank" rel="nofollow">Разработано CraftGroup</a>
  </footer>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  export default {
    name: "resume",
    components: {
      Multiselect
    },
    data() {
      return {
        experienceShow: false,
        categoriesShow: false,
        employmentTypeShow: false,
        paymentShow: false,
        minSalary: '',
        maxSalary: '',
        experience: [
          {value: 'Без опыта работы'},
          {value: 'от 1 года'},
          {value: 'от 3 лет'},
          {value: 'от 5 лет'}
        ],
        categories: [
          {value: 'IT, компьютеры, интернет '},
          {value: 'Администрация, руководство'},
          {value: 'Бухгалтерия, аудит'}
        ],
        employmentType: [
          {value: 'Удаленная работа'},
          {value: 'Полная занятость'},
          {value: 'Неполная занятость'}
        ],
        checkedElements:[],
        // Multiselect
        multiSelectValue: [

        ],
        multiSelectOptions: [
          { name: 'Vue.js', code: 'vu' },
          { name: 'Javascript', code: 'js' },
          { name: 'Open Source', code: 'os' }
        ],
        // singleSelect
        singleSelectValue: '',
        singleSelectOptions: ['Донецк', 'Макеевка', 'Горловка',],
        // Users
        resume: [
          {imgSrc: 'face1.jpg', head: 'Инженер-Конструктор. (Cad-Дизайнер) ', price: 'По договоренности', name: 'Филипсонов Дмитрий · Донецк',
            lastWork: ' Конструктор, ГП "ДонПКТИ" ', dateWork: 'Сентябрь 2018', lastCheck: 'Обновлено 17.06.2020'},
          {imgSrc: 'face1.jpg', head: 'Инженер-Конструктор. (Cad-Дизайнер) ', price: 'По договоренности', name: 'Филипсонов Дмитрий · Донецк',
            lastWork: ' Конструктор, ГП "ДонПКТИ" ', dateWork: 'Сентябрь 2018', lastCheck: 'Обновлено 17.06.2020'},
          {imgSrc: 'face1.jpg', head: 'Инженер-Конструктор. (Cad-Дизайнер) ', price: 'По договоренности', name: 'Филипсонов Дмитрий · Донецк',
            lastWork: ' Конструктор, ГП "ДонПКТИ" ', dateWork: 'Сентябрь 2018', lastCheck: 'Обновлено 17.06.2020'},
        ]
      }
    },
    methods: {
      addTag (newTag) {
        const tag = {
          name: newTag,
          code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        }
        this.options.push(tag);
        this.value.push(tag);
      },
      nameWithLang ({ name, language }) {
        return `${name} — [${language}]`
      }
    }
  }
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style scoped>

  #search{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #search img{
    width: 15px;
    height: 15px;
  }

  .header-wrap {
    position: relative;
    background: #243b9b;
    z-index: 8; }
  @media (max-width: 993px) {
    .header-wrap {
      overflow: hidden; } }
  .header-wrap__dots {
    position: absolute;
    bottom: -35px;
    right: 60px;
    z-index: 1; }
  @media (max-width: 993px) {
    .header-wrap__dots {
      display: none; } }
  .header-wrap__bg {
    position: absolute;
    opacity: 0.35;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover; }
  .header-wrap__emblem {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 250px;
    height: auto; }
  @media (max-width: 1300px) {
    .header-wrap__emblem {
      width: 150px; } }
  @media (max-width: 993px) {
    .header-wrap__emblem {
      right: -40px; } }

  .all-block {
    position: relative;
    background-color: #f8f8f8; }
  .all-block__dots2 {
    position: absolute;
    bottom: 0;
    left: 70px; }
  @media (max-width: 769px) {
    .all-block__dots2 {
      display: none; } }
  .all-block__circle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background-color: #dd3d34;
    border-radius: 0 100% 0 0 / 100% 100% 0 0;
    z-index: 0; }
  @media (max-width: 769px) {
    .all-block__circle {
      width: 100px;
      height: 100px; } }

  .all-resume {
    display: block; }

  .footer {
    position: absolute;
    bottom: 0;
    left: 55%;
    margin: 1em;
    width: 30%;
    display: block; }
  .footer__craft-link {
    position: relative;
    text-decoration: none;
    color: #ff0200 !important;
    font-size: 12px;
    padding-left: 25px;
    margin-left: 5px; }
  @media (max-width: 699px) {
    .footer__craft-link {
      display: block;
      line-height: 0.9; } }
  .footer__craft-link:before {
    content: "";
    position: absolute;
    left: 0;
    top: -2px;
    height: 20px;
    width: 20px;
    background: url("../assets/craft-red.png") no-repeat 50%;
    background-size: contain; }
  @media (max-width: 993px) {
    .footer__craft-link {
      font-size: 10px; } }

  .home__main-top {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: calc(100% - 290px);
    padding-top: 40px;
    background-color: #243b9b;
    border-radius: 33px 0 0; }
  @media (max-width: 1750px) {
    .home__main-top {
      height: calc(100% - 255px); } }
  @media (max-width: 993px) {
    .home__main-top {
      border-radius: 0; } }
  /*.home__main-top:before {*/
  /*  position: absolute;*/
  /*  content: '';*/
  /*  top: 0;*/
  /*  bottom: 0;*/
  /*  left: 0;*/
  /*  right: 0;*/
  /*  opacity: 0.65;*/
  /*  !*background: url(../images/bg.png) no-repeat;*!*/
  /*  background-size: cover; }*/
  .home__main-header {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    letter-spacing: 0.17px;
    font-size: 14px;
    font-weight: 800;
    color: #ffffff; }
  @media (max-width: 1350px) {
    .home__main-header {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      margin-bottom: 40px;
    } }
  @media (max-width: 993px) {
    .home__main-header {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center; } }
  .home__main-header a {
    color: inherit;
    text-decoration: none; }
  .home__main-header a:hover {
    color: #dd3d34; }
  .home__main-ico {
    margin-right: 10px;
    color: #dd3d34;
    font-size: 18px; }
  .home__main-email {
    margin-right: 50px; }
  /*@media (max-width: 1350px) {*/
  /*    .home__main-email {*/
  /*        margin-left: 50px; } }*/
  @media (max-width: 993px) {
    .home__main-email {
      margin-left: 0; } }
  @media (max-width: 420px) {
    .home__main-email {
      width: 100%;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      margin: 0 auto 20px; } }
  .home__main-circle {
    width: 150px;
    height: 150px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: #dd3d34;
    border-bottom-left-radius: 100%; }
  @media (max-width: 1450px) {
    .home__main-circle {
      right: -100px; } }
  @media (max-width: 769px) {
    .home__main-circle {
      display: none; } }
  .home__main-bottom {
    position: relative;
    height: 320px;
    margin-left: -60px;
    margin-top: -50px;
    color: #ffffff;
    background-color: #0253a3;
    border-radius: 0 0 0 33px;
    -webkit-box-shadow: -9px 10px 29px 6px rgba(105, 105, 105, 0.24);
    box-shadow: -9px 10px 29px 6px rgba(105, 105, 105, 0.24); }
  @media (max-width: 1750px) {
    .home__main-bottom {
      height: 270px; } }
  @media (max-width: 993px) {
    .home__main-bottom {
      margin-left: 0;
      border-radius: 0; } }
  @media (max-width: 576px) {
    .home__main-bottom {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center; } }
  @media (max-width: 375px) {
    .home__main-bottom {
      height: 320px; } }
  .home__main-bottom-img {
    position: absolute;
    top: -25px;
    left: -50px;
    z-index: 2; }
  @media (max-width: 1750px) {
    .home__main-bottom-img {
      width: 200px;
      height: auto; } }
  @media (max-width: 1200px) {
    .home__main-bottom-img {
      width: 170px; } }
  @media (max-width: 993px) {
    .home__main-bottom-img {
      left: 0; } }
  @media (max-width: 576px) {
    .home__main-bottom-img {
      top: -125px;
      left: auto; } }
  .home__main-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: 100px;
    z-index: 2; }
  @media (max-width: 1350px) {
    /*.home__main-content {*/
    /*    -ms-flex-wrap: wrap;*/
    /*    flex-wrap: wrap;*/
    /*    -webkit-box-pack: start;*/
    /*    -ms-flex-pack: start;*/
    /*    justify-content: flex-start;*/
    /*    margin-bottom: 100px;*/
    /*    margin-left: 50px; } }*/
    .home__main-content {
      display: none;
    }
  }
  @media (max-width: 993px) {
    .home__main-content {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      margin-top: 40px;
      margin-left: 0; } }
  @media (max-width: 576px) {
    .home__main-content {
      margin-bottom: 170px; } }
  @media (max-width: 1350px) {
    .home__main-content .btn {
      margin-left: 0; } }
  @media (max-width: 400px) {
    .home__main-content .btn {
      margin: 20px 10px 20px !important; } }
  .home__title {
    margin: 0;
    margin-left: 120px;
    font-size: 263px;
    font-weight: 800;
    line-height: 0.8;
    text-transform: uppercase; }
  @media (max-width: 1750px) {
    .home__title {
      margin-left: 65px;
      font-size: 220px;
      line-height: 0.6; } }
  @media (max-width: 1450px) {
    .home__title {
      font-size: 175px; } }
  @media (max-width: 1200px) {
    .home__title {
      font-size: 127px; } }
  @media (max-width: 993px) {
    .home__title {
      margin-left: 0;
      font-size: 21vw;
      text-align: center; } }
  @media (max-width: 576px) {
    .home__title {
      font-size: 22vw; } }
  .home__desc {
    width: 900px;
    margin-top: 0;
    margin-left: 30px;
    margin-right: 390px;
    font-size: 16px;
    font-weight: 500;
    text-align: right; }
  @media (max-width: 1750px) {
    .home__desc {
      width: 785px;
      margin-top: 25px; } }
  @media (max-width: 1450px) {
    .home__desc {
      width: 78%; } }
  @media (max-width: 993px) {
    .home__desc {
      width: 90%;
      margin: 40px auto 0;
      text-align: center; } }
  .home__form {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    height: 40px;
    width: 540px;
    margin: 8px 25px 8px 40px;
    background-color: #fff;
    border-radius: 20px; }
  @media (max-width: 1350px) {
    .home__form {
      width: 80%;
      margin-left: 0;
      margin-bottom: 45px; } }
  @media (max-width: 993px) {
    .home__form {
      margin-bottom: 20px; } }
  @media (max-width: 400px) {
    .home__form {
      width: 94%;
      margin: 0 0 20px; } }
  .home__form:before {
    position: absolute;
    content: '';
    top: -8px;
    left: -8px;
    bottom: -8px;
    right: -8px;
    border: 1px solid #ffffff;
    border-radius: 28px;
    opacity: 0.1; }
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
  .home__form-select {
    position: relative; }
  .home__form-select:after {
    position: absolute;
    content: '';
    left: 0;
    top: 11px;
    height: 18px;
    width: 2px;
    background-color: #dd3d34;
    opacity: 0.26; }
  .home__form-select .select2 {
    width: 120px !important; }
  .home__form-select .select2-container .select2-selection--single .select2-selection__rendered {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
  .home__form-select .select2,
  .home__form-select .select2-selection__rendered,
  .home__form-select .select2-container .select2-selection--single {
    height: 100%; }
  .home__form-select .select2-container--default .select2-selection--single .select2-selection__arrow {
    top: 0;
    height: 100%; }
  .home__form-select .select2-container--default .select2-selection--single {
    border: none; }
  .home__form-select .select2-container .select2-selection--single .select2-selection__rendered {
    padding-left: 20px;
    padding-right: 30px; }
  .home__form-select .select2-container--default .select2-selection--single .select2-selection__placeholder {
    color: #000000; }
  .home__form-select .select2-container--default .select2-selection--single .select2-selection__arrow b {
    top: 45%;
    margin-left: -17px;
    border-width: 7px 7px 0 7px;
    border-radius: 3px; }
  .home__form-select .select2-container--default .select2-selection--single .select2-selection__arrow b:after {
    position: absolute;
    top: -8px;
    left: -5px;
    content: '';
    border-color: #fff transparent transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0 5px; }
  .home__form-select .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {
    top: 46%;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    border-color: #888 transparent transparent transparent; }
  .home__callback {
    letter-spacing: 0.12px;
    color: #fcf46b !important;
    font-size: 9px;
    font-weight: 500; }
  .home__callback:hover {
    color: #ffffff !important; }
  .home__search {
    position: relative;
    width: 51px;
    border: none;
    border-radius: 20px;
    cursor: pointer; }

  .filter-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #282828;
    opacity: 0;
    -webkit-transition: all ease 1s;
    -o-transition: all ease 1s;
    transition: all ease 1s;
    z-index: -1;
  }

  .home__nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 40px; }
  @media (max-width: 1250px) {
    .home__nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      margin: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      background: #ffffff;
      color: #000000;
      -webkit-transform: translateX(-100%);
      -ms-transform: translateX(-100%);
      transform: translateX(-100%);
      -webkit-transition: all ease 1s;
      -o-transition: all ease 1s;
      transition: all ease 1s;
      z-index: 100; }
    .home__nav span {
      color: #000000; } }
  .home__nav-item {
    padding: 3px 15px;
    font-size: 14px;
    font-weight: 800;
    color: #ffffff;
    background: none;
    border: none;
    cursor: pointer; }
  @media (max-width: 1250px) {
    .home__nav-item {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      height: 60px;
      padding: 20px;
      color: #a8a8a8;
      border-bottom: 1px solid #e8e8e8; } }
  .home__nav-item:hover {
    color: #dd3d34; }

  .home__mobile-logo {
    display: none;
  }

  .header .home__nav-item_logo img:last-child {
    display: none;
  }

  .header .home__nav-item_logo {
    width: 200px;
    overflow: hidden;
  }

  .header .home__main-top {
    height: auto;
    background: none;
  }

  .header .home__main-content {
    margin: 100px 0 50px;
  }

  .header .home__main-header {
    justify-content: center;
  }

  .v-content-top {
    margin-left: 0;
    justify-content: center;
  }

  .home__aside-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 20px 95px 20px 0; }
  @media (max-width: 998px) {
    .home__aside-header {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      margin: 20px auto; } }
  .home__aside-header-vacancy {
    margin-left: auto;
    margin-right: 60px;
    color: #243b9b;
    font-size: 19px;
    font-weight: 700; }

  .resume__title {
    margin-bottom: 0;
    font-size: 16px;
    max-width: 550px;
    margin-top: 0;
  }

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
    right: 0;
    border: none;
    border-radius: 15px;
    width: 32px;
    height: 32px; }

  .home__aside-header {
    width: 100%;
    margin: 20px 0;
    justify-content: space-evenly;
  }

  .filter-btn {
    position: fixed;
    bottom: 10px;
    left: 50%;
    display: none;
    padding: 15px 40px;
    font-family: 'Muller', sans-serif;
    font-weight: 800;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    color: #ffffff;
    background-image: -webkit-gradient(linear, right top, left top, from(#dd3d34), color-stop(99%, #af2a22), to(#af2a22));
    background-image: -webkit-linear-gradient(right, #dd3d34 0%, #af2a22 99%, #af2a22 100%);
    background-image: -o-linear-gradient(right, #dd3d34 0%, #af2a22 99%, #af2a22 100%);
    background-image: linear-gradient(to left, #dd3d34 0%, #af2a22 99%, #af2a22 100%);
    border: none;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 6; }
  @media (max-width: 993px) {
    .filter-btn {
      display: block; } }

  .v-content-bottom {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 100px; }

  .v-content-bottom__left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-width: 275px;
    z-index: 2; }
  @media (max-width: 993px) {
    .v-content-bottom__left {
      position: fixed;
      bottom: 0;
      right: 0;
      width: 450px;
      height: 70%;
      padding-top: 20px;
      background-color: #ffffff;
      -webkit-transform: translateX(600px);
      -ms-transform: translateX(600px);
      transform: translateX(600px);
      -webkit-transition: all ease 1s;
      -o-transition: all ease 1s;
      transition: all ease 1s;
      z-index: 9; } }
  @media (max-width: 500px) {
    .v-content-bottom__left {
      width: 300px;
      padding-top: 40px; } }
  .v-content-bottom__left .sidebar-inner {
    background-color: #f8f8f8; }
  @media (max-width: 993px) {
    .v-content-bottom__left .sidebar-inner {
      height: 100%;
      margin-bottom: 20px;
      background-color: #ffffff;
      overflow-y: scroll; } }

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

  .btn-accept {
    position: fixed;
    bottom: 20px;
    width: 247.5px;
    z-index: 2;
    margin: 0;
  }

  /*.btn-active {*/
  /*  display: none; }*/

  .vl-btn {
    width: 90%;
    margin-top: 5px;
    margin-bottom: 10px;
    /*margin-left: 15px;*/
    padding: 14px; }

  .vl-block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 265px;
    margin-top: 20px;
    margin-left: 10px;
    padding-bottom: 15px;
    border-bottom: 1px dotted #b8b8b8; }
  .vl-block__head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    cursor: pointer; }
  .vl-block__head p {
    margin: 0;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    color: #060c3e; }
  .vl-block__head span {
    margin-right: 20px;
    padding: 0;
    font-size: 25px;
    color: #5fa7f1;
    background: none;
    border: none;
    outline: none;
    cursor: pointer; }
  .vl-block__inputs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 10px; }
  .vl-block__inputs input {
    width: 48%;
    padding: 13px 25px;
    font-weight: 400;
    font-size: 14px;
    border: 1px solid #e2e2e2;
    background-color: #f9f9f9; }

  .select2-hidden-accessible {
    border: 0 !important;
    clip: rect(0 0 0 0) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; }

  .select2-container {
    box-sizing: border-box;
    display: inline-block;
    margin: 0;
    position: relative;
    vertical-align: middle; }
  .select2-container .select2-selection--single {
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    height: 28px;
    user-select: none;
    -webkit-user-select: none; }
  .select2-container .select2-selection--single .select2-selection__rendered {
    display: block;
    padding-left: 8px;
    padding-right: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; }
  .select2-container .select2-selection--single .select2-selection__clear {
    position: relative; }
  .select2-container[dir="rtl"] .select2-selection--single .select2-selection__rendered {
    padding-right: 8px;
    padding-left: 20px; }
  .select2-container .select2-selection--multiple {
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    min-height: 32px;
    user-select: none;
    -webkit-user-select: none; }
  .select2-container .select2-selection--multiple .select2-selection__rendered {
    display: inline-block;
    overflow: hidden;
    padding-left: 8px;
    text-overflow: ellipsis;
    white-space: nowrap; }
  .select2-container .select2-search--inline {
    float: left; }
  .select2-container .select2-search--inline .select2-search__field {
    box-sizing: border-box;
    border: none;
    font-size: 100%;
    margin-top: 5px;
    padding: 0; }
  .select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button {
    -webkit-appearance: none; }

  .single-card-resume {
    position: relative;
    display: -webkit-box !important;
    display: -ms-flexbox !important;
    display: flex !important;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 650px;
    min-height: 210px;
    margin: 15px 10px;
    padding: 20px 25px 20px 25px;
    -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    background-color: #fff; }
  @media (max-width: 1400px) {
    .single-card-resume {
      width: 550px; } }
  @media (max-width: 998px) {
    .single-card-resume {
      width: 100%; } }
  .single-card-resume__top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start; }
  @media (max-width: 575px) {
    .single-card-resume__top {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column; } }
  .single-card-resume__left-img {
    width: 150px;
    min-width: 150px;
    margin-right: 15px; }
  @media (max-width: 575px) {
    .single-card-resume__left-img {
      margin: 0 auto 20px; } }
  .single-card-resume__top-left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%; }
  .single-card-resume__head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%; }
  @media (max-width: 768px) {
    .single-card-resume__head {
      -webkit-box-orient: vertical;
      -webkit-box-direction: reverse;
      -ms-flex-direction: column-reverse;
      flex-direction: column-reverse;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start; } }
  .single-card-resume__head h3 {
    margin: 15px 0 9px;
    font-size: 15px;
    font-weight: 800;
    color: #000000; }
  .single-card-resume__status {
    margin: 0; }
  .single-card-resume__price {
    margin: 0 0 9px;
    font-size: 17px;
    font-weight: 700;
    color: #0d1566;
    text-transform: uppercase; }
  .single-card-resume__name {
    margin: 0 0 7px;
    font-size: 12px;
    font-weight: 700;
    color: #000104; }
  .single-card-resume__employment {
    margin: 0 0 13px;
    font-size: 11px;
    font-weight: 500;
    color: #4d515e; }
  .single-card-resume__last-work {
    margin: 0 0 8px;
    font-size: 11px;
    font-weight: 500;
    color: #4d515e; }
  .single-card-resume__name-work {
    margin: 0 0 2px;
    font-size: 12px;
    font-weight: 800;
    color: #000104; }
  .single-card-resume__date-work {
    margin: 0 0 15px;
    font-size: 12px;
    font-weight: 500;
    color: #000104; }
  .single-card-resume__last-check {
    margin: 0;
    font-size: 12px;
    font-weight: 700;
    color: #000104; }
  .single-card-resume__bottom {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 10px; }
  @media (max-width: 475px) {
    .single-card-resume__bottom {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column; } }
  .single-card-resume__bottom .btn-card {
    margin-left: auto;
    border-radius: 11px; }
  @media (max-width: 475px) {
    .single-card-resume__bottom .btn-card {
      margin-top: 15px;
      margin-right: auto; } }
  .single-card-resume__soc {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
  @media (max-width: 575px) {
    .single-card-resume__soc {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start; } }
  @media (max-width: 475px) {
    .single-card-resume__soc {
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center; } }
  .single-card-resume__soc p {
    margin: 0 21px 0 0;
    font-size: 14px;
    font-weight: 500;
    color: #000104; }
  @media (max-width: 475px) {
    .single-card-resume__soc p {
      margin-right: 0; } }
  .single-card-resume__soc a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    margin-right: 10px;
    border-radius: 50%; }
  .single-card-resume__soc a img {
    width: 11px;
    height: auto; }
  .single-card-resume__soc-block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
  @media (max-width: 575px) {
    .single-card-resume__soc-block {
      margin-top: 10px; } }
  .single-card-resume__save {
    margin-right: 15px;
    margin-left: 27px;
    padding: 13px 47px 12px 30px;
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    background-color: #df574f;
    outline: none;
    cursor: pointer; }

  .search-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 400px;
    margin: 20px auto;
    padding: 0;
    list-style: none;
    z-index: 1;
  }

  .search-pagination li a, .search-pagination li span {
    margin-right: 5px;
    padding: 8px 10px;
    font-family: AvenirNextCyr-Demi, sans-serif;
    font-size: 12px;
    font-weight: 600;
    color: #262626;
    background-color: #f7f6f6;
    border-radius: 2px;
    text-decoration: none;
    transition: all ease .5s;
  }

  .search-pagination li a:hover, .search-pagination li span:hover {
    background-color: #dddddd;
    transition: all ease .3s;
  }

  .search-pagination .prev.disabled span:hover, .search-pagination .next.disabled span:hover {
    background-color: transparent;
  }

  .search-pagination .active a, .search-pagination .active span {
    background-color: #dddddd;
    transition: all ease .3s;
  }

  .no-border{
    border: none;
  }

  .checkbox{
    display: flex;
    align-items: center;
  }

  .checkbox input:checked + .checkbox__text:before {
    background: #5fa7f1; }

  .checkbox input:checked + .checkbox__text {
    font-weight: 700; }

  .checkbox input:checked + .checkbox__text:after {
    opacity: 1;
    -webkit-transition: .2s;
    -o-transition: .2s;
    transition: .2s; }

</style>