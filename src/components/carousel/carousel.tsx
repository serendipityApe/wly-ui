import React, { useRef, useEffect } from 'react';
import { Props } from './interface';
import SliderItem from './coreComponents/sliderItem';
const defaultProps = {};

const Carousel: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };

  const prevCount = useRef(React.Children.count(props.children));
  function getItems() {
    const { children } = props;
    return React.Children.map(children, (child, i) => {
      return (
        <SliderItem key={i} myKey={i}>
          {child}
        </SliderItem>
      );
    });
  }
  function initSlider() {}

  useEffect(() => {}, []);
  return (
    <div className="wly-carousel">
      <div className="swiper-container">
        <div className="swiper-wrapper">{getItems()}</div>
      </div>
      <ul className="swiper-dots swiper-dots-bottom">
        {(() => {
          let item = [];
          for (let i = 0; i < prevCount.current; i++) {
            item.push(
              <li key={i}>
                <button>i</button>
              </li>,
            );
          }
          return item;
        })()}
      </ul>
    </div>
  );
};

export default Carousel;
