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
<div class="resume">
    <img class="resume__dots2" src="../assets/bg-dots.png" alt="Точки" role="presentation">
    <div class="resume__circle">
    </div>
    <div class="container container-for-sidebar">
        <div class="resume__left">
            <div class="resume-results">
                <ul class="breadcrumbs">
                                            <li>
                            <a href="/resume/doneck">Донецк</a>
                        </li>
                                                            <li>Вакансия Не Имеет Значения</li>
                </ul>
                <div class="resume-results__date">
                    <p>Резюме от</p>
                    <span>14 08 2020</span>
                </div>
            </div>
            <section class="resume-top">
                <img class="resume-top__left" src="../assets/empty_user.jpg" alt="Пустое фото резюме" role="presentation">
                <div class="resume-top__right">
                    
                    <h1 class="resume-top__head">Резюме: Дарья Волкова                    </h1>
                    <h3 class="resume-description__text">
                        Вакансия Не Имеет Значения                    </h3>
                    <span class="resume-top__price">
                                                    От 12 000 ₽
                                            </span>
                    <table class="resume-top__text">
                        <tbody>
                                                                                                    <tr>
                                <th>Город:
                                </th>
                                <td>Донецк                                </td>
                            </tr>
                                                </tbody>
                    </table>
                </div>
            </section>
            <div class="resume-block single-block-slider" style="position: relative;">
                <section class="resume-description">
                                            <div class="resume-description__item">
                            <div class="resume-description__main-head">
                                <h4 class="resume-description__title-main">Опыт работы</h4>
                                <span class="resume-description__experience">4 года 3 месяца </span>
                            </div>
                                                            <h4 class="resume-description__title-bold">Супермаркет                                 </h4>
                                <p class="resume-description__text">
                                    с 03                                    .2015                                    по
                                    01                                    .2017                                    (1 год 10 месяцев )
                                </p>
                                <p class="resume-description__text">
                                    Продавец                                </p>
                                <p class="resume-description__text">
                                                                    </p>
                                                            <h4 class="resume-description__title-bold">Кафе                                 </h4>
                                <p class="resume-description__text">
                                    с 02                                    .2017                                    по
                                    02                                    .2018                                    (1 год )
                                </p>
                                <p class="resume-description__text">
                                    Официант,помощник повара                                </p>
                                <p class="resume-description__text">
                                                                    </p>
                                                            <h4 class="resume-description__title-bold">Донфрост                                </h4>
                                <p class="resume-description__text">
                                    с 05                                    .2018                                    по
                                    10                                    .2019                                    (1 год 5 месяцев )
                                </p>
                                <p class="resume-description__text">
                                    Сборщик-упаковщик                                </p>
                                <p class="resume-description__text">
                                                                    </p>
                                                    </div>
                                                                <div class="resume-description__item">
                            <h4 class="resume-description__title-main">Образование
                            </h4>
                                                            <h4 class="resume-description__title-bold">
                                    Донецкий элетрометаллургичсекий техникум                                </h4>
                                <p class="resume-description__text">                                                                                                                С 2015                                                                                                                по
                                        2019                                                                                                                г.
                                                                    </p>
                                                    </div>
                                                                                    <div class="resume-description__item">
                            <h4 class="resume-description__title-main">Дополнительная информация
                            </h4>
                            <p class="resume-description__text">
                                071 323 17 45                             </p>
                        </div>
                                    </section>
                <aside class="resume-info jsOpenContacts" id="sidebar-single">
                    <div class="sidebar-inner" style="position: relative; transform: translate3d(0px, 0px, 0px);">
                        <div class="resume-info__head">
                                                            <h4>Контактная информация
                                </h4>
                                <p>Телефон:
                                </p>
                                                                <p>Почта:
                                </p>
                                <a href="mailto:kiraahmetova77778@gmail.com">kiraahmetova77778@gmail.com</a>
                                                    </div>
                        <div class="resume-info__soc">
                                                    </div>
                                                    <button class="resume-info__btn jsSendMessage" data-id="338">написать
                                сообщение
                            </button>
                                                <!--                        <a class="resume-info__complain" href="#">Пожаловаться на<br>это резюме</a>-->
                    <div dir="ltr" class="resize-sensor" style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div class="resize-sensor-expand" style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 449px; height: 252px;"></div></div><div class="resize-sensor-shrink" style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 200%; height: 200%;"></div></div></div></div>
                </aside>
            <div dir="ltr" class="resize-sensor" style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div class="resize-sensor-expand" style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 1108px; height: 709px;"></div></div><div class="resize-sensor-shrink" style="pointer-events: none; position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; z-index: -1; visibility: hidden; max-width: 100%;"><div style="position: absolute; left: 0px; top: 0px; transition: all 0s ease 0s; width: 200%; height: 200%;"></div></div></div></div>
        </div>
        
    </div>
</div>    <footer class="footer">
    <a class="footer__craft-link" href="https://web-artcraft.com/" target="_blank" rel="nofollow">Разработано CraftGroup</a>
</footer></div>
</template>

<script>

  export default {
    name: "singleResume",
    components: {

    },
     data() {
      return {
         
      }
    },
  }
</script>

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

  /* остальные */

  .resume .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex; }
.resume .container .soc-sidebar {
    margin-right: -100px; }
@media (max-width: 1400px) {
    .resume .container .soc-sidebar {
        margin-right: -50px; } }

.resume__left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 100%;
    margin-right: 12px;
    margin-bottom: 30px;
    background-color: #f8f8f8;
    z-index: 3; }
@media (max-width: 993px) {
    .resume__left {
        margin-right: 0; } }

.resume-results {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    margin: 30px 8px 15px 0; }
@media (max-width: 768px) {
    .resume-results {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start; } }
.resume-results__date {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 3px; }
@media (max-width: 768px) {
    .resume-results__date {
        margin-top: 10px; } }
.resume-results__date p {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: #000104; }
.resume-results__date span {
    margin-left: 5px;
    font-size: 12px;
    font-weight: 500;
    color: #000104; }

.breadcrumbs {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none; }
@media (max-width: 768px) {
    .breadcrumbs li {
        margin-bottom: 10px; } }
.breadcrumbs li a {
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    text-decoration: none;
    white-space: nowrap; }
.breadcrumbs li:first-child:after {
    content: '·';
    margin: 0 5px 0 3px; }
.breadcrumbs li:nth-child(2):after {
    content: '-';
    margin: 0 5px 0 3px; }
.breadcrumbs li:last-child:after {
    content: '';
    display: none; }

.resume-top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 13px;
    padding: 15px 17px 20px;
    background-color: #ffffff; }
@media (max-width: 500px) {
    .resume-top {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center; } }
.resume-top__left {
    height: 100%;
    margin-right: 25px;
    -o-object-fit: cover;
    object-fit: cover; }
@media (max-width: 768px) {
    .resume-top__left {
        height: auto; } }
.resume-top__right {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start; }
.resume-top__header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center; }
@media (max-width: 768px) {
    .resume-top__header {
        -webkit-box-orient: vertical;
        -webkit-box-direction: reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start; } }
@media (max-width: 500px) {
    .resume-top__header {
        margin-top: 10px; } }
.resume-top__download {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 20px;
    background: none;
    border: none;
    outline: none;
    cursor: pointer; }
.resume-top__download span {
    margin-left: 10px;
    font-size: 12px;
    font-weight: 700;
    color: #000104; }
.resume-top__save {
    margin-right: 15px;
    padding: 13px 47px 12px 30px;
    font-size: 12px;
    font-weight: 500;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    background-color: #df574f;
    outline: none;
    cursor: pointer; }
@media (max-width: 768px) {
    .resume-top__save {
        margin-bottom: 10px; } }
.resume-top__status {
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: #4d515e; }
@media (max-width: 768px) {
    .resume-top__status {
        margin-bottom: 10px; } }
.resume-top__head {
    margin: 24px 0 15px;
    font-size: 20px;
    font-weight: 800;
    color: #000000; }
.resume-top__price {
    margin: 0 0 25px;
    font-size: 17px;
    font-weight: 700;
    color: #0d1566;
    text-transform: uppercase; }
.resume-top__text th {
    max-width: 170px;
    padding-right: 25px;
    padding-bottom: 20px;
    font-size: 14px;
    font-weight: 700;
    text-align: left;
    color: #000104; }
.resume-top__text td {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    font-weight: 500;
    color: #4d515e; }
.resume-top__text tr:last-child th {
    padding-bottom: 0; }

.resume-top__left {
  width: 166px;
  height: auto;
}

.resume-description {
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
    width: 59%;
    padding: 20px 36px 35px;
    background-color: #ffffff; }
@media (max-width: 993px) {
    .resume-description {
        width: 100%; } }
@media (max-width: 575px) {
    .resume-description {
        padding: 20px 20px 35px; } }
.resume-description__item {
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
    width: 100%;
    margin-bottom: 18px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1); }
.resume-description__item:last-child {
    margin-bottom: 0;
    border: none; }
.resume-description__item:last-child .resume-description__text:last-child {
    margin-bottom: 0; }
.resume-description__main-head {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start; }
.resume-description__title-main {
    margin: 0 0 22px;
    font-size: 17px;
    font-weight: 800;
    color: #000000; }
.resume-description__experience {
    margin-left: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #6e6666;
    line-height: 1.6; }
.resume-description__title-bold {
    margin: 0 0 20px;
    font-size: 15px;
    font-weight: 700;
    color: #000104; }
.resume-description__title-bold_mb {
    margin-bottom: 0; }
.resume-description__text {
    margin: 0 0 20px;
    font-size: 14px;
    font-weight: 400;
    color: #000104; }
.resume-description__text_mb {
    margin-bottom: 0; }

.resume-block {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    width: 100%; }

@media (max-width: 993px) {
    .resume-block {
        flex-direction: column;
    }
}

.resume-info {
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
    width: 40%;
    margin-left: auto; }
@media (max-width: 993px) {
    .resume-info {
        width: 100%;
    }
}
.resume-info .sidebar-inner {
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
    width: 100%; }
@media (max-width: 993px) {
    .resume-info .sidebar-inner {
        margin-top: 15px;
/*        max-width: 270px;*/
/*        background-color: #ffffff;*/
/*        z-index: 7;*/
/*        -webkit-transform: translateX(400px);*/
/*        -ms-transform: translateX(400px);*/
/*        transform: translateX(400px);*/
/*        -webkit-transition: all ease 1s;*/
/*        -o-transition: all ease 1s;*/
/*        transition: all ease 1s; */
    }
}
.resume-info.active-single-contacts {
    z-index: 6; }
.resume-info.active-single-contacts .single-vacancy-overlay {
    opacity: 0.38;
    z-index: 1;
    -webkit-transition: all ease 1s;
    -o-transition: all ease 1s;
    transition: all ease 1s; }
@media (max-width: 993px) {
    .resume-info.active-single-contacts .sidebar-inner {
        -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
        transform: translateX(0);
        -webkit-transition: all ease 1s;
        -o-transition: all ease 1s;
        transition: all ease 1s; } }
.resume-info__head {
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
    width: 100%;
    padding: 17px 27px 15px;
    background-color: #ffffff; }
.resume-info__head h4 {
    margin: 0;
    font-size: 17px;
    font-weight: 800; }
.resume-info__head p {
    margin: 17px 0 0;
    font-size: 13px;
    font-weight: 700; }
.resume-info__head a {
    margin: 0;
    font-size: 13px;
    font-weight: 700;
    color: #2e347a;
    text-decoration: none; }
.resume-info__soc {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 18px 0 36px; }
@media (max-width: 993px) {
    .resume-info__soc {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-bottom: 15px;
        padding: 0 27px; } }
.resume-info__soc p {
    margin: 0 21px 0 0;
    font-size: 14px;
    font-weight: 500;
    color: #000104; }
.resume-info__soc a {
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
@media (max-width: 993px) {
    .resume-info__soc a {
        margin-top: 10px; } }
@media (max-width: 380px) {
    .resume-info__soc a {
        margin: 10px 10px 10px 0; } }
.resume-info__soc a img {
    width: 11px;
    height: auto; }
.resume-info__btn {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 199px;
    height: 40px;
    margin-bottom: 17px;
    font-size: 10px;
    font-weight: 800;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    background-image: -webkit-gradient(linear, right top, left top, from(#dd3d34), color-stop(99%, #af2a22), to(#af2a22));
    background-image: -webkit-linear-gradient(right, #dd3d34 0%, #af2a22 99%, #af2a22 100%);
    background-image: -o-linear-gradient(right, #dd3d34 0%, #af2a22 99%, #af2a22 100%);
    background-image: linear-gradient(to left, #dd3d34 0%, #af2a22 99%, #af2a22 100%);
    border: none;
    border-radius: 20px;
    outline: none;
    cursor: pointer; }
@media (max-width: 993px) {
    .resume-info__btn {
        padding: 0 27px;
        line-height: 1.4; } }
.resume-info__complain {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: #000000;
    text-align: center;
    text-decoration: none; }
@media (max-width: 993px) {
    .resume-info__complain {
        margin-bottom: 10px;
        padding: 0 27px; } }

.resume__dots2 {
    position: absolute;
    bottom: 0;
    left: 70px; }
@media (max-width: 769px) {
    .resume__dots2 {
        display: none; } }

.resume__circle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background-color: #dd3d34;
    border-radius: 0 100% 0 0 / 100% 100% 0 0;
    z-index: 2; }
@media (max-width: 769px) {
    .resume__circle {
        width: 100px;
        height: 100px; } }
</style>
