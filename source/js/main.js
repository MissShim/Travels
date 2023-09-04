import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import './modules/video';

// let desktopBreakpoint = window.matchMedia('(min-width: 1200px)');
// let tabletBreakpoint = window.matchMedia('(min-width: 768px) and (max-width: 1199px)');
// let mobileBreakpoint = window.matchMedia('(min-width: 0px) and (max-width: 767px)');

// let init = false;
// ---------------------------------
const Swiper = window.Swiper;
const initHeaderSlider = () =>
  new Swiper('.slider__container', {
    direction: 'horizontal',
    loop: !0,
    pagination: {
      el: '.slider__pagination',
      clickable: !0,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
    },
  });

// ------------------------------------

const initCatalogSlider = () =>
  new Swiper('.catalog__content', {
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.catalog__button--next',
      prevEl: '.catalog__button--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 18,
      },
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
    },
  });

const initInstructorsSlider = () =>
  new Swiper('.education__content', {
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.education__button--next',
      prevEl: '.education__button--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
      },
    },
  });


const initFeedbackSlider = () =>
  new Swiper('.feedback__container', {
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.feedback__button--next',
      prevEl: '.feedback__button--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 1.2,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    },
  });

const initGallerySlider = () =>
  new Swiper('.photogallery__content', {
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.photogallery__button--next',
      prevEl: '.photogallery__button--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 2.5,
        slidesPerGroup: 2,
        spaceBetween: 5,
      },
    },
  });
// const initDesktopOnlySlider = () =>
//  new Swiper('.advantages__container', {
//    slidesPerView: 3.6,
//    centeredSlides: true,
//    loop: true,
//    spaceBetween: 30,
//    direction: 'horizontal',

//    navigation: {
//      nextEl: '.advantages__button--next',
//      prevEl: '.advantages__button--prev',
//    },

//    breakpoints: {
//      1200: {
//        slidesPerView: 3.6,
//        spaceBetween: 30,
//      },
//    },
//  });

// const breakpointChecker = () => {
//  if (desktopBreakpoint.matches) {
//    if (!init) {
//      init = true;
//      initDesktopOnlySlider();
//    }
//  } else if (!tabletBreakpoint.matches && !mobileBreakpoint.matches) {
//    Swiper.destroy();
//    init = false;
//  }
// };

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  initHeaderSlider();
  initCatalogSlider();
  initInstructorsSlider();
  initFeedbackSlider();
  initGallerySlider();
  // breakpointChecker();

  // desktopBreakpoint.addEventListener(breakpointChecker);
  // tabletBreakpoint.addEventListener(breakpointChecker);
  // mobileBreakpoint.addEventListener(breakpointChecker);
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

// window.addEventListener('resize', function () {
// breakpointChecker();
// });

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
