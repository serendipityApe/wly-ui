import React from 'react';

interface Props {
  itemWidth: number;
  itemClick: () => void;
}

const controlsItem: React.FC<Props> = props => {
  const { itemWidth, itemClick, children } = props;
  return (
    <div
      className="controls-item"
      style={{ minWidth: `${itemWidth}px` }}
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
