import React, { useState, useRef, useEffect } from 'react';
import { CollapsePanelProps, CollapseProps } from './interface';

interface CollapsePanelPropsPlus extends CollapsePanelProps {
  activeKey: Array<number | string>;
  setActiveKey: Function;
  myKey: string | number;
}
const defaultProps = {
  // 继承至Collapse
  // activeKey: null,
  // setActiveKey: () => {return false},
};
interface CollapsePanelInterface extends React.FC<CollapsePanelPropsPlus> {}
const CollapsePanel: CollapsePanelInterface = userProps => {
  const props = { ...defaultProps, ...userProps };
  const [exp, setExp] = useState(false);
  const [prevRow, setPrevRow] = useState({});
  const content = useRef<HTMLDivElement>(null);
  if (userProps !== prevRow) {
    // console.log(userProps);
    // console.log(prevRow);
    setExp(judge());
    setPrevRow(userProps);
  }
  function expand() {
    if (!exp) {
      props.setActiveKey([...props.activeKey, props.myKey]);
      content.current!.style.height = `${content.current!.scrollHeight}px`;
    } else {
      const arr = props.activeKey.filter(item => item !== props.myKey);
      props.setActiveKey([...arr]);
      content.current!.style.height = '0';
    }
  }
  function judge() {
    let res = false;
    for (let i = 0; i < props.activeKey.length; i += 1) {
      if (props.activeKey[i] === props.myKey) {
        res = true;
        break;
      }
    }
    return res;
  }
  useEffect(() => {
    setExp(judge());
  }, []);
  return (
    <div className={exp ? 'collapse__item collapse-open' : 'collapse__item'}>
      <header
        className="collapse__header"
        onClick={props.collapsible === 'disabled' ? () => false : expand}
      >
        <i className="bx bx-plus collapse__icon"></i>
        <h3 className="collapse__title">{props.header}</h3>
      </header>
      <div className="collapse__content" ref={content}>
        <p className="collapse__description">{props.children}</p>
      </div>
    </div>
  );
};
export default CollapsePanel;
