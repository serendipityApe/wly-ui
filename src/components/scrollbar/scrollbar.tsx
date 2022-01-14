import React from 'react';
import { Props } from './interface';

const defaultProps = {};

const Scrollbar: React.FC<Props> = userProps => {
  const props = { ...defaultProps, ...userProps };
  return (
    <div className="wly-scrollbar">
      {props.children}
    </div>
  );
};

export default Scrollbar;
