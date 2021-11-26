import React from 'react';

interface Props {
  myKey: number;
  activeKey: number;
  width: number;
}

const defaultProps = {};

const SliderItem: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };
  const SliderItem = React.useRef<HTMLDivElement>(null);
  function initGrallery() {}

  return (
    <div
      ref={SliderItem}
      className={
        props.activeKey === props.myKey ? 'swiper-slide swiper-slide-active' : 'swiper-slide'
      }
      style={
        props.activeKey === props.myKey
          ? {
              opacity: '1',
              transition: 'opacity 300ms',
              width: props.width,
              transform: `translate(${props.width * props.myKey * -1}px)`,
            }
          : {
              opacity: '0',
              transition: 'opacity 300ms',
              width: props.width,
              transform: `translate(${props.width * props.myKey * -1}px)`,
            }
      }
    >
      {props.children}
    </div>
  );
};
export default SliderItem;
