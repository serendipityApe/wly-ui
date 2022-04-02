import React from 'react';
import { Carousel, Grallery } from 'wly-ui';
import './customSwiper.css';
const imgList = [
  'https://cdn.pixabay.com/photo/2016/12/10/11/50/beach-1897129_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/12/17/08/20/sea-island-3879938_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/12/17/08/20/sea-island-3879937_1280.jpg',
];
export default () => (
  <Carousel
    grallery={
      // <Grallery
      //   showQuantity={3}
      //   gap={10}
      //   itemWidth={45}
      //   itemClick={(k,swiperTo) => {
      //     // setActiveKey(k);
      //     swiperTo(k);
      //     console.log(k);
      //   }}
      //   active="swiper-active"
      // >
      //   {imgList.map(item => (
      //     <img style={{ borderRadius: '0.75rem' }} key={item + 'dots'} src={item} alt="" />
      //   ))}
      // </Grallery>
      <div>
        <div className="1" onClick={e => console.log(e._swiperTo)}>
          1
        </div>
        <div className="2">
          2
        </div>
      </div>
    }
  >
    {imgList.map(item => (
      <div key={item} className="displayItem">
        <img className="displayItemImg" src={item} alt="" />
      </div>
    ))}
  </Carousel>
);
