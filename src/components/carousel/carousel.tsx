import React, { useRef, useEffect, useState } from 'react';
import { CarouselProps } from './interface';
import SliderItem from './coreComponents/sliderItem';
import debounce from '../../_utils/debounce';
import { useUpdateEffect } from '../../_utils/hooks';
import { cloneElement } from '../../_utils/reactNode';
// import Grallery from '../grallery';

const defaultProps = {};

const Carousel: React.FC<CarouselProps> = userProps => {
  const props = { ...defaultProps, ...userProps };
  const [activeKey, setActiveKey] = useState<number>(0);
  const prevCount = useRef(React.Children.count(props.children));
  // 将children处理一下
  function getItems() {
    const { children } = props;
    return React.Children.map(children, (child, i) => (
      <SliderItem key={i} myKey={i} width={attr.width} activeKey={activeKey}>
        {child}
      </SliderItem>
    ));
  }
  function initSlider() {}
  const carousel = useRef<HTMLDivElement>(null);
  // 记录.swiper-container宽度
  const [attr, setAttr] = useState({ width: 0 });
  // 当触发onresize，改变attr
  useEffect(() => {
    const resizeListener = () => {
      setAttr({ width: carousel.current!.clientWidth });
    };
    // 防抖优化
    const debouncedResizeListener = debounce(resizeListener, 1500, {
      leading: true,
      trailing: true,
    });
    resizeListener();
    window.addEventListener('resize', debouncedResizeListener);
    return () => {
      window.removeEventListener('resize', debouncedResizeListener);
    };
  }, []);
  if (props.afterChange) {
    useUpdateEffect(props.afterChange, [activeKey], activeKey);
  }
  // useEffect(() => {
  //   console.log(attr);
  //   console.log(carousel.current?.clientWidth);
  // }, [attr]);
  return (
    <div className="wly-carousel">
      <div className="swiper-container" ref={carousel}>
        <div className="swiper-wrapper">{getItems()}</div>
      </div>
      <ul className="swiper-dots swiper-dots-bottom">
        {(() => {
          console.log(React.isValidElement(props.grallery));
          if (props.grallery) {
            // const myProps = {
            //   // showQuantity: 3,
            //   // gap: 10,
            //   // itemWidth: 45,
            //   // itemClick: (k: number) => {
            //   //   setActiveKey(k);
            //   // },
            //   active: 'swiper-active',
            // };
            console.log(props.grallery);
            const ownFn = props.grallery.props.onClick;
            const injectFn = function(e: any) {
              e._swiperTo = setActiveKey;
              ownFn(e);
            };
            const ownFn2 = props.grallery.props.itemClick;
            const injectFn2 = function(e: any) {
              ownFn2(e, setActiveKey);
            };
            const injectProps = {
              onClick: injectFn,
              itemClick: injectFn2,
            };
            const Grallery = cloneElement(props.grallery, injectProps);
            return Grallery;
          } else {
            const item = [];
            for (let i = 0; i < prevCount.current; i++) {
              item.push(
                <li key={i} className={activeKey === i ? 'swiper-active' : ''}>
                  <button
                    onClick={() => {
                      setActiveKey(i);
                    }}
                  >
                    {i}
                  </button>
                </li>,
              );
            }
            return item;
          }
        })()}
      </ul>
    </div>
  );
};

export default Carousel;
