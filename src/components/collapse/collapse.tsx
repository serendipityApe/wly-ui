import React, { useState, useEffect, useRef } from 'react';
import { CollapseProps } from './interface';
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

  // panel组件替换,加入props
  function getItems() {
    const { children, accordion } = props;
    return toArray(children).map((child: React.ReactElement, index: number) => {
      const key = child.key || String(index);
      const childProps = {
        ...child.props,
        activeKey,
        setActiveKey,
        key,
        myKey: key,
        accordion,
      };
      return cloneElement(child, childProps);
    });
  }
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else if (props.onChange) {
      props.onChange(activeKey);
    }
  }, [activeKey]);
  return <div className="collapse">{getItems()}</div>;
};

Collapse.Panel = CollapsePanel;
export default Collapse;
