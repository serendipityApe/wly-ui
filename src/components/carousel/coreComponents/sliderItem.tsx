import React from 'react';

interface Props {
  myKey: number;
}

const defaultProps = {};

const SliderItem: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };
  const sliderItem = React.useRef<HTMLDivElement>(null);
  const [attr, setAttr] = React.useState({ width: 0 });
  function initSlider() {}
  React.useEffect(() => {
    setAttr({ width: sliderItem.current!.scrollWidth });
    sliderItem.current!.style.width = `${sliderItem.current!.scrollWidth}px`;
  }, []);
  return (
    <div ref={sliderItem} className="swiper-slide">
      {props.children}
    </div>
  );
};
export default SliderItem;
