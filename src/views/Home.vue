<template>
  <div class="nhome">
    <div class="nhome__main">
      <!--      <div class="nhome__main-top" style="background: linear-gradient( rgba(36, 60, 156, 0.78),rgba(36, 60, 156, 0.78) ),url(<?=$background_image?>) no-repeat; background-size: cover; background-position-x: center;">-->
      <div class="nhome__main-top"
           style="background: linear-gradient( rgba(36, 60, 156, 0.78),rgba(36, 60, 156, 0.78) ),url(#) no-repeat; background-size: cover; background-position-x: center;">
        <div class="nhome__main-header">
          <button class="mobile-nav-btn jsOpenNavMenu"><img src="../assets/menu.png" alt=""
                                                            role="presentation"/>
          </button>
          <div class="filter-overlay nav-overlay jsNavOverlay">
          </div>
          <nav class="nhome__nav jsNavMenu">
            <a class="nhome__nav-item nhome__nav-item_logo" href="#">
              <img src="../assets/logo-main.png" alt="Логотип rabota.today" role="presentation"/>
              <img src="../assets/logo-main-small.png" alt="Логотип rabota.today" role="presentation"/>
              <img src="../assets/logo_mob.png" alt="Логотип rabota.today" role="presentation"/>
            </a>
            <!--            <?php if (!Yii::$app->user->isGuest && Yii::$app->user->identity->status >= 20): ?>-->
            <!--            <a class="nhome__nav-item" href="/employer">Работодателю</a>-->
            <!--            <?php endif; ?>-->
            <div class="geolocation">
              <img src="../assets/geolocation.png" alt="Геолокация">
              <div class="country-select">
                <!--                <span class="jsOpenCountrySelect"><?= $current_country ? $current_country->name : 'Выберите Страну' ?> <b></b></span>-->
                <span class="jsOpenCountrySelect" @click="showSelectCountryUrl = !showSelectCountryUrl"
                      :class="{ 'country-select-active': showSelectCountryUrl }"> Выберите Страну <b></b></span>
                <ul v-show="showSelectCountryUrl">
                  <li>
                    <a href="/" data-id="" class="jsOpenCountrySelectUrl">
                      Выберите Страну
                    </a>
                  </li>
                  <!--                  <?php foreach ($countries as $country):?>-->
                  <li>
                    <!--                    <a href="<?= $country->slug ?>" data-id="<?= $country->id ?>" class="jsOpenCountrySelectUrl">-->
                    <!--                      <?= $country->name ?>-->
                    <!--                    </a>-->
                    <a href="#" data-id="<?= $country->id ?>" class="jsOpenCountrySelectUrl">
                      Страна
                    </a>
                  </li>
                  <!--                  <?php endforeach; ?>-->
                </ul>
              </div>
            </div>
            <!--            <?php if (!Yii::$app->user->isGuest && Yii::$app->user->identity->status >= 20): ?>-->
            <a class="nhome__nav-item" href="#">Поиск резюме</a>
            <!--            <?php elseif (!Yii::$app->user->isGuest && Yii::$app->user->identity->status == 10): ?>-->
            <a class="nhome__nav-item" href="#">Поиск вакансий</a>
            <!--            <?php else: ?>-->
            <!--            <a class="nhome__nav-item" href="#">Поиск резюме</a>-->
            <!--            <a class="nhome__nav-item" href="#">Поиск вакансий</a>-->
            <!--            <?php endif; ?>-->
            <!--            <?php if (Yii::$app->user->isGuest): ?>-->
            <button class="nhome__nav-item nav-btn jsLogin">
              Вход
            </button>
            <!--            <?php else: ?>-->
            <!--            <div class="dropdown jsMenu">-->
            <!--                        <span class="nhome__nav-item nav-btn jsOpenMenu">-->
            <!--                            <?php if (!$employer->first_name && !$employer->second_name): ?>-->
            <!--                          <?= explode('@', Yii::$app->user->identity->email)[0] ?>-->
            <!--                          <?php else: ?>-->
            <!--                          <?= $employer->first_name . ' ' . $employer->second_name ?>-->
            <!--                          <?php endif ?>-->
            <!--                          Иван Иванов-->
            <!--                          <img src="../assets/down-arrow.svg" alt="Стреклка вниз" role="presentation"/>-->
            <!--                            <span>></span>-->
            <!--                        </span>-->
            <!--              <div class="dropdown__menu jsShowMenu">-->
            <!--                <span class="nhome__nav-item mobile-prev jsMenuPrev">Назад</span>-->
            <!--                <?php $messages = Yii::$app->user->identity->unreadMessages ?>-->
            <!--                <a class="nhome__nav-item" href="#">Личный-->
            <!--                  кабинет</a>-->
            <!--                <a class="nhome__nav-item" href="<?= Url::to(['/personal-area/my-message']) ?>">Отклики <?= $messages > 0 ? "($messages)" : "" ?></a>-->
            <!--                <a class="nhome__nav-item" href="#">Отклики 0 ? "($messages)" : "" ?></a>-->
            <!--                <a class="nhome__nav-item" href="/personal-area/add-vacancy">Добавить вакансию</a>-->
            <!--                <a class="nhome__nav-item" href="/personal-area/add-resume">Добавить резюме</a>-->
            <!--                <?= Html::beginForm(['/user/security/logout'], 'post', ['class' => 'form-logout']) ?>-->
            <!--                <?= Html::submitButton(-->
            <!--                                    'Выйти',-->
            <!--                                    ['class' => 'nhome__nav-item']-->
            <!--                ) ?>-->
            <!--                <?= Html::endForm() ?>-->
            <!--                <form action="" class="form-logout">-->
            <!--                  <button class="nhome__nav-item" type="button">Выйти</button>-->
            <!--                </form>-->
            <!--              </div>-->
            <!--            </div>-->
            <!--            <?php endif ?>-->
          </nav>
        </div>
        <div class="nhome__main-content">
          <div class="nhome__main-content-search">
            <!--            <?= Html::beginForm([Vacancy::getSearchPageUrl()], 'get', ['class' => 'nhome__form']) ?>-->
            <!--            <span class="nhome__form-text">-->
            <!--                            Сейчас на сайте свыше-->
            <!--                            <a href="<?= Vacancy::getSearchPageUrl() ?>"-->
            <!--                               class='white-text'> <?= $vacancy_count ?> вакансий </a>-->
            <!--                        </span>-->
            <!--            <input name="search_text" class="nhome__form-input" placeholder="Я ищу..." type="text"/>-->
            <!--            <?= Html::submitButton(-->
            <!--                        '<i class="fa fa-search"></i>',-->
            <!--            ['class' => 'nhome__search btn-red']-->
            <!--            ) ?>-->
            <!--            <?= Html::endForm() ?>-->
            <form action="" class="nhome__form">
              <span class="nhome__form-text">
                            Сейчас на сайте свыше
                            <a href="<?= Vacancy::getSearchPageUrl() ?>"
                               class='white-text'> 007 вакансий </a>
                        </span>
              <input name="search_text" class="nhome__form-input" placeholder="Я ищу..." type="text"/>
              <button type="button" class="nhome__search btn-red"><i class="fa fa-search"></i></button>
            </form>
            <a class="btn btn-red mr20" href="#">резюме</a>
            <a class="btn btn-red" href="#">вакансии</a>
          </div>
          <!--          <div class="geolocation">-->
          <!--            <div class="geolocation__block">-->
          <!--              <img src="../assets/geolocation.png" alt="Геолокация">-->
          <!--              <div class="country-select">-->
          <!--&lt;!&ndash;                <span class="jsOpenCountrySelect"><?= $current_country ? $current_country->name : 'Выберите Страну' ?> <b></b></span>&ndash;&gt;-->
          <!--                <span class="jsOpenCountrySelect"><b>Выберите Страну </b></span>-->
          <!--                <ul>-->
          <!--                  <li>-->
          <!--                    <a href="/" data-id="" class="jsOpenCountrySelectUrl">-->
          <!--                      Выберите Страну-->
          <!--                    </a>-->
          <!--                  </li>-->
          <!--&lt;!&ndash;                  <?php foreach ($countries as $country):?>&ndash;&gt;-->
          <!--                  <li>-->
          <!--&lt;!&ndash;                    <a href="<?= $country->slug ?>" data-id="<?= $country->id ?>" class="jsOpenCountrySelectUrl">&ndash;&gt;-->
          <!--&lt;!&ndash;                      <?= $country->name ?>&ndash;&gt;-->
          <!--&lt;!&ndash;                    </a>&ndash;&gt;-->
          <!--                    <a href="#" data-id="0" class="jsOpenCountrySelectUrl">-->
          <!--                      country name-->
          <!--                    </a>-->
          <!--                  </li>-->
          <!--&lt;!&ndash;                  <?php endforeach; ?>&ndash;&gt;-->
          <!--                </ul>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <span class="nhome__form-text">-->
          <!--                        Сейчас на сайте свыше-->
          <!--&lt;!&ndash;                        <a href="<?= Vacancy::getSearchPageUrl() ?>" class='white-text'> <?= $vacancy_count ?> вакансий </a>&ndash;&gt;-->
          <!--                        <a href="#" class='white-text'> 007 вакансий </a>-->
          <!--                    </span>-->
          <!--          </div>-->
        </div>
      </div>
      <div class="nhome__main-bottom">
        <img class="nhome__main-big-circle" src="../assets/home-big-circle.png" alt="Круг" role="presentation"/>
        <!--        <?php if($current_country):?>-->
        <img class="nhome__main-gerb" src="<?=$current_country->main_page_emblem?>" role="presentation"/>
        <!--        <?php else:?>-->
        <img class="nhome__main-gerb" src="../assets/gerb-doneck-z1.png" alt="Герб Донецка"
             role="presentation"/>
        <!--        <?php endif ?>-->
        <!--        <h1 class="<?=$current_country?'nhome__custom-title':'nhome__title'?>"><?=$current_country?$current_country->meta_header:"Работа"?></h1>-->
        <h1 class="nhome__title">Работа</h1>
        <div class="nhome__desc desc-pc">
          <!--          <?php if ($current_country):?>-->
          <!--          <?=$current_country->main_page_text?>-->
          <!--          <?php else:?>-->
          Сайт поиска работы №1. Выбирайте из <a class="yellow-text"
                                                 href="#">2000+
          вакансий</a> и 500+ компаний!<br>
          <a class="yellow-text" href="/personal-area/add-resume">Разместите резюме</a> и получите приглашения
          на
          работу от лучших работодателей.<br>
          Размещение вакансий и резюме - бесплатно.
          Размести сегодня - улучши качество жизни завтра!<br>
          Поиск работы - это <a class="yellow-text" href="/">rabota.today.</a>
          <!--          <?php endif ?>-->
        </div>
        <!--googleoff: all-->
        <!--noindex-->
        <div class="nhome__desc desc-mob">
          <!--          <?php if ($current_country):?>-->
          <!--          <?=$current_country->main_page_mobile_text?>-->
          <!--          <?php else:?>-->
          <!--          Сайт поиска работы №1. Выбирайте из 2000+ вакансий и 500+ компаний!<br>-->
          <!--          <a class="yellow-text" href="/">Поиск работы - это rabota.today.</a>-->
          <!--          <?php endif ?>-->
        </div>
        <!--googleoff: all-->
        <!--noindex-->
        <img class="nhome__main-bottom-img" src="../assets/img1.png" alt="Офисный стул" role="presentation"/>
      </div>
    </div>
    <aside class="nhome__aside">
      <img class="nhome__dots2" src="../assets/bg-dots.png" alt="точки" role="presentation"/>
      <div class="nhome__aside-header">
        <h3 class="nhome__aside-header-vacancy">Вакансии дня</h3>
      </div>
      <div class="home__slider">
        <!--        <?php foreach ($vacancies as $vacancy): ?>-->
<!--        <div class="single-card home-card">-->
<!--          <div class="single-card__tr">-->
<!--          </div>-->
<!--          <div class="single-card__header">-->
<!--            <img src="<?= $vacancy->company->getPhotoOrEmptyPhoto($vacancy->mainCategory) ?>"-->
<!--                 alt="Логотип <?=$vacancy->company->name?>" role="presentation"/>-->
<!--            <div class="single-card__top">-->
<!--              <div class="single-card__cat-city">-->
<!--                <a class="btn-card btn-card-small btn-gray" href="#">-->
<!--                  &lt;!&ndash;                <?= $vacancy->mainCategory->name ?>&ndash;&gt;-->
<!--                  mainCategory->name-->
<!--                </a>-->
<!--                &lt;!&ndash;                <?php if ($city = $vacancy->city0): ?>&ndash;&gt;-->
<!--                <a class="d-flex align-items-center home-city"-->
<!--                   href="#">-->
<!--                  <img class="single-card__icon" src="../assets/arr-place.png" alt="Стрелка"-->
<!--                       role="presentation"/>-->
<!--                  &lt;!&ndash;                <span class="ml5"><?= $city->name ?></span>&ndash;&gt;-->
<!--                  <span class="ml5"> city->name </span>-->
<!--                </a>-->
<!--                &lt;!&ndash;                <?php endif ?>&ndash;&gt;-->
<!--              </div>-->
<!--              <a href="#"-->
<!--                 class="single-card__title"-->
<!--                 title="title"> vacancy->post </a>-->
<!--              &lt;!&ndash;                 title="<?= StringHelper::mb_ucfirst($vacancy->post) ?>"><?= StringHelper::mb_ucfirst($vacancy->post) ?></a>&ndash;&gt;-->
<!--              <div class="single-card__info-second">-->
<!--                &lt;!&ndash;                <span class="mr10">Добавлено: <?= Yii::$app->formatter->asTime($vacancy->created_at, 'dd.MM.yyyy, hh:mm') ?></span>&ndash;&gt;-->
<!--                <span class="mr10">Добавлено: vacancy->created_at, 'dd.MM.yyyy, hh:mm'</span>-->
<!--                &lt;!&ndash;                <?php if ($vacancy->views > 0):?>&ndash;&gt;-->
<!--                <div class="single-card__view">-->
<!--                  <img class="single-card__icon mr5" src="../assets/icon-eye.png" alt="иконка глаз"-->
<!--                       role="presentation"/>-->
<!--                  &lt;!&ndash;                  <span><?= $vacancy->views ?></span>&ndash;&gt;-->
<!--                  <span> vacancy->views </span>-->
<!--                </div>-->
<!--                &lt;!&ndash;                <?php endif ?>&ndash;&gt;-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="single-card__info">-->
<!--            &lt;!&ndash;            <?php if ($vacancy->employment_type): ?>&ndash;&gt;-->
<!--            &lt;!&ndash;            <p><?= $vacancy->employment_type->name ?>.</p>&ndash;&gt;-->
<!--            &lt;!&ndash;            <?php endif ?>&ndash;&gt;-->
<!--            &lt;!&ndash;            <p><?= StringHelper::truncate($vacancy->responsibilities, 80, '...') ?></p>&ndash;&gt;-->
<!--          </div>-->
<!--          <div class="d-flex flex-wrap align-items-center justify-content-start">-->
<!--            <a class="btn-card btn-red jsVacancyModal" data-id="<?= $vacancy->id ?>">Откликнуться</a>-->
<!--            &lt;!&ndash;                    <a class="single-card__like" href="#">&ndash;&gt;-->
<!--            &lt;!&ndash;                        <i class="fa fa-heart-o"></i>&ndash;&gt;-->
<!--            &lt;!&ndash;                        <span>В избранное</span>&ndash;&gt;-->
<!--            &lt;!&ndash;                    </a>&ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
        <!--        <?php endforeach ?>-->
        <hooper :settings="hooperSettings">
          <slide>
            <div class="single-card home-card">
              <div class="single-card__tr">
              </div>
              <div class="single-card__header">
                <img src="../assets/categories/sfera-obsluzhivaniya.svg" alt="Логотип " role="presentation"/>
                <div class="single-card__top">
                  <div class="single-card__cat-city">
                    <a class="btn-card btn-card-small btn-gray" href="#">
                      Сфера обслуживания
                    </a>
                    <a class="d-flex align-items-center home-city"
                       href="#">
                      <img class="single-card__icon" src="../assets/arr-place.png" alt="Стрелка"
                           role="presentation"/>
                      <span class="ml5"> Донецк </span>
                    </a>
                  </div>
                  <a href="#"
                     class="single-card__title"
                     title="title"> Уборщица 1</a>
                  <div class="single-card__info-second">
                    <span class="mr10">Добавлено: 23.06.2020, 11:55</span>
                    <div class="single-card__view">
                      <img class="single-card__icon mr5" src="../assets/icon-eye.png"
                           alt="иконка глаз" role="presentation"/>
                      <span> 53 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-card__info">
                <!--            <?php if ($vacancy->employment_type): ?>-->
                <!--            <p><?= $vacancy->employment_type->name ?>.</p>-->
                <!--            <?php endif ?>-->
                <!--            <p><?= StringHelper::truncate($vacancy->responsibilities, 80, '...') ?></p>-->
                <p>
                  Приглашаем в свою команду уборщицу.
                </p>
              </div>
              <div class="d-flex flex-wrap align-items-center justify-content-start">
                <a class="btn-card btn-red jsVacancyModal" data-id="<?= $vacancy->id ?>">Откликнуться</a>
                <!--                    <a class="single-card__like" href="#">-->
                <!--                        <i class="fa fa-heart-o"></i>-->
                <!--                        <span>В избранное</span>-->
                <!--                    </a>-->
              </div>
            </div>
          </slide>
          <slide>
            <div class="single-card home-card">
              <div class="single-card__tr">
              </div>
              <div class="single-card__header">
                <img src="../assets/categories/sfera-obsluzhivaniya.svg" alt="Логотип " role="presentation"/>
                <div class="single-card__top">
                  <div class="single-card__cat-city">
                    <a class="btn-card btn-card-small btn-gray" href="#">
                      Сфера обслуживания
                    </a>
                    <a class="d-flex align-items-center home-city"
                       href="#">
                      <img class="single-card__icon" src="../assets/arr-place.png" alt="Стрелка"
                           role="presentation"/>
                      <span class="ml5"> Донецк </span>
                    </a>
                  </div>
                  <a href="#"
                     class="single-card__title"
                     title="title"> Уборщица </a>
                  <div class="single-card__info-second">
                    <span class="mr10">Добавлено: 23.06.2020, 11:55</span>
                    <div class="single-card__view">
                      <img class="single-card__icon mr5" src="../assets/icon-eye.png"
                           alt="иконка глаз" role="presentation"/>
                      <span> 53 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-card__info">
                <!--            <?php if ($vacancy->employment_type): ?>-->
                <!--            <p><?= $vacancy->employment_type->name ?>.</p>-->
                <!--            <?php endif ?>-->
                <!--            <p><?= StringHelper::truncate($vacancy->responsibilities, 80, '...') ?></p>-->
                <p>
                  Приглашаем в свою команду уборщицу.
                </p>
              </div>
              <div class="d-flex flex-wrap align-items-center justify-content-start">
                <a class="btn-card btn-red jsVacancyModal" data-id="<?= $vacancy->id ?>">Откликнуться</a>
                <!--                    <a class="single-card__like" href="#">-->
                <!--                        <i class="fa fa-heart-o"></i>-->
                <!--                        <span>В избранное</span>-->
                <!--                    </a>-->
              </div>
            </div>
          </slide>
          <slide>
            <div class="single-card home-card">
              <div class="single-card__tr">
              </div>
              <div class="single-card__header">
                <img src="../assets/categories/sfera-obsluzhivaniya.svg" alt="Логотип " role="presentation"/>
                <div class="single-card__top">
                  <div class="single-card__cat-city">
                    <a class="btn-card btn-card-small btn-gray" href="#">
                      Сфера обслуживания
                    </a>
                    <a class="d-flex align-items-center home-city"
                       href="#">
                      <img class="single-card__icon" src="../assets/arr-place.png" alt="Стрелка"
                           role="presentation"/>
                      <span class="ml5"> Донецк </span>
                    </a>
                  </div>
                  <a href="#"
                     class="single-card__title"
                     title="title"> Уборщица </a>
                  <div class="single-card__info-second">
                    <span class="mr10">Добавлено: 23.06.2020, 11:55</span>
                    <div class="single-card__view">
                      <img class="single-card__icon mr5" src="../assets/icon-eye.png"
                           alt="иконка глаз" role="presentation"/>
                      <span> 53 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-card__info">
                <!--            <?php if ($vacancy->employment_type): ?>-->
                <!--            <p><?= $vacancy->employment_type->name ?>.</p>-->
                <!--            <?php endif ?>-->
                <!--            <p><?= StringHelper::truncate($vacancy->responsibilities, 80, '...') ?></p>-->
                <p>
                  Приглашаем в свою команду уборщицу.
                </p>
              </div>
              <div class="d-flex flex-wrap align-items-center justify-content-start">
                <a class="btn-card btn-red jsVacancyModal" data-id="<?= $vacancy->id ?>">Откликнуться</a>
                <!--                    <a class="single-card__like" href="#">-->
                <!--                        <i class="fa fa-heart-o"></i>-->
                <!--                        <span>В избранное</span>-->
                <!--                    </a>-->
              </div>
            </div>
          </slide>
          <slide>
            <div class="single-card home-card">
              <div class="single-card__tr">
              </div>
              <div class="single-card__header">
                <img src="../assets/categories/sfera-obsluzhivaniya.svg" alt="Логотип " role="presentation"/>
                <div class="single-card__top">
                  <div class="single-card__cat-city">
                    <a class="btn-card btn-card-small btn-gray" href="#">
                      Сфера обслуживания
                    </a>
                    <a class="d-flex align-items-center home-city"
                       href="#">
                      <img class="single-card__icon" src="../assets/arr-place.png" alt="Стрелка"
                           role="presentation"/>
                      <span class="ml5"> Донецк </span>
                    </a>
                  </div>
                  <a href="#"
                     class="single-card__title"
                     title="title"> Уборщица </a>
                  <div class="single-card__info-second">
                    <span class="mr10">Добавлено: 23.06.2020, 11:55</span>
                    <div class="single-card__view">
                      <img class="single-card__icon mr5" src="../assets/icon-eye.png"
                           alt="иконка глаз" role="presentation"/>
                      <span> 53 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-card__info">
                <!--            <?php if ($vacancy->employment_type): ?>-->
                <!--            <p><?= $vacancy->employment_type->name ?>.</p>-->
                <!--            <?php endif ?>-->
                <!--            <p><?= StringHelper::truncate($vacancy->responsibilities, 80, '...') ?></p>-->
                <p>
                  Приглашаем в свою команду уборщицу.
                </p>
              </div>
              <div class="d-flex flex-wrap align-items-center justify-content-start">
                <a class="btn-card btn-red jsVacancyModal" data-id="<?= $vacancy->id ?>">Откликнуться</a>
                <!--                    <a class="single-card__like" href="#">-->
                <!--                        <i class="fa fa-heart-o"></i>-->
                <!--                        <span>В избранное</span>-->
                <!--                    </a>-->
              </div>
            </div>
          </slide>
          <slide>
            <div class="single-card home-card">
              <div class="single-card__tr">
              </div>
              <div class="single-card__header">
                <img src="../assets/categories/sfera-obsluzhivaniya.svg" alt="Логотип " role="presentation"/>
                <div class="single-card__top">
                  <div class="single-card__cat-city">
                    <a class="btn-card btn-card-small btn-gray" href="#">
                      Сфера обслуживания
                    </a>
                    <a class="d-flex align-items-center home-city"
                       href="#">
                      <img class="single-card__icon" src="../assets/arr-place.png" alt="Стрелка"
                           role="presentation"/>
                      <span class="ml5"> Донецк </span>
                    </a>
                  </div>
                  <a href="#"
                     class="single-card__title"
                     title="title"> Уборщица </a>
                  <div class="single-card__info-second">
                    <span class="mr10">Добавлено: 23.06.2020, 11:55</span>
                    <div class="single-card__view">
                      <img class="single-card__icon mr5" src="../assets/icon-eye.png"
                           alt="иконка глаз" role="presentation"/>
                      <span> 53 </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="single-card__info">
                <!--            <?php if ($vacancy->employment_type): ?>-->
                <!--            <p><?= $vacancy->employment_type->name ?>.</p>-->
                <!--            <?php endif ?>-->
                <!--            <p><?= StringHelper::truncate($vacancy->responsibilities, 80, '...') ?></p>-->
                <p>
                  Приглашаем в свою команду уборщицу.
                </p>
              </div>
              <div class="d-flex flex-wrap align-items-center justify-content-start">
                <a class="btn-card btn-red jsVacancyModal" data-id="<?= $vacancy->id ?>">Откликнуться</a>
                <!--                    <a class="single-card__like" href="#">-->
                <!--                        <i class="fa fa-heart-o"></i>-->
                <!--                        <span>В избранное</span>-->
                <!--                    </a>-->
              </div>
            </div>
          </slide>
        </hooper>

      </div>
    </aside>
    <div class="nhome__footer">
      <div class="nhome__footer-left">
        <a class="footer__craft-link" href="https://web-artcraft.com/" target="_blank">
          Разработано CraftGroup
        </a>
        <a class="nhome__footer-left-soc" rel="nofollow" target="_blank" href="https://vk.com/rabotad0netsk">
          <img class="vk-bg" src="../assets/vk.svg" alt="Иконка VK" role="presentation">Есть вопросы?<br>
          Напиши нам в соц.сетях
        </a>
        <span>
                © 2019–2020 <a href="/">Rabota.today</a>.<br>
                Сайт поиска работы №1<br>
          <!--          <?php if($current_country):?>-->
          <!--          в <?=$current_country->name?>-->
          <!--          <?php endif?>-->
          <!--                в ДНР и ЛНР-->
            </span>
      </div>
      <div class="nhome__footer-item">
        <div class="nhome__footer-item-head">
          <img src="../assets/index_city.png" alt="Города">
          <p>Вакансии<br> по городам <span>1000+</span></p>
        </div>
        <!--        <?php-->
        <!--            $i = 0;-->
        <!--            foreach ($cities as $city):?>-->
        <!--        <?php if ($i < 4): ?>-->
        <!--        <a href="<?= Vacancy::getSearchPageUrl(false, $city->slug) ?>"><?= $city->name ?></a>-->
        <a href="#"> city->name </a>
        <!--        <?php-->
        <!--                endif;-->
        <!--                $i++;-->
        <!--            endforeach; ?>-->
        <!--        <a href="<?=Url::toRoute(['/main_page/default/city'])?>">все города</a>-->
        <a href="#">все города</a>
      </div>
      <div class="nhome__footer-item">
        <div class="nhome__footer-item-head">
          <img src="../assets/index_vacancy.png" alt="Города">
          <p>Вакансии<br> по категориям <span>300+</span></p>
        </div>
        <!--        <?php foreach ($categories as $category):?>-->
        <!--        <a href="<?= Vacancy::getSearchPageUrl($category->slug) ?>"><?= $category->name ?></a>-->
        <a href="#"> category->name </a>
        <!--        <?php endforeach; ?>-->
        <!--        <a href="<?= Vacancy::getSearchPageUrl() ?>">все вакансии</a>-->
        <a href="#">все вакансии</a>
      </div>
      <div class="nhome__footer-item">
        <div class="nhome__footer-item-head">
          <img src="../assets/index_prof.png" alt="Города">
          <p>Вакансии<br> по профессиям <span>500+</span></p>
        </div>
        <!--        <?php foreach ($professions as $profession):?>-->
        <!--        <a href="<?= Vacancy::getSearchPageUrl(false, false, $profession->slug) ?>"><?= $profession->title ?></a>-->
        <a href="#"> title </a>
        <!--        <?php endforeach; ?>-->
        <!--        <?php if($current_country):?>-->
        <!--        <a href="<?=Url::toRoute(["/$current_country->slug/professions"])?>">все профессии</a>-->
        <a href="#">все профессии</a>
        <!--        <?php else:?>-->
        <!--        <a href="<?=Url::toRoute(['/main_page/default/professions'])?>">все профессии</a>-->
        <a href="#">все профессии</a>
        <!--        <?php endif ?>-->
      </div>
    </div>
    <div class="nhome__circle"></div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  import { Hooper, Slide } from 'hooper';
  import 'hooper/dist/hooper.css';


  export default {
    name: 'Home',
    data() {
      return {
        showSelectCountryUrl: false,
        hooperSettings: {
          itemsToShow: 3,
          itemsToSlide: 1,
          vertical: true,
          autoPlay: true,
          playSpeed: 3000,
          infiniteScroll: true
        }
      }
    },
    components: {
      // HelloWorld,
      Hooper,
      Slide
    },
    methods: {}
  }
</script>

<style scoped>

  .hooper-slide.is-current {
    background-color: rgba(255, 0, 11, 0.5);
    width: 96%;
    margin-left: 10px !important;
    -webkit-transition: all ease .5s;
    -o-transition: all ease .5s;
    transition: all ease .5s; }
  @media (max-width: 1500px) {
    .hooper-slide.is-current {
      width: 90%;
      margin-left: 33px !important; } }
  @media (max-width: 576px) {
    .hooper-slide.is-current {
      width: auto;
      margin-left: 0 !important;
      margin-right: 0 !important; } }

  /*.hooper{*/
  /*  height: auto;*/
  /*}*/

  .is-current{

  }

  .home-card .btn-red{
    border-radius: 11px;
    padding: 6px 40px 5px;
  }

  .home-card .single-card__info {
    font-size: 12px;
    letter-spacing: 0.5px;
    margin: auto 0; }
  .home-card .single-card__info p {
    color: #2a2a2a;
    font-weight: 400;
    line-height: 1.4;
    text-align: left;
    font-size: .88rem;
  }

  .home-card .single-card__title {
    display: block;
    text-align: left;
    width: 280px;
    margin: 15px 0 0;
    font-size: 16px;
    color: #2a2a2a;
    font-weight: 800;
    text-decoration: none; }
  @media (max-width: 1500px) {
    .home-card .single-card__title {
      width: 210px; } }

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

  .btn-gray {
    color: #ffffff !important;
    background-color: #a8a8a8 !important;
    border-radius: 10px !important; }
  .btn-gray:hover {
    color: #ffffff;
    background-color: #757575; }

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

  .home-card .single-card__header>img{
    max-width: 70px;
    max-height: 40px;
    width: auto;
    height: auto;
    margin-right: 18px;
  }

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
  .single-card__info p {
    margin: 0;
    line-height: 1.8; }
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
  .single-card__title {
    max-width: 555px;
    font-size: 15px;
    font-weight: 700;
    white-space: nowrap;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    overflow: hidden; }
  .single-card__company{
    margin-bottom: 5px;
    color: dimgrey;
  }
  .single-card__info {
    font-size: 11px; }
  .single-card__info p {
    margin: 0;
    line-height: 1.8; }
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
  /*.single-card__tr {*/
  /*  display: -webkit-box;*/
  /*  display: -ms-flexbox;*/
  /*  display: flex;*/
  /*  -webkit-box-align: center;*/
  /*  -ms-flex-align: center;*/
  /*  align-items: center;*/
  /*  -webkit-box-pack: center;*/
  /*  -ms-flex-pack: center;*/
  /*  justify-content: center;*/
  /*  width: 30px;*/
  /*  height: 30px;*/
  /*  position: absolute;*/
  /*  bottom: 100%;*/
  /*  right: 90px;*/
  /*  overflow: hidden; }*/
  /*.single-card__tr:before {*/
  /*  width: 50%;*/
  /*  height: 50%;*/
  /*  position: absolute;*/
  /*  bottom: 0;*/
  /*  content: '';*/
  /*  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);*/
  /*  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);*/
  /*  background-color: #fff;*/
  /*  -webkit-transform: translateY(50%) rotate(45deg);*/
  /*  -ms-transform: translateY(50%) rotate(45deg);*/
  /*  transform: translateY(50%) rotate(45deg); }*/



  .nhome {
    font-family: "Muller", sans-serif;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #f8f8f8;
  }

  @media (max-height: 650px) {
    .nhome {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }

  @media (max-width: 993px) {
    .nhome {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }

  .nhome__circle {
    position: absolute;
    bottom: 0;
    right: 0;
    border: 100px solid #dd3d34;
    border-radius: 100% 0 0 0;
    z-index: 0;
  }

  @media (max-width: 1100px) {
    .nhome__circle {
      display: none;
    }
  }

  .nhome__dots2 {
    position: absolute;
    bottom: 90px;
    left: -73px;
    z-index: -1;
  }

  @media (max-width: 1450px) {
    .nhome__dots2 {
      display: none;
    }
  }

  .nhome__aside {
    position: relative;
    min-height: 900px;
    z-index: 1;
    width: 550px;
    padding: 25px 24px 25px 17px;
  }

  @media (max-width: 1500px) {
    .nhome__aside {
      width: 460px;
    }
  }

  @media (max-width: 993px) {
    .nhome__aside {
      -webkit-box-ordinal-group: 3;
      -ms-flex-order: 2;
      order: 2;
      margin: auto;
    }
  }

  @media (max-width: 575px) {
    .nhome__aside {
      width: 100%;
    }
  }

  .nhome__aside-header {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin: 20px 0 0;
    -webkit-box-shadow: 0px 5px 15px 0px #ffffff;
    box-shadow: 0px 5px 15px 0px #ffffff;
    z-index: 2;
  }

  @media (max-width: 998px) {
    .nhome__aside-header {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      margin: 20px auto 0;
    }
  }

  @media (max-width: 700px) {
    .nhome__aside-header {
      margin-top: 0;
    }
  }

  .nhome__aside-header-vacancy {
    margin: 0 60px 0 25px;
    color: #dd3d34;
    font-size: 22px;
    font-weight: 800;
  }

  @media (max-width: 700px) {
    .nhome__aside-header-vacancy {
      margin: 0;
    }
  }

  .nhome__main {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    z-index: 2;
    width: calc(100% - 550px);
    height: -webkit-max-content;
    height: -moz-max-content;
    height: max-content;
    margin-top: 15px;
  }

  @media (max-width: 1500px) {
    .nhome__main {
      width: calc(100% - 460px);
    }
  }

  @media (max-width: 993px) {
    .nhome__main {
      -webkit-box-ordinal-group: 2;
      -ms-flex-order: 1;
      order: 1;
      width: 100%;
      margin-top: 0;
    }
  }

  .nhome__main-top {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 290px;
    padding-top: 38px;
    background-color: #243b9b;
    border-radius: 0 33px 0 0;
    overflow: hidden;
  }

  @media (max-width: 993px) {
    .nhome__main-top {
      border-radius: 0;
    }
  }

  @media (max-width: 576px) {
    .nhome__main-top {
      height: 350px;
    }
  }

  .nhome__main-header {
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
    color: #ffffff;
  }

  @media (max-width: 1350px) {
    .nhome__main-header {
      -webkit-box-pack: start;
      -ms-flex-pack: start;
      justify-content: flex-start;
    }
  }

  @media (max-width: 993px) {
    .nhome__main-header {
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
  }

  .nhome__main-header a {
    color: inherit;
    text-decoration: none;
  }

  .nhome__main-header a:hover {
    color: #dd3d34;
  }

  .nhome__main-big-circle {
    position: absolute;
    left: -340px;
    top: -270px;
    width: 558px;
    min-height: 558px;
    z-index: 1;
  }

  @media (max-width: 1200px) {
    .nhome__main-big-circle {
      display: none;
    }
  }

  .nhome__main-gerb {
    position: absolute;
    bottom: 0;
    left: -70px;
    z-index: 3;
  }

  @media (max-width: 1200px) {
    .nhome__main-gerb {
      display: none;
    }
  }

  .nhome__main-bottom {
    position: relative;
    height: 325px;
    margin-right: -30px;
    color: #ffffff;
    background-color: #0253a3;
    border-radius: 0 0 33px 0;
    -webkit-box-shadow: -9px 10px 29px 6px rgba(105, 105, 105, 0.24);
    box-shadow: -9px 10px 29px 6px rgba(105, 105, 105, 0.24);
  }

  @media (max-width: 1750px) {
    .nhome__main-bottom {
      height: 270px;
    }
  }

  @media (max-width: 993px) {
    .nhome__main-bottom {
      margin-right: 0;
      border-radius: 0;
    }
  }

  @media (max-width: 576px) {
    .nhome__main-bottom {
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
      height: 200px;
    }
  }

  .nhome__main-bottom-img {
    position: absolute;
    top: -47px;
    right: -64px;
    z-index: 2;
  }

  @media (max-width: 1750px) {
    .nhome__main-bottom-img {
      width: 200px;
      height: auto;
    }
  }

  @media (max-width: 1200px) {
    .nhome__main-bottom-img {
      width: 170px;
    }
  }

  @media (max-width: 993px) {
    .nhome__main-bottom-img {
      left: -15px;
    }
  }

  @media (max-width: 576px) {
    .nhome__main-bottom-img {
      display: none;
    }
  }

  .nhome__main-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: 80px;
    margin-right: auto;
    margin-left: 125px;
    z-index: 2;
  }

  .nhome__main-content-search {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1750px) {
    .nhome__main-content {
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      margin: 40px auto 50px;
    }

    .nhome__main-content-search {
      flex-wrap: wrap;
      justify-content: center;
      width: 500px;
    }
  }

  @media (max-width: 1400px) {
    .nhome__main-content-search {
      width: 400px;
    }

    .nhome__main-content-search .nhome__form .nhome__form-text {
      display: none;
    }

    .nhome__main-content-search .nhome__form {
      margin-right: 0;
    }

    .nhome__main-content-search .btn {
      font-size: 9px;
    }

    .nhome__main-content-search .btn:last-child {
      margin-right: 0 !important;
    }
  }

  @media (max-width: 1500px) {
    .nhome__main-content {
      margin-right: 70px;
    }
  }

  @media (max-width: 1200px) {
    .nhome__main-content {
      margin: auto auto 50px;
    }
  }

  @media (max-width: 1150px) {
    .nhome__main-top {
      height: 340px;
      padding-top: 60px;
    }

    .nhome__main-content {
      flex-direction: column;
    }
  }

  @media (max-width: 576px) {
    .nhome__main-content {
      width: 100%;
      margin-bottom: 60px;
    }

    .nhome__main-content-search {
      width: 95%;
    }
  }

  @media (max-width: 1350px) {
    .nhome__main-content .btn {
      margin-left: 0;
    }
  }

  @media (max-width: 400px) {
    .nhome__main-top {
      height: 390px;
    }
  }

  .nhome__main-content .btn:last-child {
    margin-right: 125px;
  }

  @media (max-width: 1880px) {
    .nhome__main-content .btn:last-child {
      margin-right: 25px;
    }
  }

  .nhome__custom-title {
    position: relative;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    margin: -40px 150px 0 auto;
    font-size: 130px;
    font-weight: 800;
    line-height: 0.8;
    text-transform: uppercase;
    z-index: 2;
  }

  @media (max-width: 1850px) {
    .nhome__custom-title {
      font-size: 120px;
    }
  }

  @media (max-width: 1750px) {
    .nhome__custom-title {
      margin: -20px 80px 0 auto;
    }
  }

  @media (max-width: 1600px) {
    .nhome__custom-title {
      font-size: 105px;
    }
  }

  @media (max-width: 1350px) {
    .nhome__custom-title {
      margin: -20px 85px 0 auto;
      font-size: 90px;
    }
  }

  @media (max-width: 1200px) {
    .nhome__custom-title {
      font-size: 70px;
      margin: -20px auto auto;
    }
  }

  @media (max-width: 993px) {
    .nhome__custom-title {
      margin: -20px auto 0 auto;
      font-size: 11vw;
    }
  }

  @media (max-width: 576px) {
    .nhome__custom-title {
      font-size: 13vw;
    }
  }

  .nhome__desc {
    width: 917px;
    margin-top: 10px;
    margin-left: 291px;
    margin-right: 0;
    font-size: 15px;
    font-weight: 500;
    text-align: justify;
    letter-spacing: 1px;
  }

  @media (max-width: 1750px) {
    .nhome__desc {
      width: 785px;
      margin-top: 10px;
      margin-left: 211px;
    }
  }

  @media (max-width: 1450px) {
    .nhome__desc {
      width: auto;
      font-size: 13px !important;
    }
  }

  @media (max-width: 1200px) {
    .nhome__desc {
      margin: 30px 30px 0;
    }
  }

  @media (max-width: 993px) {
    .nhome__desc {
      width: 90%;
      margin: 40px auto 0;
      text-align: center;
    }
  }

  .nhome__desc .yellow-text {
    color: #f4c978;
    text-decoration: underline;
  }

  .nhome__form {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 40px;
    width: 540px;
    margin: 8px 70px 8px auto;
    background-color: #fff;
    border-radius: 20px;
  }

  @media (max-width: 1800px) {
    .nhome__form {
      width: 470px;
    }
  }

  @media (max-width: 1750px) {
    .nhome__form {
      margin: 8px 25px 8px auto;
    }
  }

  @media (max-width: 993px) {
    .nhome__form {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 576px) {
    .nhome__form {
      width: 100%;
      margin: 0 0 20px;
    }
  }

  .nhome__form:before {
    position: absolute;
    content: '';
    top: -8px;
    left: -8px;
    bottom: -8px;
    right: -8px;
    border: 1px solid #ffffff;
    border-radius: 28px;
    opacity: 0.1;
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

  .nhome__form-select {
    position: relative;
  }

  .nhome__form-select:after {
    position: absolute;
    content: '';
    left: 0;
    top: 11px;
    height: 18px;
    width: 2px;
    background-color: #dd3d34;
    opacity: 0.26;
  }

  .nhome__form-select .select2 {
    width: 140px !important;
  }

  .nhome__form-select .select2-container .select2-selection--single .select2-selection__rendered {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .nhome__form-select .select2,
  .nhome__form-select .select2-selection__rendered,
  .nhome__form-select .select2-container .select2-selection--single {
    height: 100%;
  }

  .nhome__form-select .select2-container--default .select2-selection--single .select2-selection__arrow {
    top: 0;
    height: 100%;
  }

  .nhome__form-select .select2-container--default .select2-selection--single {
    border: none;
  }

  .nhome__form-select .select2-container .select2-selection--single .select2-selection__rendered {
    padding-left: 20px;
    padding-right: 30px;
  }

  .nhome__form-select .select2-container--default .select2-selection--single .select2-selection__placeholder {
    color: #000000;
  }

  .nhome__form-select .select2-container--default .select2-selection--single .select2-selection__arrow b {
    top: 45%;
    margin-left: -17px;
    border-width: 7px 7px 0 7px;
    border-radius: 3px;
  }

  .nhome__form-select .select2-container--default .select2-selection--single .select2-selection__arrow b:after {
    position: absolute;
    top: -8px;
    left: -5px;
    content: '';
    border-color: #fff transparent transparent transparent;
    border-style: solid;
    border-width: 5px 5px 0 5px;
  }

  .nhome__form-select .select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow b {
    top: 46%;
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
    border-color: #888 transparent transparent transparent;
  }

  .nhome__form-text {
    position: absolute;
    top: -30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #ffffff;
    font-family: 'Muller', sans-serif;
    font-size: 17px;
    font-weight: 400;
  }

  @media (max-width: 576px) {
    .nhome__form-text {
      top: -55px;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
    }
  }

  .nhome__form-text .white-text {
    margin: 0 5px;
    color: #ffffff;
    font-weight: 700;
    text-decoration: underline;
  }

  .nhome__callback {
    letter-spacing: 0.12px;
    color: #fcf46b !important;
    font-size: 9px;
    font-weight: 500;
  }

  .nhome__callback:hover {
    color: #ffffff !important;
  }

  .nhome__search {
    position: relative;
    width: 51px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
  }

  .nhome__nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    width: 100%;
    margin-left: auto;
  }

  @media (max-width: 1250px) {
    .nhome__nav {
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
      z-index: 10;
    }

    .nhome__nav span {
      color: #000000;
    }
  }

  .nhome__nav-item {
    padding: 3px 20px;
    font-size: 16px;
    font-weight: 800;
    color: #ffffff;
    background: none;
    border: none;
    cursor: pointer;
    width: 215px;
    text-align: left;
  }

  @media (max-width: 1250px) {
    .nhome__nav-item {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
      padding: 20px;
      color: #a8a8a8;
      border-bottom: 1px solid #e8e8e8;
    }
  }

  .nhome__nav-item:hover {
    color: #dd3d34;
  }

  .nhome__nav-item.nav-btn {
    width: 155px;
    text-align: left;
  }

  @media (max-width: 1250px) {
    .nhome__nav-item.nav-btn {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 100%;
    }
  }

  .nhome__nav-item_logo {
    position: relative;
    height: 60px;
    margin: -12px auto 0;
    padding: 0;
    overflow: hidden;
    z-index: 2;
  }

  @media (max-width: 1250px) {
    .nhome__nav-item_logo img:first-child {
      display: none;
    }
  }

  .nhome__nav-item_logo img:nth-child(2) {
    display: none;
  }

  @media (max-width: 1400px) {
    .nhome__nav-item_logo {
      width: auto !important;
    }

    .nhome__nav-item_logo img:first-child {
      display: none;
    }

    .nhome__nav-item_logo img:nth-child(2) {
      display: block;
    }
  }

  .nhome__nav-item_logo img:last-child {
    display: none;
  }

  @media (max-width: 1250px) {
    .nhome__nav-item_logo {
      width: 100% !important;
    }

    .nhome__nav-item_logo img:nth-child(2) {
      display: none;
    }

    .nhome__nav-item_logo img:last-child {
      position: absolute;
      top: 50%;
      left: 10px;
      display: block;
      width: 200px;
      min-height: 200px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
  }

  .nhome__nav .dropdown {
    height: auto;
  }

  .nhome__footer {
    position: relative;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: calc(100% - 750px);
    height: 250px;
    margin-top: -175px;
    margin-left: 70px;
  }

  .nhome__footer-left {
    display: flex;
    flex-direction: column;
  }

  .nhome__footer-left .footer__craft-link {
    padding-left: 35px;
  }

  .nhome__footer-left-soc {
    display: flex;
    align-items: center;
    margin: 30px 0 40px;
    color: #000104;
    font-family: "Muller", sans-serif;
    font-size: 12px;
    font-weight: 500;
  }

  .nhome__footer-left-soc img {
    width: 24px;
    margin-right: 14px;
    padding: 4px;
    border-radius: 50%;
  }

  .nhome__footer-left span {
    color: #56575b;
    font-family: "Muller", sans-serif;
    font-size: 12px;
    font-weight: 400;
  }

  .nhome__footer-item {
    display: flex;
    flex-direction: column;
  }

  .nhome__footer-item-head {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .nhome__footer-item-head p {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 10px;
    color: #0f0000;
    font-family: "Muller", sans-serif;
    font-size: 15px;
    font-weight: 700;
  }

  .nhome__footer-item-head p span {
    margin: 5px 0 0 18px;
    color: #334ea8;
    font-family: "Muller", sans-serif;
    font-size: 27px;
    font-weight: 800;
  }

  .nhome__footer-item a {
    margin-bottom: 3px;
    margin-left: 20px;
    color: #243b9b;
    font-family: "Muller", sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  .nhome__footer-item a:last-child {
    color: #243b9b;
    font-family: "Muller", sans-serif;
    font-size: 14px;
    font-weight: 800;
    text-decoration: underline;
  }

  @media (max-width: 1750px) {
    .nhome__main-bottom {
      height: 250px;
    }

    .nhome__desc.desc-pc {
      font-size: 14px;
    }

    .nhome__main-big-circle {
      width: 500px;
      min-height: 500px;
    }

    .nhome__footer {
      margin-top: -280px;
    }
  }

  @media (max-width: 1500px) {
    .nhome__footer {
      width: calc(100% - 360px);
      height: 200px;
      margin-top: 0 !important;
      margin-left: 20px;
    }

    .nhome__footer-left-soc, .nhome__footer-left span {
      font-size: 10px;
    }

    .nhome__footer-item-head p {
      font-size: 11px;
    }
  }

  @media (max-height: 765px) {
    .nhome__main-bottom {
      height: 220px;
    }

    .nhome__footer {
      margin-top: -310px;
    }

    .nhome__footer-item-head img {
      width: 80px;
    }

    .nhome__footer-item-head p span {
      font-size: 20px;
    }

    .nhome__footer-item a {
      font-size: 12px;
    }
  }

  @media (max-width: 993px) {
    .nhome__main-bottom {
      height: 250px !important;
    }

    .nhome__footer {
      -webkit-box-ordinal-group: 4;
      -ms-flex-order: 3;
      order: 3;
      width: 90%;
      height: auto !important;
      margin: auto;
    }
  }

  @media (max-width: 768px) {
    .nhome__footer {
      flex-wrap: wrap;
    }

    .nhome__footer-left, .nhome__footer-item {
      align-items: center;
      width: 45%;
      margin: 10px 0;
    }
  }

  @media (max-width: 576px) {
    .nhome__footer {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 390px) {
    .nhome__footer-left, .nhome__footer-item {
      width: 100%;
    }

    .nhome__footer-left {
      order: 4;
    }
  }

  .country-select {
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    width: 200px;
    height: 34px;
    max-width: 200px;
    max-height: 34px;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 16px;
    color: #999;
    font-size: 16px;
  }

  .country-select-active {
    border-radius: 16px 16px 0 0;
  }

  .country-select span {
    position: relative;
    display: flex;
    width: 100%;
    cursor: pointer;
  }

  .country-select span b {
    border-color: #888 transparent transparent transparent;
    border-style: solid;
    border-width: 5px 4px 0 4px;
    height: 0;
    right: 5px;
    margin-left: -4px;
    margin-top: -2px;
    position: absolute;
    top: 50%;
    width: 0;
  }

  .country-select ul {
    position: absolute;
    top: 32px;
    left: -1px;
    display: block;
    width: 200px;
    padding: 0;
    background-color: #fff;
    border: 1px solid #aaa;
    border-top: none;
    border-radius: 0 0 16px 16px;
    list-style: none;
    overflow: hidden;
    z-index: 20;
  }

  .country-select ul li a {
    display: block;
    width: 100%;
    padding: 5px 10px;
    color: #243b9b;
  }

  .country-select ul li:hover {
    background-color: #5897fb;
  }

  .country-select ul li:hover a {
    color: #ffffff;
  }

  .geolocation, .geolocation__block {
    display: flex;
    align-items: center;
    margin-right: auto;
  }

  .geolocation > img, .geolocation__block > img {
    margin-right: 17px;
  }

  @media (min-width: 1251px) {
    .nhome__nav {
      align-items: center;
    }
  }

  @media (min-width: 1200px) {
    .nhome__nav-item {
      width: 190px;
    }
  }

  .nhome__nav-item_logo {
    display: flex;
    align-items: center;
  }

  .btn-red {
    color: #ffffff;
    background-color: #dd3d34;
  }

  .btn-red:hover {
    color: #ffffff;
    background-color: #921f19;
  }

  .btn {
    position: relative;
    padding: 15px 27px 13px;
    margin: 8px;
    text-decoration: none;
    letter-spacing: 1.1px;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 11px;
    border-radius: 20px;
    white-space: nowrap;
  }

  .btn:before {
    position: absolute;
    content: '';
    top: -8px;
    left: -8px;
    bottom: -8px;
    right: -8px;
    border: 1px solid #ffffff;
    border-radius: 28px;
    opacity: 0.1;
  }

  /*@media (max-width: 1600px){*/
  /*    .nhome__title {*/
  /*        font-size: 175px;*/
  /*    }*/
  /*}*/

  .nhome__title {
    position: relative;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    margin: -40px 125px 0 auto;
    font-size: 268px;
    font-weight: 800;
    line-height: 0.8;
    text-transform: uppercase;
    z-index: 2;
  }

  @media (max-width: 1850px) {
    .nhome__title {
      font-size: 220px;
    }
  }

  @media (max-width: 1750px) {
    .nhome__title {
      margin: -20px 40px 0 auto;
    }
  }

  @media (max-width: 1600px) {
    .nhome__title {
      font-size: 175px;
    }
  }

  @media (max-width: 1350px) {
    .nhome__title {
      margin: -20px 80px 0 auto;
      font-size: 127px;
    }
  }

  @media (max-width: 1200px) {
    .nhome__title {
      margin: -20px auto auto;
    }
  }

  @media (max-width: 993px) {
    .nhome__title {
      margin: -20px auto 0 auto;
      font-size: 21vw;
    }
  }

  @media (max-width: 576px) {
    .nhome__title {
      font-size: 22vw;
    }
  }

  .nhome__footer-left .footer__craft-link {
    padding-left: 35px;
  }

  .footer__craft-link {
    position: relative;
    text-decoration: none;
    color: #ff0200 !important;
    font-size: 12px;
    padding-left: 25px;
    margin-left: 5px;
  }

</style>
