import React from 'react';
import { CollapseProps, CollapsePanelProps } from './interface';
import CollapsePanel from './collapsePanel';

interface CollaspeInterface extends React.FC<CollapseProps> {
  Panel: typeof CollapsePanel;
}
const defaultProps = {};

const Collapse: CollaspeInterface = userProps => {
  const props = { ...defaultProps, ...userProps };

  return <div>Collapse</div>;
};

Collapse.Panel = CollapsePanel;
export default Collapse;
