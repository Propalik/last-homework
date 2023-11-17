import Swiper from 'swiper' // Инициализация слайдера
import { Navigation, Pagination } from 'swiper/modules' // Инициализация иконок, пагинации и т.д.

function initTasksSwiper() {
  const swiper = new Swiper('.swiper', {
    // eslint-disable-next-line no-undef
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
  })
}
