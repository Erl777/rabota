<template>
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
                                        <form class="home__form" action="/resume" method="get">                    <input name="search_text" class="home__form-input" placeholder="Я ищу..." type="text">
                    <button type="submit" class="home__search btn-red">
                      <img src="../assets/icons/search.svg" alt="">
                    </button>                    
                    </form>                    <a class="btn btn-red mr20" href="/personal-area/add-resume">разместить резюме</a>
                    <a class="btn btn-red" href="/personal-area/add-vacancy">создать вакансию</a>
                </div>
            </div>
        </div>
    </div>
  </header>  
</template>

<script>
export default {
  name: 'secondHeader',
  props: {  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Стили для компонента шапки */
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
.home__main-top:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.65;
    /*background: url(../images/bg.png) no-repeat;*/
    background-size: cover; }

.header {
    position: relative; }
.header .home__main-top {
    height: auto;
    background: none; }
.header .home__main-top:before {
    display: none; }
.header .home__nav-item_logo {
    width: 200px;
    overflow: hidden;
}
@media (max-width: 1250px) {
    .header .home__nav-item_logo {
        position: relative;
        width: 100%;
        height: 60px; } }
@media (max-width: 1250px) {
    .header .home__nav-item_logo img:first-child {
        display: none; } }
.header .home__nav-item_logo img:last-child {
    display: none; }
@media (max-width: 1250px) {
    .header .home__nav-item_logo img:last-child {
        position: absolute;
        top: 50%;
        left: 10px;
        display: block;
        width: 200px;
        min-height: 200px;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%); } }
.header .home__main-header {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center; }
@media (max-width: 993px) {
    .header .home__main-header {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center; } }
.header .home__main-content {
    margin: 100px 0 50px; }
.header .home__form {
    width: 540px;
    margin-bottom: 8px; }
@media (max-width: 1200px) {
    .header .home__form {
        width: 50%; } }
@media (max-width: 993px) {
    .header .home__form {
        width: 100%;
        margin-bottom: 20px; } }

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
@media (max-width: 575px) {
    .home__mobile-logo {
        display: block;
        width: 200px;
    }
    .home__main-email {
        display: none !important;
    }
}

.dropdown > .home__nav-item > img, .dropdown > .nhome__nav-item > img {
    width: 15px;
    height: auto;
    margin-left: 10px; }
@media (max-width: 1250px) {
    .dropdown > .home__nav-item > img, .dropdown > .nhome__nav-item > img {
        display: none; } }

.dropdown__menu .nhome__nav-item {
    color: #000000;
    font-size: 14px;
    text-align: left;
}
.dropdown__menu .nhome__nav-item:first-child {
    width: 100%;
    margin-top: 60px; }
.dropdown__menu .home__nav-item {
    color: #000000;
    text-align: left; }

.dropdown__menu {
    position: absolute;
    top: 93%;
    right: 0;
    display: none;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 195px;
    padding: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    z-index: 3; }
@media (max-width: 1250px) {
    .dropdown__menu {
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
        padding: 0;
        background: #ffffff;
        color: #000000;
        -webkit-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
        transform: translateX(-100%);
        -webkit-transition: all ease 1s;
        -o-transition: all ease 1s;
        transition: all ease 1s;
        border-radius: 0;
        z-index: 10; } }
.dropdown__menu .nhome__nav-item {
    color: #000000;
    font-size: 14px;
    text-align: left;
}
.dropdown__menu .nhome__nav-item:first-child {
    width: 100%;
    margin-top: 60px; }
.dropdown__menu .home__nav-item {
    color: #000000;
    text-align: left; }

    .dropdown {
      /*display: none;  будет показанно, когда юзер авторизируется  */
    position: relative;
    height: 22px; }
@media (max-width: 1250px) {
    .dropdown {
        width: 100%;
        height: auto; } }
.dropdown > span {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.dropdown > span > span {
    display: none; }
@media (max-width: 1250px) {
    .dropdown > span > span {
        display: block;
        margin-left: 10px; } }
.dropdown > .home__nav-item > img, .dropdown > .nhome__nav-item > img {
    width: 15px;
    height: auto;
    margin-left: 10px; }
@media (max-width: 1250px) {
    .dropdown > .home__nav-item > img, .dropdown > .nhome__nav-item > img {
        display: none; } }

        .home__main-email {
    margin-right: 50px; }
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

.home__main-ico {
  margin-right: 10px;
  color: #dd3d34;
  font-size: 18px;
}

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

.home__search {
    position: relative;
    width: 51px;
    border: none;
    border-radius: 20px;
    cursor: pointer; }

  /* Конец стилей для шапки  */
</style>
