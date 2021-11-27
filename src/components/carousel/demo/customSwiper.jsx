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
      <Grallery>
        {imgList.map(item => (
          <img style={{ borderRadius: '0.75rem' }} key={item + 'dots'} src={item} alt="" />
        ))}
      </Grallery>
    }
  >
    {imgList.map(item => (
      <div key={item} className="displayItem">
        <img className="displayItemImg" src={item} alt="" />
      </div>
    ))}
  </Carousel>
);
