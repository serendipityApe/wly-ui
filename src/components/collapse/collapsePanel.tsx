import React, { useState, useRef, useEffect } from 'react';
import { CollapsePanelProps } from './interface';

interface CollapsePanelPropsPlus extends CollapsePanelProps {
  activeKey?: Array<number | string>;
  setActiveKey?: Function;
  myKey?: string | number;
  accordion?: boolean;
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
    setExp(judge());
    setPrevRow(userProps);
  }
  function expand() {
    if (props.myKey) {
      if (!exp) {
        if (props.accordion) {
          props.setActiveKey!([props.myKey]);
        } else {
          props.setActiveKey!([...props.activeKey!, props.myKey]);
        }
      } else {
        // eslint-disable-next-line
        if (props.accordion) {
          props.setActiveKey!([]);
        } else {
          const arr = props.activeKey!.filter(item => item !== props.myKey);
          props.setActiveKey!([...arr]);
        }
      }
    } else {
      // eslint-disable-next-line
      if (!exp) {
        setExp(true);
      } else {
        setExp(false);
      }
    }
  }
  useEffect(() => {
    if (!exp) {
      content.current!.style.height = '0';
    } else {
      content.current!.style.height = `${content.current!.scrollHeight}px`;
    }
  }, [exp]);
  function judge() {
    if (props.myKey) {
      let res = false;
      for (let i = 0; i < props.activeKey!.length; i += 1) {
        if (props.activeKey![i] === props.myKey) {
          res = true;
          break;
        }
      }
      return res;
    }
    return false;
  }
  return (
    <div className={exp ? 'collapse__item collapse-open' : 'collapse__item'}>
      <header
        className="collapse__header"
        onClick={props.collapsible === 'disabled' ? () => false : expand}
      >
        <i className="bx bx-plus collapse__icon"></i>
        <h3 className="collapse__title">{props.header}</h3>
      </header>
      {/* forceRender ant是点开后不会消失了 */}
      {/* {exp ? (
        <div className="collapse__content" ref={content}>
          <p className="collapse__description">{props.children}</p>
        </div>
      ) : (
        <div className="collapse__content" ref={content}></div>
      )} */}
      <div className="collapse__content" ref={content}>
        <div className="collapse__description">{props.children}</div>
      </div>
    </div>
  );
};
export default CollapsePanel;
