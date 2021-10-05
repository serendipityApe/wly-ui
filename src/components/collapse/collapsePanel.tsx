import React from 'react';
import { CollapsePanelProps } from './interface';

const defaultProps = {};
interface CollapsePanelInterface extends React.FC<CollapsePanelProps> {}
const CollapsePanel: CollapsePanelInterface = userProps => {
  const props = { ...defaultProps, ...userProps };
  return (
    <div className="accordion__item">
      <header className="accordion__header">
        <i className="bx bx-plus accordion__icon"></i>
        <h3 className="accordion__title">{props.header}</h3>
      </header>

      <div className="accordion__content">
        <p className="accordion__description">
          {props.children}
        </p>
      </div>
    </div>
  );
};
export default CollapsePanel;
