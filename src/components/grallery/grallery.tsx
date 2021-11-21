import React from 'react';
import { Props } from './interface';

import ControlsItem from './coreComponents/controlsItem';
const defaultProps = {};

const Grallery: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };
  const { gap, itemWidth, showQuantity = 3 } = props;
  //gallery-content偏移量
  const [offset, setOffset] = React.useState(0);
  const [duration, setDuration] = React.useState(false);
  const itemQuantity = React.Children.count(props.children);
  function getItems() {
    const { children, itemClick } = props;
    return React.Children.map(children, (child, i) => {
      return (
        <ControlsItem
          itemWidth={Number(itemWidth)}
          itemClick={
            itemClick
              ? () => {
                  itemClick(i);
                }
              : () => {}
          }
        >
          {child}
        </ControlsItem>
      );
    });
  }

  var startX: number; //鼠标起始位置
  var curr: number; //当前的偏移量是几个单位的item,可判断是否偏移过多
  var offsetCopy: number; //offset是state，不能及时获取，用该变量代替
  function MouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    //放置图片被选中变蓝
    document.onselectstart = () => false;
    startX = e.clientX;
    document.onmousemove = e => {
      offsetCopy = e.clientX - startX + offset;
      setOffset(offsetCopy);
      curr = Math.abs(Math.round(offsetCopy / Number(itemWidth))) + showQuantity;
    };

    document.onmouseup = e => {
      setDuration(true);
      console.log(offsetCopy);
      if (offsetCopy > 0) {
        setOffset(0);
      } else {
        if (curr >= itemQuantity) {
          offsetCopy = (itemQuantity - showQuantity) * (Number(itemWidth) + Number(gap)) * -1;
          setOffset(offsetCopy);
        }
      }
      setTimeout(() => {
        setDuration(false);
      }, 300);
      document.onmousemove = null;
      document.onmouseup = null;
      document.onselectstart = null;
    };
  }
  return (
    <div
      className="gallery-thumbs controls"
      onMouseDown={e => {
        MouseDown(e);
      }}
    >
      <div
        className="gallery-content"
        style={{
          transform: `translateX(${offset}px)`,
          maxWidth: `${(Number(itemWidth) + Number(gap)) * showQuantity - Number(gap)}px`,
          gap: `${gap}px`,
          transitionDuration: (duration ? 300 : 0) + 'ms',
        }}
      >
        {getItems()}
      </div>
    </div>
  );
};

export default Grallery;
