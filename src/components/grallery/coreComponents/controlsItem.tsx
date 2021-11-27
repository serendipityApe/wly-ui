import React from 'react';

interface Props {
  itemWidth: number;
  itemClick: () => void;
  active: string;
}

const controlsItem: React.FC<Props> = props => {
  const { itemWidth, itemClick, children, active } = props;
  return (
    <div
      className={active ? `${active} controls-item` : 'controls-item'}
      style={{ minWidth: `${itemWidth}px`, height: `${itemWidth}px` }}
      onDragStart={e => {
        e.preventDefault();
      }}
      onClick={itemClick}
    >
      {children}
    </div>
  );
};
export default controlsItem;
