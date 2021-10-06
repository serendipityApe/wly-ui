import React, { useState } from 'react';
import { CollapseProps, CollapsePanelProps } from './interface';
import CollapsePanel from './collapsePanel';

import { toArray } from '../../_utils/array';
import { cloneElement } from '../../_utils/reactNode';

interface CollaspeInterface extends React.FC<CollapseProps> {
  Panel: typeof CollapsePanel;
}
const defaultProps = {};

const Collapse: CollaspeInterface = userProps => {
  const props = { ...defaultProps, ...userProps };
  const [activeKey, setActiveKey] = useState(props.activeKey ? props.activeKey : []);
  function getItems() {
    const { children } = props;
    return toArray(children).map((child: React.ReactElement, index: number) => {
      const key = child.key || String(index);
      const childProps = {
        ...child.props,
        activeKey,
        setActiveKey,
        key,
        myKey: key,
      };
      return cloneElement(child, childProps);
    });
  }
  return <div className="collapse">{getItems()}</div>;
};

Collapse.Panel = CollapsePanel;
export default Collapse;
