
import Swiper from 'swiper/dist/js/swiper.js';
import 'swiper/dist/css/swiper.min.css';

const SwiperComponent = (dom, el, flag) => {
  if (flag) {
    /* eslint-disable no-new */
    new Swiper(dom, {
      loop: true, // 循环
      autoplay: { // 滑动后继续播放（不写官方默认暂停）
        disableOnInteraction: false,
      },
      pagination: { // 分页器
        el,
      },
    });
  } else {
    /* eslint-disable no-new */
    new Swiper(dom, {
      pagination: { // 分页器
        el,
      },
    });
  }
};


const SwiperSlide = (dom) => {
  /* eslint-disable no-new */
  new Swiper(dom, {
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 5,
    freeMode: true,
    loop: false,
  });
};
export {
  SwiperComponent,
  SwiperSlide,
};
